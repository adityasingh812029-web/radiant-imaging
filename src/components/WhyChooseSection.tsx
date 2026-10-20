import React from 'react';
import { Microscope, HeartHandshake, CalendarCheck2, MapPin, CheckCircle2 } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: Microscope,
      title: 'Dedicated Diagnostic Imaging Focus',
      description:
        'Focused expertise across computed tomography, 5D sonography, colour Doppler flow studies, echocardiography, digital X-ray, ECG, and spirometry.',
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Focused Communication',
      description:
        'We value every patient’s comfort and dignity. Our team takes time to guide you through examination positioning and answer queries patiently.',
    },
    {
      icon: CalendarCheck2,
      title: 'Clear Appointment Enquiries',
      description:
        'Straightforward enquiry process with proactive callback confirmation. Enquire online or call us directly without complicated telephone trees.',
    },
    {
      icon: MapPin,
      title: 'Convenient Local Raigarh Centre',
      description:
        'Easily accessible on Medical College Road, Raigarh, serving local residents, referred patients, and surrounding communities in Chhattisgarh.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3E9F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Medical Consultation & Care Photograph */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/doctor-consultation.jpg"
                alt="Radiologist and Doctor Consultation at Radiant Imaging"
                className="w-full h-[380px] sm:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071E52]/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-left">
                  <div className="text-sm font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91F32]" />
                    <span>Compassionate Healthcare Approach</span>
                  </div>
                  <p className="text-xs text-gray-200 mt-1">
                    Advanced technology paired with warm clinical communication in Raigarh.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-40 h-40 bg-[#0B285F]/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right: Benefits Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
              <span>Why Choose Radiant Imaging</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
              A Centre Committed to Clinical Clarity & Patient Dignity
            </h2>

            <p className="text-base text-[#66748A] leading-relaxed">
              Diagnostic imaging is the cornerstone of correct medical diagnosis and treatment
              planning. At Radiant Imaging, we combine modern diagnostic hardware with
              patient-first care on Medical College Road, Raigarh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] hover:border-[#0B285F]/30 transition-all space-y-2"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E3E9F1] flex items-center justify-center text-[#D91F32] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B285F]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#66748A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
