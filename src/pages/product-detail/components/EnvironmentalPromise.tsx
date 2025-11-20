interface EnvironmentalPromiseProps {
  isVisible: boolean;
}

export default function EnvironmentalPromise({ isVisible }: EnvironmentalPromiseProps) {
  const features = [
    { icon: "🌿", title: "Eco-Safe", description: "Environmentally responsible design" },
    { icon: "🔩", title: "Recyclable", description: "Aluminum materials are fully recyclable" },
    { icon: "💧", title: "Weatherproof", description: "Built to withstand all conditions" },
    { icon: "🧱", title: "Long Lifespan", description: "Years of reliable service" }
  ];

  return (
    <section 
      id="environmental" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Built with Responsibility in Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DoodyCalls products are designed to help communities stay clean and green. The Commander™ reduces waste, encourages responsible pet ownership, and lasts for years — minimizing landfill replacements.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 text-center transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
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
    </section>
  );
}