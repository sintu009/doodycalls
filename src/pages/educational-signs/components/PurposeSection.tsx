interface PurposeSectionProps {
  isVisible: boolean;
}

export default function PurposeSection({ isVisible }: PurposeSectionProps) {
  const leftFeatures = [
    {
      icon: "ri-graduation-cap-line",
      title: "Educates residents about local laws",
      description: "Clear information about pet waste ordinances"
    },
    {
      icon: "ri-phone-line",
      title: "Reduces complaints and enforcement calls",
      description: "Proactive communication prevents issues"
    },
    {
      icon: "ri-team-line",
      title: "Encourages community responsibility",
      description: "Promotes shared ownership of cleanliness"
    },
    {
      icon: "ri-leaf-line",
      title: "Promotes environmental health",
      description: "Protects local waterways and ecosystems"
    }
  ];

  const rightFeatures = [
    {
      icon: "ri-building-line",
      title: "Strengthens HOA communication",
      description: "Professional messaging to residents"
    },
    {
      icon: "ri-star-line",
      title: "Enhances professionalism of property grounds",
      description: "Maintains high community standards"
    },
    {
      icon: "ri-file-text-line",
      title: "Reinforces compliance with county ordinances",
      description: "Ensures legal requirements are met"
    }
  ];

  return (
    <section 
      id="purpose" 
      data-animate 
      className="py-20 bg-[#F6F6F6]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Why Communities Choose Educational Signs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional signage that creates cleaner, more compliant communities
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Left Column */}
          <div className="space-y-8">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-14 h-14 bg-[#2E5A51] text-white rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                  <i className={`${feature.icon} text-xl`}></i>
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

          {/* Right Column */}
          <div className="space-y-8">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-14 h-14 bg-[#F28C28] text-white rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                  <i className={`${feature.icon} text-xl`}></i>
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