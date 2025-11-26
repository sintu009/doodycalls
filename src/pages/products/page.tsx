import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import WasteStationsSection from "./components/WasteStationsSection";
import WasteBagsSection from "./components/WasteBagsSection";
import AddOnsSection from "./components/AddOnsSection";
import EnvironmentalSection from "./components/EnvironmentalSection";
import CTASection from "./components/CTASection";
import Footer from "../../components/footer";

export default function Products() {
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
        <WasteStationsSection isVisible={isVisible.stations} />
        <WasteBagsSection isVisible={isVisible.bags} />
        <AddOnsSection isVisible={isVisible.addons} />
        <EnvironmentalSection isVisible={isVisible.environmental} />
        <CTASection isVisible={isVisible.cta} />
      </main>
      <Footer />
    </div>
  );
}
