import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, X } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick Booking Bar" className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E3E9F1] shadow-2xl py-2.5 px-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Branding badge thumbnail and phone link */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-badge.jpeg"
            alt="Radiant Imaging"
            className="w-9 h-9 rounded-full object-cover border border-[#0B285F]/20 shrink-0 hidden sm:block"
          />
          <div className="text-left leading-tight">
            <span className="hidden md:inline font-bold text-xs text-[#0B285F]">
              Radiant Imaging Raigarh:
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B285F] hover:text-[#D91F32]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>+91 {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Center / Right: Book Appointment Button & Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/book-appointment"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md focus:outline-none"
            aria-label="Dismiss bottom bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
