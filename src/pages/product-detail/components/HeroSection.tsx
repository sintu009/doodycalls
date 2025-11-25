import { useState, useRef } from "react";
import GetQuoteModal from "../../../../components/GetQuoteModal";

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const quoteButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleCloseQuoteModal = () => {
    setIsQuoteOpen(false);
    quoteButtonRef.current?.focus();
  };

  return (
    <section
      id="hero"
      data-animate
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dfnsp8dlj/image/upload/v1764084837/dreamstime_xxl_384788855_1_ghnyjx.jpg')`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div
          className={`text-center text-white transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Because Clean Communities
            <br />
            <span className="text-[#F28C28]">Reflect Who We Are</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            We help communities protect what matters — their shared spaces,
            their environment, and their reputation.
          </p>
          <button
            ref={quoteButtonRef}
            type="button"
            className="bg-[#F28C28] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
            aria-haspopup="dialog"
            aria-expanded={isQuoteOpen}
            onClick={() => setIsQuoteOpen(true)}
          >
            Start Your Community's Clean Future
          </button>
        </div>
        <GetQuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuoteModal} />
      </div>
    </section>
  );
}
