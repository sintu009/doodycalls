
import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EPASection from './components/EPASection';
import ProductsSection from './components/ProductsSection';
import ComparisonSection from './components/ComparisonSection';
import DisclaimerSection from './components/DisclaimerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function DogWasteBags() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection isVisible={isVisible.hero} />
        <EPASection isVisible={isVisible.epa} />
        <ProductsSection isVisible={isVisible.products} />
        <ComparisonSection isVisible={isVisible.comparison} />
        <DisclaimerSection isVisible={isVisible.disclaimer} />
        <ContactSection isVisible={isVisible.contact} />
      </main>
      <Footer />
    </div>
  );
}
