interface ServicesSectionProps {
  isVisible: boolean;
}

export default function ServicesSection({ isVisible }: ServicesSectionProps) {
  const services = [
    {
      icon: 'ri-hammer-line',
      title: 'New Station Installation',
      description: 'All new DoodyCalls stations are securely installed with concrete to ensure stability and long-term reliability.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Relocation of Existing Stations',
      description: 'We move underutilized stations to better locations and reinstall them with concrete for optimal use.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Stabilization of Leaning Stations',
      description: 'Older or loosely installed units are reanchored in concrete to prevent tilting and damage.'
    },
    {
      icon: 'ri-delete-bin-line',
      title: 'Installation of Trash Receptacles',
      description: 'Our 10- and 22-gallon aluminum receptacles are concreted for maximum stability and rust resistance.'
    }
  ];

  return (
    <section id="services" data-animate className="py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Our Concrete Installation <span className="text-[#F28C28]">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number badge */}
              <div className="text-center mb-6">
                <span className="bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-4 py-2 rounded-full text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2E5A51] mb-4 text-center group-hover:text-[#F28C28] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}