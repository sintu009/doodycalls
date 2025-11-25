import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import HeroSection from "./components/HeroSection";
import ProductOverview from "./components/ProductOverview";
import CompleteKit from "./components/CompleteKit";
import SmartDesign from "./components/SmartDesign";
import TechnicalSpecs from "./components/TechnicalSpecs";
import EnvironmentalPromise from "./components/EnvironmentalPromise";
import CTASection from "./components/CTASection";
import Footer from "../../../components/Footer";

export default function ProductDetail() {
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
        <ProductOverview isVisible={isVisible.overview} />
        <CompleteKit isVisible={isVisible.kit} />
        <SmartDesign isVisible={isVisible.design} />
        <TechnicalSpecs isVisible={isVisible.specs} />
        <EnvironmentalPromise isVisible={isVisible.environmental} />
        <CTASection isVisible={isVisible.cta} />
      </main>
      <Footer />
    </div>
  );
}
