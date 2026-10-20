import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../config/business';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Raigarh Diagnostic Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Visit Radiant Imaging in Raigarh
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            Conveniently situated on Medical College Road, Raigarh, our centre provides
            seamless accessibility for walk-in investigations and scheduled diagnostic appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address and Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            <div className="bg-[#F4F7FB] border border-[#E3E9F1] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <div className="text-xs font-bold text-[#D91F32] uppercase tracking-wider mb-1">
                  Centre Address
                </div>
                <h3 className="text-xl font-bold text-[#0B285F]">
                  Radiant Imaging (रेडिएंट इमेजिंग)
                </h3>
                <p className="text-sm text-[#192A46] mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D91F32] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.fullAddress}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Contact Numbers
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E3E9F1] flex items-center justify-center text-[#D91F32]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Official Mobile / Direct Calling</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-[#0B285F] hover:text-[#D91F32]"
                    >
                      +91 {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 bg-[#0B285F] hover:bg-[#071E52] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#D91F32]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-white border-2 border-[#0B285F] hover:bg-gray-50 text-[#0B285F] text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#D91F32]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-gray-400" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E3E9F1] flex items-center gap-3 text-xs text-[#66748A]">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Accurate clinical reporting and dignified patient care at Medical College Road, Raigarh.
              </span>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#E3E9F1] shadow-md relative bg-gray-100">
              <iframe
                title="Radiant Imaging Location - Medical College Road, Raigarh"
                src="https://maps.google.com/maps?q=Medical+College+Road+Raigarh+Chhattisgarh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-md border border-gray-100 text-xs font-semibold text-[#0B285F] hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D91F32]" />
                <span>Raigarh, Chhattisgarh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
