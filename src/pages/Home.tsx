import React, { useEffect } from "react";
import { Hero3D } from "../components/Hero3D";
import { IntroductionSection } from "../components/IntroductionSection";
import { ServicesSection } from "../components/ServicesSection";
import { Signature3D } from "../components/Signature3D";
import { ProjectGallery } from "../components/ProjectGallery";
import { ProcessSection } from "../components/ProcessSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CTASection } from "../components/CTASection";
import { ContactForm } from "../components/ContactForm";

export function Home() {
  useEffect(() => {
    document.title = "Global Interio | Premium 3D Interior Design & Furniture in Vijayapura";
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Immersive 3D Hero */}
      <Hero3D />

      {/* 2. Editorial Introduction */}
      <IntroductionSection />

      {/* 3. Visual Grid of 8 Services */}
      <ServicesSection />

      {/* 4. Signature 3D Detail Customizer */}
      <Signature3D />

      {/* 5. Interactive Filterable Project Gallery & Lightbox */}
      <ProjectGallery />

      {/* 6. 6-Step Design Process Timeline */}
      <ProcessSection />

      {/* 7. Why Choose Us & Tactile Material Palette */}
      <WhyChooseUs />

      {/* 8. Full-Width Architectural CTA */}
      <CTASection />

      {/* 9. Contact Section & Direct WhatsApp Consultation Dispatch */}
      <ContactForm />
    </main>
  );
}
