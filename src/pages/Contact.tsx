import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../config/business';
import { AppointmentForm } from '../components/AppointmentForm';

export const Contact: React.FC = () => {
  return (
    <main className="py-10 sm:py-16 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-12 shadow-sm text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Contact Radiant Imaging</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B285F] tracking-tight">
              Get in Touch with Our Raigarh Centre
            </h1>

            <p className="text-base sm:text-lg text-[#66748A] leading-relaxed">
              We are located on Medical College Road, Raigarh, Chhattisgarh. Reach out to our
              clinical team for diagnostic scan enquiries, preparation instructions, or appointment
              scheduling.
            </p>
          </div>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1: Address */}
          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B285F]/5 border border-[#E3E9F1] flex items-center justify-center text-[#D91F32]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B285F]">Centre Location</h2>
              <p className="text-xs text-gray-400 font-medium">रेडिएंट इमेजिंग • रायगढ़</p>
            </div>
            <p className="text-xs sm:text-sm text-[#192A46] leading-relaxed">
              {BUSINESS_INFO.fullAddress}
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D91F32] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B285F]/5 border border-[#E3E9F1] flex items-center justify-center text-[#D91F32]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B285F]">Direct Calling</h2>
              <p className="text-xs text-gray-400 font-medium">Official Mobile Line</p>
            </div>
            <p className="text-xs sm:text-sm text-[#192A46] leading-relaxed">
              Call our team directly for slot enquiries, scan timing, and report collection advice.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B285F] text-white text-xs font-semibold rounded-lg hover:bg-[#071E52] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D91F32]" />
                <span>+91 {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B285F]">WhatsApp Helpdesk</h2>
              <p className="text-xs text-gray-400 font-medium">Quick Text Messaging</p>
            </div>
            <p className="text-xs sm:text-sm text-[#192A46] leading-relaxed">
              Message us to send doctor prescriptions or ask questions about diagnostic modalities.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map & Directions */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 shadow-sm text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#0B285F]">
                Find Us on Medical College Road
              </h2>
              <p className="text-xs sm:text-sm text-[#66748A]">
                Raigarh, Chhattisgarh, India
              </p>
            </div>
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Turn-by-Turn Directions</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#E3E9F1]">
            <iframe
              title="Radiant Imaging Location"
              src="https://maps.google.com/maps?q=Medical+College+Road+Raigarh+Chhattisgarh&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Callback Enquiry Form */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] overflow-hidden shadow-sm">
          <AppointmentForm isStandalonePage={true} />
        </div>
      </div>
    </main>
  );
};
