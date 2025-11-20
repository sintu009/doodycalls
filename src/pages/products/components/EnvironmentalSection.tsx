
interface EnvironmentalSectionProps {
  isVisible: boolean;
}

export default function EnvironmentalSection({ isVisible }: EnvironmentalSectionProps) {
  const features = [
    {
      icon: "ri-shield-check-line",
      title: "Rust-Free",
      description: "Durable aluminum construction resists corrosion"
    },
    {
      icon: "ri-recycle-line",
      title: "Recyclable Materials",
      description: "Environmentally responsible material choices"
    },
    {
      icon: "ri-time-line",
      title: "Long Lifespan",
      description: "Built to last for years of reliable service"
    },
    {
      icon: "ri-leaf-line",
      title: "Eco Smart Design",
      description: "Sustainable solutions for cleaner communities"
    }
  ];

  return (
    <section className="py-20 bg-[#2E5A51] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with Responsibility in Mind
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            DoodyCalls products are designed to make communities cleaner and greener. From durable aluminum construction to eco-friendly bag options, every item reflects our commitment to sustainability.
          </p>
        </div>

        <div 
          id="environmental" 
          data-animate 
          className="grid md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-[#F28C28] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Environmental Image */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <img 
            src="https://readdy.ai/api/search-image?query=Beautiful%20green%20community%20park%20with%20sustainable%20pet%20waste%20management%20stations%2C%20families%20enjoying%20clean%20environment%2C%20recycling%20symbols%20visible%2C%20eco-friendly%20design%20elements%2C%20bright%20natural%20lighting%20emphasizing%20environmental%20responsibility%20and%20community%20care&width=800&height=400&seq=environmental&orientation=landscape"
            alt="Environmental Responsibility"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}