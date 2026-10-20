import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#071E52] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#0B285F]/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-[#D91F32] bg-white/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
            Raigarh, C.G.
          </span>
          <span className="text-gray-200">
            Radiant Imaging | Advanced Diagnostic Centre in Raigarh
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Medical College Road</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1 font-medium text-white hover:text-[#D91F32] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>+91 {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
