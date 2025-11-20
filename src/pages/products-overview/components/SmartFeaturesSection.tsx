
interface SmartFeaturesSectionProps {
  isVisible: boolean;
}

export default function SmartFeaturesSection({ isVisible }: SmartFeaturesSectionProps) {
  const leftFeatures = [
    {
      icon: "ri-shield-check-line",
      title: "Rust-Proof Construction",
      description: "Heavy-duty aluminum dispensers and receptacles for corrosion resistance."
    },
    {
      icon: "ri-brush-line",
      title: "Powder Coating",
      description: "Non-chrome seal rinse for superior finish and longevity."
    },
    {
      icon: "ri-sun-cloudy-line",
      title: "Weather-Smart Design",
      description: "Sloped roofs and drainage holes prevent pooling and water entry."
    }
  ];

  const rightFeatures = [
    {
      icon: "ri-tools-line",
      title: "Heavy-Duty Hardware",
      description: "1/8\" thick bag hangers and one-piece springs ensure smooth operation."
    },
    {
      icon: "ri-building-line",
      title: "Stable Structure",
      description: "Square, galvanized steel posts for strength and rust resistance."
    },
    {
      icon: "ri-award-line",
      title: "Proven Durability",
      description: "Backed by over 17 years of field-tested community performance."
    }
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Smart Features That Set DoodyCalls Apart
          </h2>
        </div>

        <div 
          id="features" 
          data-animate 
          className="grid md:grid-cols-2 gap-12"
        >
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {leftFeatures.map((feature, index) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2E5A51] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E5A51] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            {rightFeatures.map((feature, index) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E5A51] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
