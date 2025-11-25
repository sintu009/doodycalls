interface ServicesSectionProps {
  isVisible: boolean;
}

export default function ServicesSection({ isVisible }: ServicesSectionProps) {
  const services = [
    {
      icon: "ri-calendar-check-line",
      title: "Routine Maintenance",
      description:
        "We perform weekly service visits that include emptying waste cans, replenishing bags, and cleaning within a six-foot radius of each station. Our goal is to maintain a clean, odor-free environment while enhancing the look and hygiene of your property.",
    },
    {
      icon: "ri-box-3-line",
      title: "Inventory Management",
      description:
        "Our team carefully monitors bag usage and restocks dispensers on schedule to ensure continuous availability. We track usage trends to optimize supply levels, minimizing waste while ensuring your residents never face an empty station.",
    },
    {
      icon: "ri-search-eye-line",
      title: "Inspection & Reporting",
      description:
        "Every visit includes a thorough inspection of each dog waste station. We proactively identify damage or vandalism and provide a detailed service report with photos, estimated repair costs, and completion timelines — giving HOA boards and property managers full transparency and peace of mind.",
    },
  ];

  return (
    <section
      id="services"
      data-animate
      className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6]/30 to-white overflow-hidden"
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
            Station Service{" "}
            <span className="text-[#F28C28]">Key Components</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 h-full hover:shadow-2xl hover:shadow-[#2E5A51]/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-2xl font-bold text-[#2E5A51] mb-4 group-hover:text-[#F28C28] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
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
    </section>
  );
}
