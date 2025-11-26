import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import SmartFeaturesSection from "./components/SmartFeaturesSection";
import MasterChiefSection from "./components/MasterChiefSection";
import CommanderSection from "./components/CommanderSection";
import AdmiralSection from "./components/AdmiralSection";
import SolarLightSection from "./components/SolarLightSection";
import EnvironmentalSection from "./components/EnvironmentalSection";
import ContactSection from "./components/ContactSection";
 
import Header from "../../components/Header";
import Footer from "../../components/footer";

export default function ProductsOverview() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
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
      <main>
        <HeroSection isVisible={isVisible.hero} />
        <SmartFeaturesSection isVisible={isVisible.features} />
        <MasterChiefSection isVisible={isVisible.masterchief} />
        <CommanderSection isVisible={isVisible.commander} />
        <AdmiralSection isVisible={isVisible.admiral} />
        <SolarLightSection isVisible={isVisible["solar-light"]} />
        <EnvironmentalSection isVisible={isVisible.environmental} />
        <ContactSection isVisible={isVisible.contact} />
      </main>
      <Footer />
    </div>
  );
}
