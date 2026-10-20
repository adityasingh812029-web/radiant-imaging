import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, MapPin, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';
import { DIAGNOSTIC_SERVICES } from '../config/services';

export const About: React.FC = () => {
  return (
    <main className="py-10 sm:py-16 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Page Hero Header */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-12 shadow-sm text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>About Radiant Imaging</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B285F] tracking-tight">
              Clinical Accuracy With A Human Touch
            </h1>

            <p className="text-base sm:text-lg text-[#66748A] leading-relaxed">
              Radiant Imaging (रेडिएंट इमेजिंग) is a specialized diagnostic imaging and
              healthcare centre based on Medical College Road, Raigarh, Chhattisgarh.
              Built on the principles of advanced technology, accurate diagnostic imaging, and
              compassionate care.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#192A46]">
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <MapPin className="w-4 h-4 text-[#D91F32]" />
                Raigarh (C.G.)
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <ShieldCheck className="w-4 h-4 text-[#0B285F]" />
                8 Core Diagnostic Services
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7FB] px-3 py-1.5 rounded-lg border border-[#E3E9F1]">
                <Phone className="w-4 h-4 text-emerald-600" />
                Direct Enquiries Available
              </span>
            </div>
          </div>
        </div>

        {/* Mission & Values Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#D91F32] uppercase tracking-wider">
              Our Clinical Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B285F] tracking-tight">
              Why We Founded Radiant Imaging in Raigarh
            </h2>
            <p className="text-sm sm:text-base text-[#66748A] leading-relaxed">
              Modern medical treatments depend critically on timely, high-resolution diagnostic
              evaluations. Whether investigating acute pain, monitoring pregnancy progress, evaluating
              cardiac function, or assessing respiratory health, patients and referring physicians need
              scans they can depend upon.
            </p>
            <p className="text-sm sm:text-base text-[#66748A] leading-relaxed">
              Our centre on Medical College Road was established to ensure that patients in Raigarh
              and adjacent regions do not have to compromise on imaging clarity or travel long
              distances for essential CT, Doppler, ultrasound, and cardiac investigations.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-[#192A46]">
                  <strong>Advanced Technology:</strong> Modern equipment including multi-slice CT, 5D sonography, and digital radiography.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-[#192A46]">
                  <strong>Accurate Diagnosis:</strong> Meticulous image acquisition and systematic clinical review.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-[#192A46]">
                  <strong>Compassionate Care:</strong> Respectful, patient-friendly environment ensuring comfort at every step.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/images/doctor-consultation.jpg"
                alt="Radiant Imaging Consultation"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* The 8 Advertised Services Overview */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-12 shadow-sm text-left">
          <div className="mb-8">
            <div className="text-xs font-bold text-[#D91F32] uppercase tracking-wider mb-1">
              Complete Modality Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B285F]">
              The 8 Diagnostic Services Advertised at Our Centre
            </h2>
            <p className="text-sm text-[#66748A] mt-1 max-w-2xl">
              Each examination at Radiant Imaging follows standardized imaging protocols to support your consulting clinician.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIAGNOSTIC_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-5 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] flex flex-col justify-between hover:border-[#0B285F]/30 transition-all"
              >
                <div>
                  <div className="text-xs font-semibold text-[#D91F32] mb-1">
                    {service.category}
                  </div>
                  <h3 className="font-bold text-base text-[#0B285F]">
                    {service.title}
                  </h3>
                  <div className="text-xs text-gray-400 font-medium mb-2">
                    {service.hindiTitle}
                  </div>
                  <p className="text-xs text-[#66748A] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-[#0B285F] hover:text-[#D91F32] inline-flex items-center gap-1"
                  >
                    <span>Read Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Appointment Action */}
        <div className="bg-[#0B285F] text-white rounded-2xl p-8 sm:p-12 shadow-lg text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to Enquire About an Examination?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            Contact our Raigarh team to discuss your doctor’s prescription and enquire
            about available appointment slots.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-appointment"
              className="px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-white/10 hover:bg-white hover:text-[#0B285F] text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D91F32]" />
              <span>Call +91 {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
