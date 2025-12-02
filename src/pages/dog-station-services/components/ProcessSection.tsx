export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Assessment",
      description:
        "Call us or request a quote, and we'll schedule a site visit",
      icon: "ri-phone-line",
    },
    {
      number: "2",
      title: "Repair Plan",
      description: "We assess the damage and provide a clear, upfront estimate",
      icon: "ri-file-list-3-line",
    },
    {
      number: "3",
      title: "Repair & Reinstall",
      description: "Our team completes the work efficiently and professionally",
      icon: "ri-tools-line",
    },
    {
      number: "4",
      title: "Final Check",
      description: "Quality check to ensure everything works perfectly",
      icon: "ri-checkbox-circle-line",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F28C28]">Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            A systematic approach to make every job easy and stress‑free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-[#F28C28]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
