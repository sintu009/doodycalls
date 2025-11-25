import { useState, useRef } from "react";
import GetQuoteModal from "../../../../components/GetQuoteModal";

interface ClosingSectionProps {
  isVisible: boolean;
}

export default function ClosingSection({ isVisible }: ClosingSectionProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const quoteButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleCloseQuoteModal = () => {
    setIsQuoteOpen(false);
    quoteButtonRef.current?.focus();
  };

  return (
    <section id="closing" data-animate className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
            Because Clean Isn't Just Seen —<br />
            <span className="text-[#F28C28]">It's Felt</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A well-kept community says, "We care about each other, our planet,
              and our future." DoodyCalls makes that message visible — in every
              clean walkway, every maintained station, and every proud resident.
            </p>
          </div>
          <button
            ref={quoteButtonRef}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isQuoteOpen}
            className="bg-[#F28C28] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer w-full sm:w-auto"
            onClick={() => setIsQuoteOpen(true)}
          >
            Start Your Community's Clean Future Today
          </button>
        </div>
      </div>

      <GetQuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuoteModal} />
    </section>
  );
}
