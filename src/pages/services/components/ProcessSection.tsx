import { useState, useEffect, useRef } from "react";
import GetQuoteModal from "../../../components/GetQuoteModal";

export default function ProcessSection() {
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

  const steps = [
    {
      number: "01",
      icon: "ri-map-pin-line",
      title: "Walkthrough & Count",
      description:
        "We map your stations and assess high-traffic areas to understand your specific needs",
    },
    {
      number: "02",
      icon: "ri-calendar-line",
      title: "Service Plan",
      description:
        "Create a customized schedule and determine optimal stocking levels for your property",
    },
    {
      number: "03",
      icon: "ri-settings-line",
      title: "Onboarding",
      description:
        "Complete first clean, set up inventory systems, and establish reporting protocols",
    },
    {
      number: "04",
      icon: "ri-refresh-line",
      title: "Ongoing Care",
      description:
        "Weekly service visits with monthly summary reports to keep you informed",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2E5A51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Our <span className="text-[#F28C28]">Simple</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial assessment to ongoing maintenance, we make it easy to
            keep your community clean
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#F28C28] to-[#2E5A51] transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#F28C28] rounded-full z-10"></div>

                {/* Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group mt-16">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>

                  <h3 className="text-xl font-bold text-[#2E5A51] mb-4 text-center group-hover:text-[#F28C28] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-6">
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <i className={`${step.icon} text-lg text-white`}></i>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-[#F28C28] to-[#2E5A51] mt-4 rounded-full"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                  <div className="flex items-center mb-3">
                    <span className="bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#2E5A51]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className=" bg-[#2E5A51] rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's schedule your free site evaluation and create a custom
              service plan
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-white text-[#2E5A51] px-10 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Request Free Evaluation
            </button>
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
