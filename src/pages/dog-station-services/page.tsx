import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";
import Footer from "../../../components/footer";

export default function DogStationServicesPage() {
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
      <ServicesSection isVisible={isVisible("services")} />
      <WhyChooseSection isVisible={isVisible("why-choose")} />
      <QuoteSection isVisible={isVisible("quote")} />
      <ContactSection isVisible={isVisible("contact")} />
      <Footer />
    </div>
  );
}
