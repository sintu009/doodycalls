import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";
import Header from "../../components/Header";
import Footer from "../../components/footer";

export default function DogStationServicesPages() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
