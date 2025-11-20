
interface EnvironmentalSectionProps {
  isVisible: boolean;
}

export default function EnvironmentalSection({ isVisible }: EnvironmentalSectionProps) {
  const features = [
    {
      icon: "ri-shield-check-line",
      title: "Rust-Free",
      description: "Corrosion-resistant materials"
    },
    {
      icon: "ri-recycle-line",
      title: "Recyclable Materials",
      description: "Sustainable construction"
    },
    {
      icon: "ri-time-line",
      title: "Long Lifespan",
      description: "Built to last decades"
    },
    {
      icon: "ri-leaf-line",
      title: "Eco Smart Design",
      description: "Environmentally conscious"
    }
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          id="environmental" 
          data-animate 
          className="text-center"
        >
          <div className={`mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
              Built to Last. Designed for Sustainability.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              DoodyCalls stations are designed to minimize environmental impact by reducing repairs and replacement needs. 
              When paired with DoodyCalls Dog Waste Station Services and Pet Waste Bags (available in virgin plastic or 
              100% compostable polymer), communities can maintain cleaner, greener spaces.
            </p>
          </div>

          <div className={`grid md:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#2E5A51] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
