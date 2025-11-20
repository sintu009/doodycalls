interface InstallationSectionProps {
  isVisible: boolean;
}

export default function InstallationSection({ isVisible }: InstallationSectionProps) {
  const steps = [
    {
      icon: "ri-phone-line",
      title: "NC 811 Utility Marking",
      description: "Professional utility marking before installation to ensure safety"
    },
    {
      icon: "ri-hammer-line",
      title: "Concrete Base Anchoring",
      description: "Secure installation with concrete base for maximum stability"
    },
    {
      icon: "ri-calendar-check-line",
      title: "Quick Completion",
      description: "Installation completed within 5 business days of marking"
    }
  ];

  return (
    <section 
      id="installation" 
      data-animate 
      className="py-20 bg-[#F6F6F6]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Professional Installation. Zero Hassle.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DoodyCalls' trained technicians ensure every sign is installed safely and securely.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-[#F28C28] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${step.icon} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="#contact"
            className="inline-block bg-[#F28C28] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Schedule an Installation
          </a>
        </div>

        <div className={`mt-16 grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20technician%20installing%20educational%20dog%20waste%20sign%20with%20concrete%20base%20anchoring%2C%20safety%20equipment%20visible%2C%20NC%20811%20utility%20marking%20flags%20in%20background%2C%20professional%20installation%20process%20in%20community%20setting%2C%20safety-focused%20work%20environment&width=600&height=400&seq=installation&orientation=landscape"
              alt="Professional Installation Process"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-6">
              Why Choose Professional Installation?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-shield-check-fill text-[#F28C28] text-xl mr-3 mt-1"></i>
                <span className="text-gray-700">Ensures compliance with local safety regulations</span>
              </div>
              <div className="flex items-start">
                <i className="ri-tools-fill text-[#F28C28] text-xl mr-3 mt-1"></i>
                <span className="text-gray-700">Professional-grade tools and materials</span>
              </div>
              <div className="flex items-start">
                <i className="ri-time-fill text-[#F28C28] text-xl mr-3 mt-1"></i>
                <span className="text-gray-700">Quick, efficient installation process</span>
              </div>
              <div className="flex items-start">
                <i className="ri-customer-service-2-fill text-[#F28C28] text-xl mr-3 mt-1"></i>
                <span className="text-gray-700">Ongoing support and maintenance available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}