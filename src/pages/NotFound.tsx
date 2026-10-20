import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const NotFound: React.FC = () => {
  return (
    <main className="py-20 bg-[#F4F7FB] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0B285F]/5 border-2 border-[#D91F32]/20 flex items-center justify-center text-[#D91F32] font-black text-3xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#66748A] max-w-md mx-auto">
            The page or service you are searching for might have been moved, updated, or is no longer available.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 bg-white hover:bg-gray-50 text-[#0B285F] font-semibold text-sm rounded-xl border border-[#E3E9F1] transition-all flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Browse Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-200 text-xs text-gray-500">
          Need immediate assistance? Call Radiant Imaging at{' '}
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#D91F32]">
            +91 {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
};
