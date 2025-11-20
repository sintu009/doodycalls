import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ResponsibilitySection from "./components/ResponsibilitySection";
import WasteWiseSection from "./components/WasteWiseSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import RootsSection from "./components/RootsSection";
import ClosingSection from "./components/ClosingSection";
import Footer from "./components/Footer";

export default function About() {
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
      <main></main>
      <Footer />
    </div>
  );
}
