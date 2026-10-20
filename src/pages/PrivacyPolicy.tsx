import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="py-10 sm:py-16 bg-[#F4F7FB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Navigation Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B285F] hover:text-[#D91F32]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 shadow-sm space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B285F]/5 text-xs font-semibold text-[#0B285F]">
            <Shield className="w-3.5 h-3.5 text-[#D91F32]" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B285F] tracking-tight">
            Privacy Policy & Enquiry Handling
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: October 2026 • Radiant Imaging (रेडिएंट इमेजिंग), Raigarh, Chhattisgarh
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-[#E3E9F1] p-8 sm:p-10 shadow-sm space-y-8 text-sm text-[#192A46] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B285F] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#D91F32]" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="text-[#66748A]">
              When you submit an appointment enquiry or contact form through our website, we collect
              only the basic details required to assist you with your diagnostic booking. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#66748A]">
              <li>Patient Name</li>
              <li>Contact Mobile Number (Indian 10-digit number)</li>
              <li>Requested Diagnostic Modality (e.g., CT Scan, Sonography, X-Ray, ECG)</li>
              <li>Preferred appointment date and preferred time slot</li>
              <li>Any optional comments or clinical notes you provide voluntarily</li>
            </ul>
            <p className="text-[#66748A]">
              We do not ask for or store unnecessary medical history, financial credentials, or
              credit card information through this enquiry portal.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-[#0B285F]">
              2. How We Use Your Information
            </h2>
            <p className="text-[#66748A]">
              Information submitted via our appointment enquiry form is used solely for the following purposes:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[#66748A]">
                  Contacting you via telephone or WhatsApp to confirm your preferred appointment availability.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[#66748A]">
                  Informing you of any preparation requirements (such as fasting or bladder fullness) relevant to your scan.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[#66748A]">
                  Guiding you on arrival time, documentation (doctor prescriptions), and centre location.
                </span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-[#0B285F]">
              3. Confidentiality & Third-Party Disclosure
            </h2>
            <p className="text-[#66748A]">
              Radiant Imaging maintains strict patient confidentiality. We do not sell, rent, trade,
              or disclose your personal or contact information to any third-party marketing companies,
              advertisers, or data brokers. Your contact details are accessed solely by authorized
              clinical scheduling personnel at our Raigarh facility.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-[#0B285F]">
              4. Data Security & Storage
            </h2>
            <p className="text-[#66748A]">
              We employ industry-standard encryption (HTTPS / SSL) for all data transmitted
              through our website. Any electronic records of enquiries are safeguarded behind
              restrictive access controls and security protocols.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-[#0B285F]">
              5. Contact Us Regarding Your Data
            </h2>
            <p className="text-[#66748A]">
              If you have any questions about this Privacy Policy, wish to update your contact
              details, or have your enquiry records removed, please contact our centre administration:
            </p>
            <div className="p-4 rounded-xl bg-[#F4F7FB] border border-[#E3E9F1] space-y-1">
              <div className="font-bold text-[#0B285F]">Radiant Imaging (रेडिएंट इमेजिंग)</div>
              <div className="text-xs text-[#66748A]">{BUSINESS_INFO.fullAddress}</div>
              <div className="text-xs text-[#66748A]">Telephone: +91 {BUSINESS_INFO.phoneDisplay}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
