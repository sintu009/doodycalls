import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MapSection from "./components/MapSection";
import ProductSection from "./components/ProductSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CTASection from "./components/CTASection";
import QuoteSection from "./components/QuoteSection";
import InstallationSection from "./components/InstallationSection";
import Header from "../../components/Header";
import Footer from "../../components/footer";

export default function InstallationServicesPage() {
  // Simple SEO handling without external libraries
  useEffect(() => {
    document.title =
      "Raleigh Dog Waste Station Installation Services | Professional Setup | DoodyCalls";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional dog waste station installation services in Raleigh, NC. Expert placement, quality products, and complete support for HOAs, apartments, parks, and municipalities. Get your free quote today."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Professional dog waste station installation services in Raleigh, NC. Expert placement, quality products, and complete support for HOAs, apartments, parks, and municipalities. Get your free quote today.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <IntroSection />
          <MapSection />
          <ProductSection />
          <WhyChooseSection />
          <CTASection />
          {/* <QuoteSection /> */}
          <InstallationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
