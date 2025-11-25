import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutServiceSection from "./components/AboutServiceSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CommunityBenefitsSection from "./components/CommunityBenefitsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function DogWasteStationInstallationPage() {
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
      <AboutServiceSection isVisible={isVisible("about-service")} />
      <ProcessSection isVisible={isVisible("process")} />
      <WhyChooseSection isVisible={isVisible("why-choose")} />
      <CommunityBenefitsSection isVisible={isVisible("community-benefits")} />
      <FinalCTASection isVisible={isVisible("final-cta")} />
      <Footer />
    </div>
  );
}
