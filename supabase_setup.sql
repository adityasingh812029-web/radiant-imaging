-- ====================================================================
-- RADIANT IMAGING — SUPABASE DATABASE MIGRATION SCRIPT
-- Table: appointment_enquiries
-- ====================================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.appointment_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_name TEXT NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    service_requested TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time_range VARCHAR(50) NOT NULL,
    optional_message TEXT,
    consent_given BOOLEAN DEFAULT true NOT NULL,
    enquiry_status VARCHAR(20) DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Create index for faster querying by status and date
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.appointment_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.appointment_enquiries(enquiry_status);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.appointment_enquiries ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow anonymous public users to submit enquiries only (INSERT)
CREATE POLICY "Allow public anonymous appointment submissions" 
ON public.appointment_enquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. Policy: Restrict reading enquiries to authenticated staff/admin roles
CREATE POLICY "Allow authenticated staff to view enquiries" 
ON public.appointment_enquiries 
FOR SELECT 
TO authenticated 
USING (true);

-- 6. Policy: Restrict updating enquiry status to authenticated staff
CREATE POLICY "Allow authenticated staff to update enquiry status" 
ON public.appointment_enquiries 
FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- ====================================================================
-- FRONTEND ENVIRONMENT CONFIGURATION (.env)
-- Add these variables to your .env file:
-- VITE_SUPABASE_URL=https://your-project.supabase.co
-- VITE_SUPABASE_ANON_KEY=your-anon-public-key
-- ====================================================================
