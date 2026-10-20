import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight, Calendar, CheckCircle2, Info } from 'lucide-react';
import { DIAGNOSTIC_SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from '../config/services';

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = DIAGNOSTIC_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      searchTerm.trim() === '' ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.hindiTitle.includes(searchTerm) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="py-10 sm:py-16 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Hero Header */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-12 shadow-sm text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Radiant Imaging • Raigarh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B285F] tracking-tight">
              Diagnostic Services & Imaging Modalities
            </h1>

            <p className="text-base sm:text-lg text-[#66748A] leading-relaxed">
              Explore our comprehensive range of 8 advertised diagnostic modalities.
              From high-resolution CT Scans and 5D Sonography to digital X-Rays,
              Echocardiography, and pulmonary tests on Medical College Road, Raigarh.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-6 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#D91F32] text-white shadow-xs'
                        : 'bg-[#F4F7FB] text-[#192A46] hover:bg-gray-200 border border-[#E3E9F1]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search diagnostic tests..."
                className="w-full pl-9 pr-3 py-2 bg-[#F4F7FB] border border-[#E3E9F1] rounded-xl text-xs sm:text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E3E9F1] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#0B285F] text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h2 className="text-2xl font-bold text-[#0B285F] group-hover:text-[#D91F32] transition-colors">
                      {service.title}
                    </h2>
                    <span className="text-xs font-bold text-[#D91F32] bg-[#D91F32]/10 px-2.5 py-1 rounded-full">
                      {service.hindiTitle}
                    </span>
                  </div>

                  <p className="text-sm text-[#66748A] leading-relaxed">
                    {service.detailedDesc}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Key Indications:
                    </div>
                    <ul className="space-y-1.5">
                      {service.keyIndications.map((ind, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#192A46]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-gray-50 mt-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#0B285F] hover:text-[#D91F32] inline-flex items-center gap-1.5"
                >
                  <span>Detailed Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/book-appointment?service=${encodeURIComponent(service.title)}`)
                  }
                  className="px-5 py-2.5 bg-[#D91F32] hover:bg-[#b51727] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation notice */}
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl text-left flex items-start gap-3">
          <Info className="w-5 h-5 text-[#0B285F] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#192A46] leading-relaxed">
            <strong>Clinical Notice:</strong> Radiant Imaging performs scans based on referring clinician recommendations and diagnostic indications. Please confirm scan preparation requirements with our centre team prior to your visit.
          </div>
        </div>
      </div>
    </main>
  );
};
