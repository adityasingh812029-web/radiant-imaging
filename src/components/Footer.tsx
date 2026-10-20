import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../config/business';
import { DIAGNOSTIC_SERVICES } from '../config/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071E52] text-white border-t border-[#0B285F] text-left">
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-badge.jpeg"
                alt="Radiant Imaging Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shrink-0"
              />
              <div>
                <div className="text-xl font-black tracking-tight text-white">
                  RADI<span className="text-[#D91F32]">A</span>NT{' '}
                  <span className="text-[#D91F32] font-bold">Imaging</span>
                </div>
                <div className="text-xs font-semibold text-[#D91F32]">
                  रेडिएंट इमेजिंग • Raigarh
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Radiant Imaging is an advanced diagnostic centre located on Medical College
              Road, Raigarh, Chhattisgarh. Equipped with modern imaging technology to
              deliver accurate reports and compassionate patient care.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1">
              <div className="font-bold text-white uppercase tracking-wider text-[11px] text-[#D91F32]">
                Our Guiding Tagline
              </div>
              <p className="text-gray-300 italic">
                "{BUSINESS_INFO.tagline}"
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Advertised Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Our Diagnostic Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {DIAGNOSTIC_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-white hover:text-[#D91F32] transition-colors flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-gray-400">
                      {service.hindiTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Centre Location & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Visit & Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D91F32] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D91F32] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-white hover:text-[#D91F32]"
                >
                  +91 {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white/10 hover:bg-white hover:text-[#0B285F] text-white text-xs font-semibold rounded-lg border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#D91F32]" />
                <span>Get Directions on Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer and Copyright Strip */}
      <div className="bg-[#05163D] border-t border-white/10 py-6 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Radiant Imaging (रेडिएंट इमेजिंग). All rights reserved.
            </p>
            <p className="text-[11px] text-gray-400">
              Disclaimer: Information provided is for diagnostic enquiry purposes. Enquiries require confirmation by our clinical team.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white underline">
              Raigarh Centre Contact
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#D91F32] font-bold">
              Call: 99265 58635
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
