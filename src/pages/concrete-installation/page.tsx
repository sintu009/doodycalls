import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WhyConcreteSection from './components/WhyConcreteSection';
import DifferenceSection from './components/DifferenceSection';
import ServicesSection from './components/ServicesSection';
import QuoteSection from './components/QuoteSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function ConcreteInstallationPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection isVisible={isVisible('hero')} />
      <IntroSection isVisible={isVisible('intro')} />
      <WhyConcreteSection isVisible={isVisible('why-concrete')} />
      <DifferenceSection isVisible={isVisible('difference')} />
      <ServicesSection isVisible={isVisible('services')} />
      <QuoteSection isVisible={isVisible('quote')} />
      <CTASection isVisible={isVisible('cta')} />
      <Footer />
    </div>
  );
}