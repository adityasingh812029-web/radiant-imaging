import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../config/business';
import { DIAGNOSTIC_SERVICES, type DiagnosticService } from '../config/services';

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onMobileMenuToggle,
  isMobileMenuOpen = false,
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const filteredServices = searchQuery.trim()
    ? DIAGNOSTIC_SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.hindiTitle.includes(searchQuery) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectService = (service: DiagnosticService) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    navigate(`/services/${service.slug}`);
  };

  return (
    <header className="bg-white border-b border-[#E3E9F1] sticky top-0 z-40 transition-shadow duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand Logo */}
          <div className="shrink-0">
            <BrandLogo />
          </div>

          {/* Middle: Service Search Field (Desktop & Tablet) */}
          <div
            ref={searchContainerRef}
            className="hidden md:flex flex-1 max-w-md relative mx-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search scans, Doppler, ECG, PFT..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F4F7FB] border border-[#E3E9F1] rounded-full text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F] focus:border-transparent transition-all"
                aria-label="Search diagnostic services"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Autocomplete Dropdown */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#E3E9F1] overflow-hidden z-50">
                <div className="p-2 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Diagnostic Services ({filteredServices.length})
                </div>
                {filteredServices.length > 0 ? (
                  <ul className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                    {filteredServices.map((service) => (
                      <li key={service.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectService(service)}
                          className="w-full text-left px-4 py-3 hover:bg-[#F4F7FB] transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <div className="font-semibold text-sm text-[#0B285F] group-hover:text-[#D91F32]">
                              {service.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {service.hindiTitle} • {service.category}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#D91F32] group-hover:translate-x-0.5 transition-all" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">
                    No services matching "{searchQuery}".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Quick Call & Book Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#0B285F] hover:text-[#D91F32] bg-[#F4F7FB] hover:bg-gray-100 rounded-lg transition-colors border border-[#E3E9F1]"
              title="Call Radiant Imaging directly"
            >
              <Phone className="w-4 h-4 text-[#D91F32]" />
              <div className="text-left leading-tight hidden lg:block">
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider">
                  Call Centre
                </span>
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </div>
              <span className="lg:hidden">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <Link
              to="/book-appointment"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D91F32] hover:bg-[#b51727] rounded-lg shadow-sm hover:shadow transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 text-[#D91F32] bg-[#F4F7FB] border border-[#E3E9F1] rounded-lg"
              aria-label="Call Radiant Imaging"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={onMobileMenuToggle}
              className="p-2.5 text-[#0B285F] bg-[#F4F7FB] border border-[#E3E9F1] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D91F32]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
