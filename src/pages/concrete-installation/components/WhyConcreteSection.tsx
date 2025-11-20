interface WhyConcreteSectionProps {
  isVisible: boolean;
}

export default function WhyConcreteSection({ isVisible }: WhyConcreteSectionProps) {
  const reasons = [
    {
      icon: 'ri-water-percent-line',
      title: 'Moisture & Ground Softening',
      points: [
        'Rain and runoff soften the ground, causing tilt or sinking.',
        'Unstable soil lets heavy receptacles lean over time.',
        'Added waste weight increases stress on the base.'
      ]
    },
    {
      icon: 'ri-scales-3-line',
      title: 'Weight Stress',
      points: [
        'Heavy receptacles and dispensers can lean forward or crack.',
        'Without proper anchoring, base alignment weakens over time.'
      ]
    },
    {
      icon: 'ri-rust-line',
      title: 'Corrosion & Bottom Damage',
      points: [
        'Prolonged contact with wet soil or standing water causes rust.',
        'Bottom panels deteriorate faster, shortening unit lifespan.'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safety, Aesthetics & Liability',
      points: [
        'Leaning stations look neglected and unsafe.',
        'Risk of tipping, damage, or liability for HOAs and property managers.'
      ]
    }
  ];

  return (
    <section id="why-concrete" data-animate className="py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Why Concrete Installation <span className="text-[#F28C28]">Matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className={`${reason.icon} text-2xl text-white`}></i>
              </div>

              {/* Number badge */}
              <div className="text-center mb-4">
                <span className="bg-[#F28C28] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2E5A51] mb-6 text-center">
                {reason.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#F28C28] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}