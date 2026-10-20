import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { DIAGNOSTIC_SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from '../config/services';

export const ServicesGrid: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

  const filteredServices =
    activeCategory === 'All'
      ? DIAGNOSTIC_SERVICES
      : DIAGNOSTIC_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Advertised Diagnostic Modalities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Our Diagnostic Services
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            Explore the diagnostic services advertised by Radiant Imaging and contact our
            team for appointment information and scan scheduling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#D91F32] text-white shadow-sm'
                    : 'bg-[#F4F7FB] text-[#192A46] hover:bg-gray-200/80 border border-[#E3E9F1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E3E9F1] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={`${service.title} at Radiant Imaging`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0B285F] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs border border-gray-100">
                    {service.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 text-left space-y-2">
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="text-lg font-bold text-[#0B285F] group-hover:text-[#D91F32] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium shrink-0">
                      {service.hindiTitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-gray-50 flex items-center justify-between gap-2 mt-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-semibold text-[#0B285F] hover:text-[#D91F32] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/book-appointment?service=${encodeURIComponent(service.title)}`)
                  }
                  className="px-3.5 py-1.5 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs font-semibold rounded-lg shadow-2xs hover:shadow transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F4F7FB] hover:bg-gray-100 text-[#0B285F] font-bold text-sm rounded-xl border border-[#E3E9F1] transition-all"
          >
            <span>View All Diagnostic Services & Details</span>
            <ArrowRight className="w-4 h-4 text-[#D91F32]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
