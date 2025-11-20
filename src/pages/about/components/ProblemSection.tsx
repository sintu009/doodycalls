interface ProblemSectionProps {
  isVisible: boolean;
}

export default function ProblemSection({ isVisible }: ProblemSectionProps) {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Pollution Prevention',
      description: 'Protecting waterways and soil from harmful bacteria'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Community Health',
      description: 'Creating safer spaces for families and pets'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Environmental Care',
      description: 'Reducing environmental impact through responsible waste management'
    }
  ];

  return (
    <section id="problem" data-animate className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 text-center">
            When Pet Waste Becomes a Bigger Problem
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              It starts small — one pile left behind on grass or near a drain. But across neighborhoods, it quickly becomes a real issue. Pet waste seeps into soil and waterways, increasing bacteria in rivers and raising city cleanup costs. Cleaner spaces bring pride, safety, and environmental protection. One simple act connects to something much bigger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-[#2E5A51] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}