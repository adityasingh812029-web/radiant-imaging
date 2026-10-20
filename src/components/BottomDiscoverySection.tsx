import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_SERVICES } from '../config/services';

export const BottomDiscoverySection: React.FC = () => {
  const shortcutSlugs = ['ct-scan', '5d-sonography', 'digital-x-ray', 'ecg'];
  const shortcuts = DIAGNOSTIC_SERVICES.filter((s) => shortcutSlugs.includes(s.slug));

  return (
    <section className="py-12 bg-[#F4F7FB] border-t border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-left">
          <div>
            <div className="text-xs font-bold text-[#D91F32] uppercase tracking-wider">
              Quick Examination Shortcuts
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B285F]">
              Explore Key Diagnostic Procedures
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs sm:text-sm font-bold text-[#0B285F] hover:text-[#D91F32] flex items-center gap-1 shrink-0"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {shortcuts.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="bg-white rounded-xl border border-[#E3E9F1] overflow-hidden p-4 shadow-2xs hover:shadow-md hover:border-[#0B285F]/30 transition-all flex flex-col justify-between group text-left"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B285F] group-hover:text-[#D91F32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {service.hindiTitle}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#D91F32]">
                <span>Details & Prep</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
