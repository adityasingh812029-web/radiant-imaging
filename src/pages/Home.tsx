import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PromotionalSection } from '../components/PromotionalSection';
import { AppointmentForm } from '../components/AppointmentForm';
import { TrustStrip } from '../components/TrustStrip';
import { ServiceSearchWidget } from '../components/ServiceSearchWidget';
import { TrustCredibilitySection } from '../components/TrustCredibilitySection';
import { ServicesGrid } from '../components/ServicesGrid';
import { PopularServicesSection } from '../components/PopularServicesSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { PatientInformation } from '../components/PatientInformation';
import { LocationSection } from '../components/LocationSection';
import { ReviewSection } from '../components/ReviewSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { BottomDiscoverySection } from '../components/BottomDiscoverySection';

export const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Large Promotional Hero Section */}
      <HeroSection />

      {/* 2. Secondary Promotional Sections (3 Alternating Panels) */}
      <PromotionalSection />

      {/* 3. Callback and Appointment Enquiry Section */}
      <AppointmentForm />

      {/* 4. Trust and Key Information Strip */}
      <TrustStrip />

      {/* 5. Service Search & Quick Booking Widget */}
      <ServiceSearchWidget />

      {/* 6. Trust and Credibility Section */}
      <TrustCredibilitySection />

      {/* 7. Main Services Grid with Category Navigation */}
      <ServicesGrid />

      {/* 8. Popular / Key Services In-Depth Section */}
      <PopularServicesSection />

      {/* 9. Why Choose Radiant Imaging */}
      <WhyChooseSection />

      {/* 10. Plan Your Visit with Confidence (Patient Info) */}
      <PatientInformation />

      {/* 11. Location & Direction Discovery Section */}
      <LocationSection />

      {/* 12. Patient Care Commitments & Standards */}
      <ReviewSection />

      {/* 13. Accessible FAQ Accordion */}
      <FAQSection />

      {/* 14. Final Lower-Page Promotional CTA */}
      <FinalCTA />

      {/* 15. Bottom Service Discovery Shortcuts */}
      <BottomDiscoverySection />
    </main>
  );
};
