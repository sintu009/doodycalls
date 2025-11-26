import { useState, useEffect, useRef } from "react";
import GetQuoteModal from "../../../components/GetQuoteModal";

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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

  const benefits = [
    {
      icon: "ri-calendar-check-line",
      title: "Reliable Weekly Maintenance",
      description: "Consistent service you can count on, every single week",
    },
    {
      icon: "ri-camera-line",
      title: "Transparent Photo Reporting",
      description:
        "Visual documentation of every service visit with detailed reports",
    },
    {
      icon: "ri-tools-line",
      title: "Fast Repairs & Special Requests",
      description:
        "Quick response to maintenance issues and custom service needs",
    },
    {
      icon: "ri-heart-line",
      title: "Local Team That Cares",
      description:
        "Community-focused professionals who understand your property",
    },
    {
      icon: "ri-award-line",
      title: "Trusted by Leading NC Communities",
      description: "Proven track record with top HOAs and property managers",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Why Choose <span className="text-[#F28C28]">DoodyCalls</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with Wake County's most trusted
            dog waste management professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 group transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className={`${benefit.icon} text-xl text-white`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-2 group-hover:text-[#F28C28] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#F28C28]/50 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Schedule My Free Site Evaluation
          </button>
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
            fill="#F6F6F6"
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
