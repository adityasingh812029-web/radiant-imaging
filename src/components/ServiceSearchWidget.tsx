import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Calendar, ArrowRight, Tag } from 'lucide-react';
import { DIAGNOSTIC_SERVICES, SERVICE_CATEGORIES, type ServiceCategory, type DiagnosticService } from '../config/services';

export const ServiceSearchWidget: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('All');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ct-scan');

  const filteredServices = DIAGNOSTIC_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      searchTerm.trim() === '' ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.hindiTitle.includes(searchTerm) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookNow = () => {
    const targetService = DIAGNOSTIC_SERVICES.find((s) => s.id === selectedServiceId) || filteredServices[0] || DIAGNOSTIC_SERVICES[0];
    navigate(`/book-appointment?service=${encodeURIComponent(targetService.title)}`);
  };

  const handleViewDetail = (service: DiagnosticService) => {
    navigate(`/services/${service.slug}`);
  };

  return (
    <section className="py-10 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-[#E3E9F1] p-6 sm:p-8">
          <div className="text-left mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] mb-2">
              <Search className="w-3.5 h-3.5 text-[#D91F32]" />
              <span>Service Finder & Quick Enquiry</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B285F]">
              Search Diagnostic Scans & Healthcare Services
            </h2>
            <p className="text-xs sm:text-sm text-[#66748A] mt-1">
              Select or search from our 8 advertised diagnostic modalities in Raigarh.
            </p>
          </div>

          {/* Quick Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scans (e.g. CT, Doppler, Echo, Sonography, PFT...)"
                className="w-full pl-10 pr-4 py-3 bg-[#F4F7FB] border border-[#E3E9F1] rounded-xl text-sm text-[#192A46] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B285F]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>

            {/* Category Selector */}
            <div className="md:col-span-4 relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory)}
                className="w-full pl-9 pr-4 py-3 bg-[#F4F7FB] border border-[#E3E9F1] rounded-xl text-sm text-[#192A46] focus:outline-none focus:ring-2 focus:ring-[#0B285F] appearance-none"
              >
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    Category: {cat}
                  </option>
                ))}
              </select>
              <Filter className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>

            {/* Book or Enquire Action */}
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={handleBookNow}
                className="w-full py-3 px-5 bg-[#D91F32] hover:bg-[#b51727] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire & Book</span>
              </button>
            </div>
          </div>

          {/* Filtered Services Quick Carousel / Chips */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span className="font-semibold text-[#0B285F]">
                Matching Diagnostic Offerings ({filteredServices.length}):
              </span>
              <span className="flex items-center gap-1 text-[#66748A]">
                <Tag className="w-3.5 h-3.5 text-[#D91F32]" />
                Enquire for pricing & preparation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                    selectedServiceId === service.id
                      ? 'border-[#0B285F] bg-[#0B285F]/5 ring-2 ring-[#0B285F]/20'
                      : 'border-[#E3E9F1] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#D91F32]">
                        {service.category}
                      </span>
                      <span className="text-[11px] text-gray-400">
                        {service.hindiTitle}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-[#0B285F] mt-1">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-[#66748A] mt-1 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetail(service);
                      }}
                      className="text-[#0B285F] hover:text-[#D91F32] font-semibold flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/book-appointment?service=${encodeURIComponent(service.title)}`);
                      }}
                      className="px-2.5 py-1 bg-[#D91F32] text-white text-[11px] font-semibold rounded hover:bg-[#b51727]"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
