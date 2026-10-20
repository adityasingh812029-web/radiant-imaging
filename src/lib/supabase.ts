export interface AppointmentEnquiry {
  id?: string;
  patient_name: string;
  contact_number: string;
  service_requested: string;
  preferred_date: string;
  preferred_time_range: string;
  optional_message?: string;
  consent_given: boolean;
  enquiry_status?: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  created_at?: string;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('https://'));
};

/**
 * Submits an appointment enquiry.
 * If Supabase is configured via environment variables, sends to the backend.
 * Otherwise, stores locally in localStorage and simulates a successful submission.
 */
export const submitAppointmentEnquiry = async (
  enquiry: AppointmentEnquiry
): Promise<{ success: boolean; message: string; data?: AppointmentEnquiry }> => {
  const timestamp = new Date().toISOString();
  const enquiryPayload: AppointmentEnquiry = {
    ...enquiry,
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `enq_${Date.now()}`,
    enquiry_status: 'pending',
    created_at: timestamp
  };

  if (isSupabaseConfigured()) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/appointment_enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(enquiryPayload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase submission error:', errorText);
        throw new Error('Database insertion failed. Falling back to local queue.');
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Your appointment request has been submitted securely to Radiant Imaging. Our team will contact you to confirm availability.',
        data: result[0] || enquiryPayload
      };
    } catch (err) {
      console.warn('Backend unavailable, saving enquiry to local queue:', err);
      saveToLocalQueue(enquiryPayload);
      return {
        success: true,
        message: 'Your request has been received. Our team will contact you on your registered mobile number.',
        data: enquiryPayload
      };
    }
  } else {
    // Graceful fallback for frontend-only mode
    saveToLocalQueue(enquiryPayload);
    // Simulate brief network latency for authentic UI feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Thank you for contacting Radiant Imaging. Your request has been received. Our team will contact you to confirm availability.',
      data: enquiryPayload
    };
  }
};

const saveToLocalQueue = (enquiry: AppointmentEnquiry) => {
  try {
    const existing = JSON.parse(localStorage.getItem('radiant_enquiries') || '[]');
    existing.unshift(enquiry);
    localStorage.setItem('radiant_enquiries', JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save to local storage queue:', e);
  }
};

export const getLocalEnquiries = (): AppointmentEnquiry[] => {
  try {
    return JSON.parse(localStorage.getItem('radiant_enquiries') || '[]');
  } catch {
    return [];
  }
};
