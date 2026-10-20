import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  showTagline = true,
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D91F32] rounded-lg p-1">
      {/* Official circular logo badge */}
      <div className="relative shrink-0">
        <img
          src="/logo-badge.jpeg"
          alt="Radiant Imaging Logo"
          className={`rounded-full object-cover shadow-sm border border-gray-200 transition-transform duration-300 group-hover:scale-105 ${
            size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12 sm:w-14 sm:h-14'
          }`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-[#0B285F] ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            RADI<span className="text-[#D91F32]">A</span>NT
          </span>
          <span
            className={`font-bold text-[#D91F32] ${
              size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
            }`}
          >
            Imaging
          </span>
        </div>

        {/* Hindi Secondary Branding */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium mt-0.5">
          <span className="text-[#D91F32] font-semibold">रेडिएंट</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#0B285F] font-semibold">इमेजिंग</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <p
            className={`hidden sm:block text-[10px] tracking-tight mt-0.5 ${
              isDark ? 'text-gray-300' : 'text-[#66748A]'
            }`}
          >
            Advanced Technology • Accurate Diagnosis • Compassionate Care
          </p>
        )}
      </div>
    </Link>
  );
};
