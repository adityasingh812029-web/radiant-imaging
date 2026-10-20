import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X, ChevronDown, Phone, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, getWhatsAppLink } from '../config/business';
import { DIAGNOSTIC_SERVICES } from '../config/services';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-left duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#E3E9F1]">
            <BrandLogo size="sm" showTagline={false} />
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-[#D91F32] rounded-lg focus:outline-none"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#D91F32] text-white' : 'text-[#192A46] hover:bg-[#F4F7FB]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#D91F32] text-white' : 'text-[#192A46] hover:bg-[#F4F7FB]'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Services with Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#192A46] hover:bg-[#F4F7FB]"
              >
                <span>Diagnostic Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isServicesOpen ? 'rotate-180 text-[#D91F32]' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-[#D91F32]/20 ml-3 mt-1">
                  {DIAGNOSTIC_SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={onClose}
                      className="block px-3 py-2 rounded-md text-xs font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB]"
                    >
                      <div className="font-semibold">{service.title}</div>
                      <div className="text-[10px] text-gray-400">{service.hindiTitle}</div>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-bold text-[#D91F32] hover:underline"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/book-appointment"
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#D91F32] text-white' : 'text-[#192A46] hover:bg-[#F4F7FB]'
                }`
              }
            >
              Book Appointment
            </NavLink>

            <NavLink
              to="/contact"
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#D91F32] text-white' : 'text-[#192A46] hover:bg-[#F4F7FB]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Footer Contact Details */}
        <div className="p-4 border-t border-[#E3E9F1] bg-[#F4F7FB] space-y-3">
          <Link
            to="/book-appointment"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D91F32] text-white text-sm font-semibold rounded-lg shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#0B285F] border border-[#E3E9F1] text-xs font-semibold rounded-lg"
          >
            <Phone className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Call: +91 {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry</span>
          </a>

          <div className="flex items-start gap-1.5 text-[11px] text-gray-500 pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#D91F32] shrink-0 mt-0.5" />
            <span>{BUSINESS_INFO.fullAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
