import { useState, useEffect, useRef } from "react";
import GetQuoteModal from "../../../components/GetQuoteModal";

export default function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#2E5A51]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#2E5A51]/5 to-[#F28C28]/5 rounded-full blur-3xl"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20modern%20HOA%20community%20park%20with%20dog%20waste%20stations%2C%20green%20grass%2C%20walking%20paths%2C%20families%20with%20dogs%2C%20bright%20sunny%20day%2C%20clean%20and%20welcoming%20environment%2C%20professional%20maintenance%2C%20community%20setting&width=1920&height=1080&seq=hero-bg-1&orientation=landscape"
          alt="Clean HOA community with maintained dog waste stations"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#2E5A51] mb-8 leading-tight">
            Dog Station Services
            <br />
            <span className="text-[#F28C28] drop-shadow-lg">
              Clean, Safe & Pet-Friendly
            </span>
            <br />
            Communities
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We maintain and manage your dog waste station so your property stays
            fresh, functional, and welcoming for all residents and their pets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#F28C28]/50 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Request a Free Site Evaluation
            </button>
            <a
              href="tel:+19196345383"
              aria-label="Call +919-634-5383"
              className="border-2 border-[#2E5A51] text-[#2E5A51] px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-[#2E5A51] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
            >
              Call 919-634-5383
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-[#F28C28] mb-2 group-hover:scale-110 transition-transform duration-300">
                  528+
                </div>
                <div className="text-[#2E5A51] font-semibold text-lg">
                  Stations Serviced
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#F28C28] mb-2 group-hover:scale-110 transition-transform duration-300">
                  140+
                </div>
                <div className="text-[#2E5A51] font-semibold text-lg">
                  Communities Served
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#F28C28] mb-2 group-hover:scale-110 transition-transform duration-300">
                  25
                </div>
                <div className="text-[#2E5A51] font-semibold text-lg">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </section>
  );
}
