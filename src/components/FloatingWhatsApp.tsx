import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Radiant Imaging on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D91F32] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D91F32]"></span>
        </span>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#071E52] text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          Chat on WhatsApp • 99265 58635
        </span>
      </a>
    </aside>
  );
};
