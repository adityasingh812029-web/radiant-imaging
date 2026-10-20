import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const AnnouncementBar: React.FC = () => {
  const marqueeItems = [
    { text: "Radiant Imaging (रेडिएंट इमेजिंग) — Raigarh's Premier Diagnostic Centre", icon: "🏥" },
    { text: "Helpline: +91 99265 58635", icon: "📞", link: `tel:${BUSINESS_INFO.phoneRaw}` },
    { text: "Medical College Road, Raigarh (C.G.)", icon: "📍" },
    { text: "CT Scan • 5D Sonography • Colour Doppler • Digital X-Ray • Echocardiography • ECG • PFT • OBG", icon: "⚡" },
    { text: "Accurate Digital Reports & Compassionate Patient Care", icon: "✓" },
  ];

  return (
    <div className="bg-[#071E52] text-white text-xs border-b border-[#0B285F]/60 overflow-hidden">
      {/* Desktop Announcement Layout (Tablet & Desktop: md+) */}
      <div className="hidden md:block py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
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
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
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

      {/* Mobile Marquee Strip (Phones: <md) */}
      <div className="md:hidden flex items-center py-1.5 relative">
        {/* Pinned Left Badge */}
        <div className="shrink-0 pl-2.5 pr-2 z-10 flex items-center bg-[#071E52] shadow-[4px_0_8px_#071E52]">
          <span className="inline-flex items-center gap-1 font-bold text-white bg-[#D91F32] px-2 py-0.5 rounded text-[10px] tracking-wide uppercase shadow-xs">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Raigarh</span>
          </span>
        </div>

        {/* Continuous Scrolling Ticker Container */}
        <div className="overflow-hidden relative w-full flex select-none">
          {/* First loop instance */}
          <div className="flex animate-marquee shrink-0 items-center gap-6 pr-6 text-[11.5px] font-medium text-gray-200">
            {marqueeItems.map((item, idx) => (
              <span key={`marq-1-${idx}`} className="inline-flex items-center gap-1.5 shrink-0">
                <span>{item.icon}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-white font-bold underline decoration-[#D91F32] underline-offset-2 hover:text-[#D91F32]"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
                <span className="text-white/30 ml-3">•</span>
              </span>
            ))}
          </div>

          {/* Second duplicate loop instance for seamless infinite wrapping */}
          <div className="flex animate-marquee shrink-0 items-center gap-6 pr-6 text-[11.5px] font-medium text-gray-200" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`marq-2-${idx}`} className="inline-flex items-center gap-1.5 shrink-0">
                <span>{item.icon}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-white font-bold underline decoration-[#D91F32] underline-offset-2 hover:text-[#D91F32]"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
                <span className="text-white/30 ml-3">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

