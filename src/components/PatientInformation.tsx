import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PhoneCall, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const PatientInformation: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Explore the Service You Require',
      desc: 'Browse our advertised scans and clinical services. Identify the test recommended on your doctor’s prescription.',
    },
    {
      icon: PhoneCall,
      number: '02',
      title: 'Submit an Enquiry or Call',
      desc: `Fill out our quick online appointment form or call our Raigarh team directly at +91 ${BUSINESS_INFO.phoneDisplay}.`,
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Confirm Slot & Preparation',
      desc: 'Our staff will confirm availability, explain any scan-specific guidelines (e.g. fasting or hydration), and guide your visit.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F4F7FB] border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <span>Patient Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Plan Your Visit with Confidence
          </h2>
          <p className="text-base text-[#66748A] leading-relaxed">
            A simple three-step journey to ensure smooth booking, transparent preparation, and
            timely diagnostic reporting at our Raigarh centre.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3E9F1] p-8 shadow-xs hover:shadow-lg transition-all text-left relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#0B285F]/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] flex items-center justify-center text-[#D91F32]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B285F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#0B285F]">
                  <span>Step {step.number} of 03</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Clinical Notice */}
        <div className="mt-10 p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl text-left flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Important Preparation Notice:</strong> Certain scans such as abdominal
            ultrasound or contrast CT studies require specific clinical fasting or a full bladder.
            Please consult with our centre staff at the time of scheduling or follow your referring
            doctor’s written guidance before your visit.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F32] hover:bg-[#b51727] text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
          >
            <span>Start Your Appointment Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
