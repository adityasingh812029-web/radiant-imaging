import React from 'react';
import { Microscope, CalendarClock, PhoneOutgoing, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const TrustCredibilitySection: React.FC = () => {
  const blocks = [
    {
      icon: Microscope,
      title: 'Diagnostic Service Information',
      desc: 'Transparent guidance on CT scanning, 5D sonography, echocardiography, digital X-ray, and clinical preparations.',
    },
    {
      icon: CalendarClock,
      title: 'Appointment Assistance',
      desc: 'Supportive scheduling team available to assist patients with date selection, slot timing, and visit planning.',
    },
    {
      icon: PhoneOutgoing,
      title: 'Accessible Contact Details',
      desc: `Direct phone line (+91 ${BUSINESS_INFO.phoneDisplay}) and official WhatsApp communication for quick queries.`,
    },
    {
      icon: Building2,
      title: 'Local Centre Information',
      desc: 'Centrally situated on Medical College Road, Raigarh, ensuring convenient accessibility across the district.',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            Clinical Excellence & Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Care and Clarity for Your Diagnostic Journey
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            Explore Radiant Imaging's diagnostic services and contact our team to plan your visit.
            We focus on accurate imaging, clear clinical explanations, and patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F7FB] border border-[#E3E9F1] rounded-2xl p-6 transition-all hover:shadow-md hover:border-[#0B285F]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E3E9F1] flex items-center justify-center text-[#D91F32] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B285F] mb-2">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
