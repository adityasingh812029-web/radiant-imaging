import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, X } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const StickyBottomBar: React.FC = () => {
  const [isDesktopVisible, setIsDesktopVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280 && !isDismissed) {
        setIsDesktopVisible(true);
      } else {
        setIsDesktopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <>
      {/* 1. Mobile Fixed Bottom Action Bar (Phones: <md, Always Visible for Instant Conversion) */}
      <aside
        aria-label="Mobile Quick Action Bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E3E9F1] shadow-[0_-4px_25px_rgba(0,0,0,0.12)] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          {/* Call Now Touch Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-white border border-[#0B285F]/30 hover:border-[#0B285F] text-[#0B285F] text-xs font-bold rounded-xl shadow-xs active:scale-95 transition-all text-center"
          >
            <Phone className="w-4 h-4 text-[#D91F32] shrink-0" />
            <span className="truncate">Call Now</span>
          </a>

          {/* Book Appointment Touch Button */}
          <Link
            to="/book-appointment"
            className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs font-bold rounded-xl shadow-md active:scale-95 transition-all text-center"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span className="truncate">Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-0.5" />
          </Link>
        </div>
      </aside>

      {/* 2. Desktop Floating Sticky Bar (Laptops & Desktop: md+, appears upon scroll) */}
      {isDesktopVisible && !isDismissed && (
        <aside
          aria-label="Desktop Quick Booking Bar"
          className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E3E9F1] shadow-2xl py-2.5 px-4 animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Branding badge thumbnail and phone link */}
            <div className="flex items-center gap-3">
              <img
                src="/logo-badge.jpeg"
                alt="Radiant Imaging"
                className="w-9 h-9 rounded-full object-cover border border-[#0B285F]/20 shrink-0"
              />
              <div className="text-left leading-tight">
                <span className="font-bold text-xs text-[#0B285F]">
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
            <div className="flex items-center gap-3">
              <Link
                to="/book-appointment"
                className="flex items-center gap-1.5 px-5 py-2 bg-[#D91F32] hover:bg-[#b51727] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
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
      )}
    </>
  );
};

