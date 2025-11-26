import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialSection from "./components/TestimonialSection";
import GallerySection from "./components/GallerySection";
import QuoteSection from "./components/QuoteSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import ContactSection from "./components/ContactSection"; 
import Header from "../../components/Header";
import Footer from "../../components/footer";

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection isVisible={isVisible("hero")} />
      <IntroSection isVisible={isVisible("intro")} />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialSection />
      <GallerySection />
      <QuoteSection />
      <ServiceAreaSection isVisible={isVisible("service-area")} />
      <ContactSection isVisible={isVisible("contact")} />
      <Footer />
    </div>
  );
}
