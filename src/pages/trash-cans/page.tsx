import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import HeroSection from "./components/HeroSection";
import ProductOverview from "./components/ProductOverview";
import KeyFeatures from "./components/KeyFeatures";
import SummarySection from "./components/SummarySection";
import CTASection from "./components/CTASection";
import Footer from "../../../components/footer";


export default function TrashCans() {
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
        <KeyFeatures isVisible={isVisible.features} />
        <SummarySection isVisible={isVisible.summary} />
        <CTASection isVisible={isVisible.cta} />
      </main>
      <Footer />
    </div>
  );
}
