import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FloatingQuoteCard } from '../components/home/FloatingQuoteCard';
import { TrustStrip } from '../components/home/TrustStrip';
import { EditorialIntro } from '../components/home/EditorialIntro';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { FeaturedBanner } from '../components/home/FeaturedBanner';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { MoveJourneyVisualizer } from '../components/home/MoveJourneyVisualizer';
import { WhyNorthvault } from '../components/home/WhyNorthvault';
import { StatisticsSection } from '../components/home/StatisticsSection';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CaseStudySection } from '../components/home/CaseStudySection';
import { InteractiveCoverageMap } from '../components/home/InteractiveCoverageMap';
import { FAQSection } from '../components/home/FAQSection';
import { ContactCTA } from '../components/home/ContactCTA';

interface HomePageProps {
  onOpenQuoteModal: (defaults?: { from?: string; to?: string; type?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    document.title = "Northvault Relocation | Move Without Compromise — Luxury Moving & Logistics";
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Cinematic Hero */}
      <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Floating Quote Calculator (Partially overlapping hero) */}
      <FloatingQuoteCard
        onDetailedQuoteRequested={(data) => {
          onOpenQuoteModal({
            from: data.from,
            to: data.to,
            type: data.type,
          });
        }}
      />

      {/* 3. Trust Strip Metrics */}
      <TrustStrip />

      {/* 4. Editorial Split Introduction */}
      <EditorialIntro />

      {/* 5. Services Grid */}
      <ServicesGrid />

      {/* 6. Featured Banner: "We Move More Than Boxes" */}
      <FeaturedBanner />

      {/* 7. Process Timeline (Horizontal on desktop / Vertical on mobile) */}
      <ProcessTimeline />

      {/* 8. Interactive Move Journey Visualizer */}
      <MoveJourneyVisualizer />

      {/* 9. Why Northvault (Dark Grid Pillars) */}
      <WhyNorthvault />

      {/* 10. Large Editorial Statistics */}
      <StatisticsSection />

      {/* 11. Editorial Testimonials Slider */}
      <TestimonialSlider />

      {/* 12. Architectural Case Study Card */}
      <CaseStudySection />

      {/* 13. Interactive Coverage & Geographic Map */}
      <InteractiveCoverageMap />

      {/* 14. Accordion FAQ Section */}
      <FAQSection />

      {/* 15. Final Dramatic Contact & Quote CTA */}
      <ContactCTA onOpenQuoteModal={() => onOpenQuoteModal()} />
    </main>
  );
};
