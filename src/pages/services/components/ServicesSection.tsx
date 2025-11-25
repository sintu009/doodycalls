import { useState, useEffect, useRef } from "react";

export default function ServicesSection() {
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

  const services = [
    {
      icon: "ri-refresh-line",
      title: "Routine Maintenance",
      description:
        "We perform weekly service visits that include emptying waste cans, replenishing bags, and cleaning within a six-foot radius of each station.",
      outcome:
        "Our goal is to maintain a clean, odor-free environment while enhancing the look and hygiene of your property.",
    },
    {
      icon: "ri-box-3-line",
      title: "Inventory Management",
      description:
        "Our team carefully monitors bag usage and restocks dispensers on schedule to ensure continuous availability. ",
      outcome:
        "We track usage trends to optimize supply levels, minimizing waste while ensuring your residents never face an empty station.",
    },
    {
      icon: "ri-search-eye-line",
      title: "Inspection & Reporting",
      description:
        "Every visit includes a thorough inspection of each dog waste station. ",
      outcome:
        "We proactively identify damage or vandalism and provide a detailed service report with photos, estimated repair costs, and completion timelines — giving HOA boards and property managers full transparency and peace of mind.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Our <span className="text-[#F28C28]">Comprehensive</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional maintenance solutions designed to keep your community
            clean and welcoming
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-2xl font-bold text-[#2E5A51] mb-4 text-center group-hover:text-[#F28C28] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                {service.description}
              </p>

              <div className="bg-gradient-to-r from-[#2E5A51]/10 to-[#F28C28]/10 rounded-xl p-4 border border-[#2E5A51]/20">
                <p className="text-[#2E5A51] font-semibold text-center">
                  {service.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        ></div>
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
    </section>
  );
}
