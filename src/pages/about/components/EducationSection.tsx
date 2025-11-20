interface EducationSectionProps {
  isVisible: boolean;
}

export default function EducationSection({ isVisible }: EducationSectionProps) {
  const educationFeatures = [
    {
      icon: 'ri-newspaper-line',
      title: 'Newsletters',
      description: 'Regular updates on environmental impact and community best practices'
    },
    {
      icon: 'ri-presentation-line',
      title: 'Workshops',
      description: 'Educational sessions for community managers and residents'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Environmental Tips',
      description: 'Practical guidance on sustainable waste management practices'
    }
  ];

  return (
    <section id="education" data-animate className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
              Education Is the Real Cleanup Tool
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              We don't just pick up; we speak up. DoodyCalls of Wake County shares educational materials, newsletters, and workshops across Wake, Durham, and Johnston Counties.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Dog waste is more than a nuisance — it's an environmental pollutant. Awareness creates responsibility, and responsibility creates cleaner communities.
            </p>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {educationFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-[#F6F6F6] p-6 rounded-xl flex items-center space-x-6 transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E5A51] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}