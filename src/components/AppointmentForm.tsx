import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Clock, CheckCircle2, AlertCircle, Loader2, Send, MapPin, User, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';
import { DIAGNOSTIC_SERVICES } from '../config/services';
import { submitAppointmentEnquiry, type AppointmentEnquiry } from '../lib/supabase';

interface AppointmentFormProps {
  initialService?: string;
  isStandalonePage?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  isStandalonePage = false,
}) => {
  const [formData, setFormData] = useState({
    patient_name: '',
    contact_number: '',
    service_requested: initialService || 'CT Scan',
    preferred_date: '',
    preferred_time_range: 'Morning (09:00 AM – 12:00 PM)',
    optional_message: '',
    consent_given: true,
    website_hp: '', // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Minimum date today for date picker
  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.patient_name.trim()) {
      newErrors.patient_name = 'Please enter patient name.';
    }

    const cleanPhone = formData.contact_number.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.contact_number = 'Please enter mobile number.';
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.contact_number = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.service_requested) {
      newErrors.service_requested = 'Please select a service.';
    }

    if (!formData.preferred_date) {
      newErrors.preferred_date = 'Please select a preferred date.';
    } else if (formData.preferred_date < todayDateString) {
      newErrors.preferred_date = 'Preferred date cannot be in the past.';
    }

    if (!formData.consent_given) {
      newErrors.consent_given = 'You must agree to be contacted regarding this enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.website_hp) {
      console.warn('Spam submission filtered.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const enquiry: AppointmentEnquiry = {
        patient_name: formData.patient_name.trim(),
        contact_number: formData.contact_number.trim(),
        service_requested: formData.service_requested,
        preferred_date: formData.preferred_date,
        preferred_time_range: formData.preferred_time_range,
        optional_message: formData.optional_message.trim(),
        consent_given: formData.consent_given,
      };

      const result = await submitAppointmentEnquiry(enquiry);

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({
          patient_name: '',
          contact_number: '',
          service_requested: initialService || 'CT Scan',
          preferred_date: '',
          preferred_time_range: 'Morning (09:00 AM – 12:00 PM)',
          optional_message: '',
          consent_given: true,
          website_hp: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Submission failed. Please call our centre directly.');
      }
    } catch (err) {
      console.error('Enquiry error:', err);
      setSubmitStatus('error');
      setStatusMessage('Unable to submit enquiry at this time. Please call our centre at +91 99265 58635.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="callback-section"
      className={`relative ${
        isStandalonePage ? 'py-6 sm:py-10' : 'py-16 sm:py-20 bg-gradient-to-b from-[#071E52] to-[#0B285F] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Context, Guidelines & Direct Call assistance */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Direct Callback & Appointment Enquiry</span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
                isStandalonePage ? 'text-[#0B285F]' : 'text-white'
              }`}
            >
              Request a Call Back to{' '}
              <span className="text-[#D91F32]">Book an Appointment</span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isStandalonePage ? 'text-[#66748A]' : 'text-gray-200'
              }`}
            >
              Submit your enquiry with your preferred date and time. Our Raigarh team will
              call you back to verify slot availability, provide necessary preparation
              guidelines, and confirm your visit.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D91F32]/10 text-[#D91F32] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${isStandalonePage ? 'text-[#0B285F]' : 'text-white'}`}>
                    Prefer Direct Calling?
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xs text-[#D91F32] font-bold hover:underline"
                  >
                    Call +91 {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D91F32]/10 text-[#D91F32] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${isStandalonePage ? 'text-[#0B285F]' : 'text-white'}`}>
                    Centre Address
                  </div>
                  <p className={`text-xs ${isStandalonePage ? 'text-gray-500' : 'text-gray-300'}`}>
                    {BUSINESS_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D91F32]/10 text-[#D91F32] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${isStandalonePage ? 'text-[#0B285F]' : 'text-white'}`}>
                    Confirmation Notice
                  </div>
                  <p className={`text-xs ${isStandalonePage ? 'text-gray-500' : 'text-gray-300'}`}>
                    Submitting this form initiates an enquiry. Your appointment is confirmed
                    once our centre team contacts you directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-[#E3E9F1] p-6 sm:p-8 text-[#192A46]">
              <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0B285F]">
                    Appointment Enquiry Form
                  </h3>
                  <p className="text-xs text-gray-500">
                    Fields marked with <span className="text-[#D91F32]">*</span> are required.
                  </p>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-semibold text-[#0B285F] bg-[#F4F7FB] border border-[#E3E9F1] rounded-full">
                  Verified Raigarh Facility
                </span>
              </div>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3"
                  role="alert"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Enquiry Submitted Successfully!</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === 'error' && (
                <div
                  className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Submission Error</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot Spam Field (Hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Patient Name & Mobile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="patient_name"
                      className="block text-xs font-semibold text-[#192A46] mb-1.5"
                    >
                      Patient Name <span className="text-[#D91F32]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="patient_name"
                        value={formData.patient_name}
                        onChange={(e) =>
                          setFormData({ ...formData, patient_name: e.target.value })
                        }
                        placeholder="e.g. Ramesh Patel"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F] ${
                          errors.patient_name ? 'border-red-500 bg-red-50/20' : 'border-[#E3E9F1]'
                        }`}
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    </div>
                    {errors.patient_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.patient_name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact_number"
                      className="block text-xs font-semibold text-[#192A46] mb-1.5"
                    >
                      Mobile Number <span className="text-[#D91F32]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="contact_number"
                        maxLength={10}
                        value={formData.contact_number}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact_number: e.target.value.replace(/\D/g, ''),
                          })
                        }
                        placeholder="10-digit mobile (e.g. 9926558635)"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F] ${
                          errors.contact_number ? 'border-red-500 bg-red-50/20' : 'border-[#E3E9F1]'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    </div>
                    {errors.contact_number && (
                      <p className="text-red-500 text-xs mt-1">{errors.contact_number}</p>
                    )}
                  </div>
                </div>

                {/* Service Requested Dropdown */}
                <div>
                  <label
                    htmlFor="service_requested"
                    className="block text-xs font-semibold text-[#192A46] mb-1.5"
                  >
                    Diagnostic Service Required <span className="text-[#D91F32]">*</span>
                  </label>
                  <select
                    id="service_requested"
                    value={formData.service_requested}
                    onChange={(e) =>
                      setFormData({ ...formData, service_requested: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E3E9F1] text-sm text-[#192A46] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B285F]"
                  >
                    {DIAGNOSTIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.hindiTitle}) — {s.category}
                      </option>
                    ))}
                  </select>
                  {errors.service_requested && (
                    <p className="text-red-500 text-xs mt-1">{errors.service_requested}</p>
                  )}
                </div>

                {/* Preferred Date & Time Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="preferred_date"
                      className="block text-xs font-semibold text-[#192A46] mb-1.5"
                    >
                      Preferred Date <span className="text-[#D91F32]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="preferred_date"
                        min={todayDateString}
                        value={formData.preferred_date}
                        onChange={(e) =>
                          setFormData({ ...formData, preferred_date: e.target.value })
                        }
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-[#192A46] focus:outline-none focus:ring-2 focus:ring-[#0B285F] ${
                          errors.preferred_date ? 'border-red-500 bg-red-50/20' : 'border-[#E3E9F1]'
                        }`}
                      />
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                    {errors.preferred_date && (
                      <p className="text-red-500 text-xs mt-1">{errors.preferred_date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferred_time_range"
                      className="block text-xs font-semibold text-[#192A46] mb-1.5"
                    >
                      Preferred Time Range <span className="text-[#D91F32]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="preferred_time_range"
                        value={formData.preferred_time_range}
                        onChange={(e) =>
                          setFormData({ ...formData, preferred_time_range: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#E3E9F1] text-sm text-[#192A46] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B285F]"
                      >
                        <option value="Morning (09:00 AM – 12:00 PM)">
                          Morning (09:00 AM – 12:00 PM)
                        </option>
                        <option value="Afternoon (12:00 PM – 04:00 PM)">
                          Afternoon (12:00 PM – 04:00 PM)
                        </option>
                        <option value="Evening (04:00 PM – 08:00 PM)">
                          Evening (04:00 PM – 08:00 PM)
                        </option>
                      </select>
                      <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="optional_message"
                    className="block text-xs font-semibold text-[#192A46] mb-1.5"
                  >
                    Additional Notes / Doctor Prescription Reference (Optional)
                  </label>
                  <textarea
                    id="optional_message"
                    rows={3}
                    value={formData.optional_message}
                    onChange={(e) =>
                      setFormData({ ...formData, optional_message: e.target.value })
                    }
                    placeholder="Mention specific examination details, doctor referral, or any assistance required..."
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E3E9F1] text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F]"
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      id="consent_given"
                      checked={formData.consent_given}
                      onChange={(e) =>
                        setFormData({ ...formData, consent_given: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D91F32] focus:ring-[#D91F32]"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I agree to be contacted by Radiant Imaging regarding this diagnostic
                      appointment enquiry. Learn more in our{' '}
                      <Link
                        to="/privacy-policy"
                        className="text-[#0B285F] underline font-medium hover:text-[#D91F32]"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent_given && (
                    <p className="text-red-500 text-xs mt-1">{errors.consent_given}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#D91F32] hover:bg-[#b51727] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Your Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Appointment Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
