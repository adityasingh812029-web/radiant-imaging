import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Phone, MessageCircle, ShieldCheck, Clock, Info } from 'lucide-react';
import { AppointmentForm } from '../components/AppointmentForm';
import { BUSINESS_INFO, getWhatsAppLink } from '../config/business';

export const BookAppointment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || '';

  return (
    <main className="py-10 sm:py-16 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-12 shadow-sm text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Direct Diagnostic Booking</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B285F] tracking-tight">
              Book an Appointment / Request a Call Back
            </h1>

            <p className="text-base sm:text-lg text-[#66748A] leading-relaxed">
              Submit your enquiry to schedule a diagnostic scan or consultation at Radiant Imaging,
              Medical College Road, Raigarh. Our clinical support team will contact you to confirm
              slot availability and examination preparation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-[#192A46]">
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <Clock className="w-4 h-4 text-[#D91F32]" />
                Flexible Timing Ranges
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                No Payment Required Online
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <Phone className="w-4 h-4 text-[#0B285F]" />
                +91 {BUSINESS_INFO.phoneDisplay}
              </span>
            </div>
          </div>
        </div>

        {/* The Appointment Enquiry Form Component */}
        <AppointmentForm initialService={requestedService} isStandalonePage={true} />

        {/* Quick Contact & WhatsApp Alternatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B285F]">
              Need Instant WhatsApp Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
              If you have an urgent doctor prescription or want to check immediate slot
              availability, you can chat with our desk team on WhatsApp directly.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#0B285F]/10 text-[#0B285F] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#D91F32]" />
            </div>
            <h3 className="text-lg font-bold text-[#0B285F]">
              Direct Phone Enquiries
            </h3>
            <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
              Our telephone line is active during operating hours for enquiries regarding scan
              preparation, timing, and directions to our centre.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B285F] hover:bg-[#071E52] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#D91F32]" />
                <span>Call +91 {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Notice */}
        <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl text-left flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Notice to Patients:</strong> Submitting an enquiry allows our scheduling team
            to reserve your provisional request and check clinical indications. Appointments
            are confirmed once our staff speaks with you directly. Please bring your doctor’s
            prescription and previous medical records with you on the day of your visit.
          </p>
        </div>
      </div>
    </main>
  );
};
