interface DifferenceSectionProps {
  isVisible: boolean;
}

export default function DifferenceSection({ isVisible }: DifferenceSectionProps) {
  const benefits = [
    'Prevents moisture and corrosion damage',
    'Improves safety, durability, and visual appeal',
    'Reduces maintenance frequency and long-term costs',
    'Extends the lifespan of stations and receptacles'
  ];

  return (
    <section id="difference" data-animate className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
              The DoodyCalls <span className="text-[#F28C28]">Difference:</span><br />
              Anchored in Concrete
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Each DoodyCalls dog waste station and trash receptacle is installed above ground and anchored in concrete.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                This approach prevents corrosion, leaning, and structural damage while keeping every unit level, secure, and professional in appearance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#2E5A51] mb-6">Benefits:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#F28C28] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-lg text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Detailed%20diagram%20showing%20dog%20waste%20station%20post%20anchored%20in%20concrete%20foundation%2C%20cross-section%20view%20with%20labeled%20parts%20including%20concrete%20base%2C%20anchor%20bolts%2C%20ground%20level%2C%20post%20installation%2C%20professional%20technical%20illustration%2C%20clean%20white%20background%2C%20engineering%20drawing%20style&width=600&height=600&seq=concrete-diagram&orientation=squarish"
                alt="Post anchored in concrete diagram"
                className="w-full rounded-3xl shadow-2xl"
              />
              
              {/* Overlay labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-semibold text-[#2E5A51]">Above Ground Installation</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-semibold text-[#2E5A51]">Concrete Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}