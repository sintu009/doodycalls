interface ExperienceSectionProps {
  isVisible: boolean;
}

export default function ExperienceSection({ isVisible }: ExperienceSectionProps) {
  const badges = [
    {
      icon: 'ri-award-line',
      title: '25 Years of Service',
      description: 'Trusted expertise in community waste management'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Local Expertise',
      description: 'Deep understanding of North Carolina communities'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainable Impact',
      description: 'Environmental protection through responsible practices'
    }
  ];

  return (
    <section id="experience" data-animate className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
            25 Years of Cleaner Communities
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              For over 25 years, DoodyCalls has redefined what community care means — from national recognition to local action. Our Wake County team continues a legacy built on trust and sustainability. We're proud to help make North Carolina cleaner, greener, and prouder — one community at a time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${badge.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2E5A51] mb-4">{badge.title}</h3>
              <p className="text-gray-600 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}