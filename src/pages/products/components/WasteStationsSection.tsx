
import { Link } from 'react-router-dom';

interface WasteStationsSectionProps {
  isVisible: boolean;
}

export default function WasteStationsSection({ isVisible }: WasteStationsSectionProps) {
  const stations = [
    {
      name: "The Master Chief™",
      description: "Compact, cost-effective station for tight, high-traffic areas near trash cans.",
      features: "Includes dispenser (header or roll), 8 ft. post, hardware, and install guide.",
      image: "https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/adeec0cef0bed50a0f50225790beea91.png",
      link: "#"
    },
    {
      name: "The Commander™",
      description: "Durable and versatile. Ideal for busy areas needing a visible, open waste bin.",
      features: "Includes dispenser, 10-gallon bin, sign, 8 ft. post, and hardware.",
      image: "https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/4be68188bd35ad31af1da334a214f260.jpeg",
      link: "/product/commander"
    },
    {
      name: "The Admiral™",
      description: "Heavy-duty and secure. Resists rust, odors, pests, and vandalism.",
      features: "Includes dispenser, locking 10-gallon bin, sign, and 8 ft. telescoping post.",
      image: "https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/dca0131888284614262aa7f9051b9ada.png",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Durable Stations Built for Every Space
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for reliability, built to last, and designed for convenience.
          </p>
        </div>

        <div 
          id="stations" 
          data-animate 
          className="grid md:grid-cols-3 gap-8"
        >
          {stations.map((station, index) => (
            <div 
              key={station.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src={station.image}
                  alt={station.name}
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-3">
                  {station.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {station.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {station.features}
                </p>
                {station.link === "#" ? (
                  <button className="w-full bg-[#F28C28] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer">
                    Get a Free Quote
                  </button>
                ) : (
                  <Link 
                    to={station.link}
                    className="block w-full bg-[#F28C28] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer text-center"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
