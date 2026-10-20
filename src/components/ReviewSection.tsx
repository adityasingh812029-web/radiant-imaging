import React from 'react';
import { Heart, Shield, Sparkles, UserCheck, MessageSquareHeart } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  const commitments = [
    {
      icon: MessageSquareHeart,
      title: 'Clear Clinical Explanations',
      desc: 'Our imaging technologists and staff take time to explain each step of your scan so you remain relaxed and confident throughout.',
    },
    {
      icon: Sparkles,
      title: 'Hygienic & Sanitized Suites',
      desc: 'All examination tables, ultrasound probes, and positioning supports are thoroughly cleaned and sanitized between every patient.',
    },
    {
      icon: Shield,
      title: 'Respectful Privacy & Dignity',
      desc: 'We maintain strict privacy protocols in changing rooms, ultrasound suites, and during all patient interactions.',
    },
    {
      icon: UserCheck,
      title: 'Attentive Technologists',
      desc: 'Our staff ensures gentle patient handling, especially for elderly patients, children, and those presenting with acute pain.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F4F7FB] border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Our Patient Care Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Compassionate Care for Every Patient & Family
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            At Radiant Imaging, accurate diagnosis goes hand-in-hand with human empathy.
            We follow strict ethical standards and continuous dedication to patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3E9F1] p-6 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] flex items-center justify-center text-[#D91F32] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B285F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                    {item.desc}
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
