import { Link } from 'react-router-dom';

interface FeaturesSectionProps {
  isVisible: boolean;
}

export default function FeaturesSection({ isVisible }: FeaturesSectionProps) {
  const features = [
    {
      icon: "ri-palette-line",
      title: "Customizable Design",
      items: [
        "Add your city ordinance number and fine",
        "Include local reporting phone number",
        "Match your community's branding"
      ]
    },
    {
      icon: "ri-hammer-line",
      title: "Durable Construction",
      items: [
        "12\" x 18\" commercial-grade aluminum",
        "Baked enamel finish for color longevity",
        "Two pre-drilled holes for mounting"
      ]
    },
    {
      icon: "ri-shield-line",
      title: "Weather-Resistant",
      items: [
        "Rustproof, fade-resistant",
        "Suitable for all climates",
        "Year-round outdoor exposure"
      ]
    }
  ];

  return (
    <section 
      id="features" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Built for Clarity, Durability, and Professionalism
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every sign is engineered to withstand the elements while delivering clear, professional messaging
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#F6F6F6] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-[#2E5A51] text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2E5A51] mb-4 text-center">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#F28C28] text-lg mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`bg-[#2E5A51] rounded-2xl p-8 text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            These signs integrate seamlessly with DoodyCalls Pet Waste Stations for a consistent, professional appearance.
          </p>
          <Link 
            to="/products"
            className="inline-block bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            View Pet Waste Stations
          </Link>
        </div>
      </div>
    </section>
  );
}