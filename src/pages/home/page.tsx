import { useEffect, useState } from "react";
import ClosingSection from "../about/components/ClosingSection";
import EducationSection from "../about/components/EducationSection";
import ExperienceSection from "../about/components/ExperienceSection";
import ProblemSection from "../about/components/ProblemSection";
import ResponsibilitySection from "../about/components/ResponsibilitySection";
import RootsSection from "../about/components/RootsSection";
import WasteWiseSection from "../about/components/WasteWiseSection";
import HeroSection from "../product-detail/components/HeroSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
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
        <main>
          <HeroSection isVisible={isVisible.hero} />
          <ProblemSection isVisible={isVisible.problem} />
          <ResponsibilitySection isVisible={isVisible.responsibility} />
          <WasteWiseSection isVisible={isVisible.wastewise} />
          <EducationSection isVisible={isVisible.education} />
          <ExperienceSection isVisible={isVisible.experience} />
          <RootsSection isVisible={isVisible.roots} />
          <ClosingSection isVisible={isVisible.closing} />
        </main>
      </main>
      <Footer />
    </div>
  );
}
