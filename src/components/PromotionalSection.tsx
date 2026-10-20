import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HeartHandshake, HelpCircle } from 'lucide-react';

export const PromotionalSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Panel 1: Explore diagnostic services */}
        <div className="bg-[#F4F7FB] rounded-2xl border border-[#E3E9F1] overflow-hidden p-6 sm:p-10 transition-all hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E3E9F1] text-xs font-semibold text-[#0B285F]">
                <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
                <span>Comprehensive Diagnostics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B285F] tracking-tight">
                Find the Diagnostic Service You Need
              </h2>
              <p className="text-base text-[#66748A] max-w-xl leading-relaxed">
                Explore our advertised imaging, cardiac, pulmonary and women's health
                services. From high-resolution CT Scans and 5D Sonography to digital X-Rays
                and ECG, our centre delivers clinical clarity.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B285F] hover:bg-[#071E52] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D91F32]" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border border-white">
                <img
                  src="/images/digital-xray.jpg"
                  alt="Diagnostic Imaging and Digital Radiography Suite"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Patient-focused care (Alternating Layout) */}
        <div className="bg-gradient-to-br from-[#0B285F]/5 to-white rounded-2xl border border-[#E3E9F1] overflow-hidden p-6 sm:p-10 transition-all hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 order-last md:order-first">
              <div className="rounded-xl overflow-hidden shadow-md border border-white">
                <img
                  src="/images/doctor-consultation.jpg"
                  alt="Doctor consulting with patient at Radiant Imaging"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E3E9F1] text-xs font-semibold text-[#D91F32]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#D91F32]" />
                <span>Patient-Focused Care</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B285F] tracking-tight">
                Your Comfort Matters at Every Step
              </h2>
              <p className="text-base text-[#66748A] max-w-xl leading-relaxed">
                Get in touch with Radiant Imaging for information about our services and
                appointment availability. We prioritize respectful communication, patient privacy,
                and a calm, hygienic clinical environment.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3: Appointment assistance */}
        <div className="bg-[#0B285F] text-white rounded-2xl overflow-hidden p-6 sm:p-10 shadow-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">
                <HelpCircle className="w-3.5 h-3.5 text-[#D91F32]" />
                <span>Appointment Assistance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Need Help Planning Your Visit?
              </h2>
              <p className="text-base text-gray-200 max-w-xl leading-relaxed">
                Contact our team to enquire about a suitable appointment time and the
                service you need. Our staff will assist you with preparation advice and
                slot booking.
              </p>
              <div className="pt-2">
                <a
                  href="#callback-section"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-sm rounded-xl shadow-md transition-all"
                >
                  <span>Request a Call Back</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img
                  src="/images/ultrasound-5d.jpg"
                  alt="5D Sonography Examination at Radiant Imaging"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D91F32]/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
