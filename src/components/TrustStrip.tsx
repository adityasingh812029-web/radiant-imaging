import React from 'react';
import { Sparkles, HeartHandshake, PhoneCall, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: 'Diagnostic Imaging Services',
      subtitle: 'CT, Sonography, X-Ray & Cardiac Modalities',
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Focused Care',
      subtitle: 'Respectful, comfortable and hygienic environment',
    },
    {
      icon: PhoneCall,
      title: 'Convenient Enquiries',
      subtitle: `Direct calling (+91 ${BUSINESS_INFO.phoneDisplay}) & WhatsApp`,
    },
    {
      icon: MapPin,
      title: 'Located in Raigarh',
      subtitle: 'Accessible facility on Medical College Road (C.G.)',
    },
  ];

  return (
    <section className="bg-white border-y border-[#E3E9F1] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F4F7FB] transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-[#0B285F]/5 text-[#D91F32] shrink-0 border border-[#E3E9F1]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-sm text-[#0B285F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66748A] mt-0.5 leading-snug">
                    {item.subtitle}
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
