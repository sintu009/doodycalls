import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import QuoteSection from "./components/QuoteSection";
import Header from "../../components/Header";
import Footer from "../../components/footer";

export default function DogStationServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <WhyChooseSection />
      <ProcessSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
