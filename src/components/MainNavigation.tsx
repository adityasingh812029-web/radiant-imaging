import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Activity, Heart, Wind, UserCheck, ShieldCheck } from 'lucide-react';
import { DIAGNOSTIC_SERVICES } from '../config/services';

export const MainNavigation: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-3.5 text-sm font-semibold transition-colors flex items-center gap-1.5 focus:outline-none focus:text-[#D91F32] ${
      isActive
        ? 'text-[#D91F32] after:content-[""] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#D91F32]'
        : 'text-[#192A46] hover:text-[#0B285F]'
    }`;

  // Group services
  const imagingServices = DIAGNOSTIC_SERVICES.filter((s) => s.category === 'Imaging');
  const ultrasoundServices = DIAGNOSTIC_SERVICES.filter((s) => s.category === 'Ultrasound');
  const cardiacServices = DIAGNOSTIC_SERVICES.filter((s) => s.category === 'Cardiac');
  const pulmonaryServices = DIAGNOSTIC_SERVICES.filter((s) => s.category === 'Pulmonary');
  const womensHealthServices = DIAGNOSTIC_SERVICES.filter((s) => s.category === "Women's Health");

  return (
    <nav className="bg-white border-b border-[#E3E9F1] hidden md:block relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <ul className="flex items-center space-x-1" role="menubar">
            <li role="none">
              <NavLink to="/" end className={navItemClass} role="menuitem">
                Home
              </NavLink>
            </li>

            <li role="none">
              <NavLink to="/about" className={navItemClass} role="menuitem">
                About Us
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li
              role="none"
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="px-4 py-3.5 text-sm font-semibold text-[#192A46] hover:text-[#0B285F] transition-colors flex items-center gap-1.5 focus:outline-none focus:text-[#D91F32]"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#D91F32]' : ''
                  }`}
                />
              </button>

              {/* Grouped Services Mega-Menu Dropdown */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-[#E3E9F1] p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  {/* Column 1: Imaging & Ultrasound */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B285F] uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                        <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>Imaging</span>
                      </div>
                      <ul className="space-y-1">
                        {imagingServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block p-2 rounded-lg text-sm font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB] transition-all"
                            >
                              <div>{service.title}</div>
                              <span className="text-[11px] text-gray-400 font-normal">
                                {service.hindiTitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B285F] uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                        <Activity className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>Ultrasound</span>
                      </div>
                      <ul className="space-y-1">
                        {ultrasoundServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block p-2 rounded-lg text-sm font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB] transition-all"
                            >
                              <div>{service.title}</div>
                              <span className="text-[11px] text-gray-400 font-normal">
                                {service.hindiTitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Cardiac & Pulmonary */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B285F] uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                        <Heart className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>Cardiac</span>
                      </div>
                      <ul className="space-y-1">
                        {cardiacServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block p-2 rounded-lg text-sm font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB] transition-all"
                            >
                              <div>{service.title}</div>
                              <span className="text-[11px] text-gray-400 font-normal">
                                {service.hindiTitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B285F] uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                        <Wind className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>Pulmonary</span>
                      </div>
                      <ul className="space-y-1">
                        {pulmonaryServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block p-2 rounded-lg text-sm font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB] transition-all"
                            >
                              <div>{service.title}</div>
                              <span className="text-[11px] text-gray-400 font-normal">
                                {service.hindiTitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Women's Health & Fast Links */}
                  <div className="space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B285F] uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                        <UserCheck className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>Women's Health</span>
                      </div>
                      <ul className="space-y-1">
                        {womensHealthServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block p-2 rounded-lg text-sm font-medium text-[#192A46] hover:text-[#D91F32] hover:bg-[#F4F7FB] transition-all"
                            >
                              <div>{service.title}</div>
                              <span className="text-[11px] text-gray-400 font-normal">
                                {service.hindiTitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-[#F4F7FB] rounded-xl border border-[#E3E9F1]">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0B285F] mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D91F32]" />
                        <span>All 8 Diagnostic Modalities</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2">
                        View comprehensive examination overviews, indications, and booking guidance.
                      </p>
                      <Link
                        to="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold text-[#D91F32] hover:underline"
                      >
                        Browse All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li role="none">
              <NavLink to="/book-appointment" className={navItemClass} role="menuitem">
                Book Appointment
              </NavLink>
            </li>

            <li role="none">
              <NavLink to="/contact" className={navItemClass} role="menuitem">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Right helper note */}
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Raigarh Centre • Enquiries Open</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
