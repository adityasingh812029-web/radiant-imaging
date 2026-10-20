import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Phone, MessageCircle, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { getServiceBySlug, DIAGNOSTIC_SERVICES } from '../config/services';
import { BUSINESS_INFO, getServiceWhatsAppLink } from '../config/business';
import { NotFound } from './NotFound';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  // Related services in same category or adjacent
  const relatedServices = DIAGNOSTIC_SERVICES.filter(
    (s) => s.id !== service.id && (s.category === service.category || s.isPopular)
  ).slice(0, 3);

  return (
    <main className="py-8 sm:py-14 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#0B285F]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/services" className="hover:text-[#0B285F]">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0B285F] font-semibold">{service.title}</span>
        </nav>

        {/* Service Header & Main Overview Card */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 text-left">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F]">
                <span>{service.category} Modality</span>
                <span>•</span>
                <span className="text-[#D91F32]">{service.hindiTitle}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B285F] tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#66748A] leading-relaxed">
                {service.detailedDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                  className="px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire for {service.title}</span>
                </Link>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-[#F4F7FB] hover:bg-gray-100 text-[#0B285F] font-semibold text-sm rounded-xl border border-[#E3E9F1] transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D91F32]" />
                  <span>Call Centre</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 aspect-[4/3]">
                <img
                  src={service.image}
                  alt={`${service.title} at Radiant Imaging Raigarh`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Clinical Information Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Clinical Purpose & Description */}
            <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B285F]">
                Clinical Purpose & Examination Role
              </h2>
              <p className="text-sm sm:text-base text-[#66748A] leading-relaxed">
                {service.clinicalPurpose}
              </p>
              <p className="text-sm text-[#66748A] leading-relaxed">
                At Radiant Imaging, examinations are carried out under standardized imaging protocols
                to ensure reproducible, high-contrast, and clinically actionable diagnostic outputs
                for treating doctors and surgeons.
              </p>
            </div>

            {/* Key Clinical Indications */}
            <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B285F]">
                Common Clinical Indications
              </h2>
              <p className="text-xs sm:text-sm text-[#66748A]">
                Your clinician may advise a {service.title} examination for evaluation of conditions including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyIndications.map((ind, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#192A46]">
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Guidelines */}
            <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <h2 className="text-xl font-bold text-[#0B285F]">
                  Preparation Guidelines Before Your Examination
                </h2>
              </div>
              <p className="text-sm text-[#66748A] leading-relaxed">
                {service.preparationNote}
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Please Note:</strong> If your physician has written scan instructions on your prescription, please follow those or call our Raigarh centre team at +91 {BUSINESS_INFO.phoneDisplay} to clarify any questions before arriving.
              </div>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Booking Box */}
            <div className="bg-[#0B285F] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <div className="text-xs font-bold text-[#D91F32] uppercase tracking-wider">
                Direct Scheduling
              </div>
              <h3 className="text-xl font-bold text-white">
                Plan Your {service.title} Visit
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                Submit an enquiry to request an appointment slot at our Medical College Road centre in Raigarh.
              </p>
              <div className="pt-2 space-y-2.5">
                <Link
                  to={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                  className="w-full py-3 px-4 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white hover:text-[#0B285F] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D91F32]" />
                  <span>Call +91 {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Centre Location Card */}
            <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Centre Location
              </div>
              <div className="text-sm font-bold text-[#0B285F]">
                Radiant Imaging (रेडिएंट इमेजिंग)
              </div>
              <p className="text-xs text-[#66748A]">
                {BUSINESS_INFO.fullAddress}
              </p>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#D91F32] hover:underline block pt-1"
              >
                Get Directions on Google Maps &rarr;
              </a>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-2xl bg-white border border-[#E3E9F1] flex items-center gap-3 text-xs text-[#66748A]">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Standardized imaging protocols and dedicated clinical radiographers.
              </span>
            </div>
          </div>
        </div>

        {/* Related Diagnostic Services */}
        {relatedServices.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 sm:p-8 text-left shadow-xs">
            <h2 className="text-xl font-bold text-[#0B285F] mb-6">
              Related Diagnostic Modalities at Radiant Imaging
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="p-4 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] hover:border-[#0B285F]/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-[#D91F32] mb-1">
                      {rel.category}
                    </div>
                    <h3 className="font-bold text-base text-[#0B285F] group-hover:text-[#D91F32] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#66748A] mt-1 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0B285F] group-hover:text-[#D91F32]">
                    <span>View Examination</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation back */}
        <div className="text-left">
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B285F] hover:text-[#D91F32]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Diagnostic Services</span>
          </button>
        </div>
      </div>
    </main>
  );
};
