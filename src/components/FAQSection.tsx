import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Which diagnostic services does Radiant Imaging advertise?',
      answer:
        'Radiant Imaging advertises eight core diagnostic modalities on its official badge: CT Scan, 5D Sonography, Colour Doppler, Echocardiography (2D Echo), Digital X-Ray, ECG, Pulmonary Function Test (PFT), and OBG Consultation.',
    },
    {
      question: 'How can I enquire about an appointment?',
      answer:
        'You can submit an online appointment enquiry via our website callback form, message us on our official WhatsApp (+91 99265 58635), or call our Raigarh centre directly. Our staff will confirm available time slots with you.',
    },
    {
      question: 'Can I call Radiant Imaging directly?',
      answer:
        `Yes, you can call us directly on our official telephone number: +91 ${BUSINESS_INFO.phoneDisplay}. Our local centre team is ready to answer questions about investigations, doctor recommendations, and timing.`,
    },
    {
      question: 'How can I get directions to the centre?',
      answer:
        'Radiant Imaging is conveniently located on Medical College Road, Raigarh, Chhattisgarh, India. You can click the "Get Directions on Google Maps" button in our Location section or Contact page to open turn-by-turn navigation directly on your phone.',
    },
    {
      question: 'What should I do before my scan or examination?',
      answer:
        'Preparation instructions depend entirely on the specific examination ordered by your doctor. For instance, pelvic ultrasounds may require a full bladder, whereas certain abdominal or contrast CT studies might require fasting. We advise calling our centre team or following your referring clinician’s prescription instructions beforehand.',
    },
    {
      question: 'How can I enquire about the price of a service?',
      answer:
        'To ensure transparency and accurate information tailored to the specific views or body regions recommended by your doctor, please contact our centre team at +91 99265 58635 or send a quick WhatsApp message. Our staff will provide clear, verified pricing.',
    },
    {
      question: 'Is submitting an appointment form a confirmed booking?',
      answer:
        'Submitting an enquiry form via our website is a booking request, not an automated instantaneous booking. Once your request is received, our centre staff will promptly contact you to verify patient details, confirm the exact time slot, and advise on any necessary clinical preparation.',
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3E9F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#66748A]">
            Find clear, factual answers regarding our diagnostic examinations, appointment enquiries, and Raigarh centre visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#E3E9F1] rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B285F] hover:text-[#D91F32] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#D91F32] text-white rotate-180' : 'bg-[#F4F7FB] text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#66748A] leading-relaxed border-t border-gray-100 bg-[#F4F7FB]/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
