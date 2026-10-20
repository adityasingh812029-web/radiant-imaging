import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DIAGNOSTIC_SERVICES } from '../config/services';

export const PopularServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const keyServices = DIAGNOSTIC_SERVICES.filter((s) => s.isPopular);

  return (
    <section className="py-16 sm:py-20 bg-[#F4F7FB] border-t border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Featured Clinical Examinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Explore Our Key Services
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            In-depth diagnostic imaging examinations frequently requested by referring
            physicians, surgeons, and specialists in Raigarh.
          </p>
        </div>

        {/* 2x2 In-Depth Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {keyServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E3E9F1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group text-left"
            >
              {/* Left: Large Image */}
              <div className="md:w-5/12 relative overflow-hidden bg-gray-100 min-h-[220px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0B285F] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {service.category}
                </div>
              </div>

              {/* Right: Detailed Content */}
              <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#0B285F]">
                      {service.title}
                    </h3>
                    <span className="text-xs text-[#D91F32] font-semibold">
                      {service.hindiTitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66748A] mt-2 leading-relaxed">
                    {service.detailedDesc}
                  </p>

                  {/* Bulleted Indications */}
                  <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Key Clinical Uses:
                    </div>
                    {service.keyIndications.slice(0, 3).map((ind, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#192A46]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#0B285F] hover:text-[#D91F32] inline-flex items-center gap-1"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/book-appointment?service=${encodeURIComponent(service.title)}`)
                    }
                    className="ml-auto px-4 py-2 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs font-semibold rounded-lg shadow-xs hover:shadow transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire Slot</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
