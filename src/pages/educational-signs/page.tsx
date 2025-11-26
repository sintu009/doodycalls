import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import InstallationSection from "./components/InstallationSection";
import EducationalSection from "./components/EducationalSection";
import EnvironmentalSection from "./components/EnvironmentalSection";
import ContactSection from "./components/ContactSection";
import Footer from "../../components/footer";
 

export default function EducationalSignsPage() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection isVisible={visibleSections.has("hero")} />
      <OverviewSection isVisible={visibleSections.has("overview")} />
      <PurposeSection isVisible={visibleSections.has("purpose")} />
      <FeaturesSection isVisible={visibleSections.has("features")} />
      <InstallationSection isVisible={visibleSections.has("installation")} />
      <EducationalSection isVisible={visibleSections.has("educational")} />
      <EnvironmentalSection isVisible={visibleSections.has("environmental")} />
      <ContactSection isVisible={visibleSections.has("contact")} />
      <Footer />
    </div>
  );
}
