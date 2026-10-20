import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#071E52] via-[#0B285F] to-[#071E52] text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Raigarh Healthcare Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Looking for Diagnostic Imaging in Raigarh?
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Contact Radiant Imaging to discuss the services available and enquire
            about your preferred appointment time. Our team is ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D91F32] hover:bg-[#b51727] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white hover:text-[#0B285F] text-white font-bold text-base rounded-xl border border-white/30 transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#D91F32]" />
              <span>Call Us: +91 {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D91F32]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};
