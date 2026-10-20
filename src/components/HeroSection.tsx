import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0B285F]/5 via-white to-[#F4F7FB] pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B285F]/10 border border-[#0B285F]/20 text-[#0B285F] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Advanced Diagnostic Imaging • Raigarh</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0B285F] tracking-tight leading-[1.15]">
              Advanced Imaging.{' '}
              <span className="text-[#D91F32] block sm:inline">
                Care That Comes First.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#66748A] max-w-2xl leading-relaxed">
              Explore diagnostic imaging and healthcare services at Radiant Imaging,
              Medical College Road, Raigarh. Committed to advanced technology,
              accurate clinical diagnosis, and compassionate patient care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#0B285F] font-semibold text-base rounded-xl border border-[#0B285F]/20 hover:border-[#0B285F] shadow-xs transition-all"
              >
                <Phone className="w-5 h-5 text-[#D91F32]" />
                <span>Call Radiant Imaging</span>
              </a>
            </div>

            {/* Trust and Key Info Badges */}
            <div className="pt-4 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#192A46]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">8 Diagnostic Modalities</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B285F] shrink-0" />
                <span className="font-medium">Digital High-Definition Scans</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#D91F32] shrink-0" />
                <span className="font-medium">Medical College Rd, Raigarh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Diagnostic Imaging Suite Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow / Card Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/hero-suite.jpg"
                  alt="Modern Diagnostic CT Scanner Suite at Radiant Imaging"
                  className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo-badge.jpeg"
                      alt="Radiant Imaging Logo"
                      className="w-10 h-10 rounded-full object-cover border border-[#0B285F]/20 shrink-0"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#0B285F]">
                        Radiant Imaging • Raigarh
                      </div>
                      <div className="text-[11px] text-[#66748A]">
                        रेडिएंट इमेजिंग • Medical College Road
                      </div>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 rounded">
                    Open Now
                  </span>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-4 -right-4 -z-10 w-28 h-28 bg-[#D91F32]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 -z-10 w-36 h-36 bg-[#0B285F]/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
