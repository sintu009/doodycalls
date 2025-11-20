interface ProductOverviewProps {
  isVisible: boolean;
}

export default function ProductOverview({ isVisible }: ProductOverviewProps) {
  const features = [
    "Weather-resistant aluminum build",
    "10-gallon bin with oversized lid",
    "Header or roll bag dispenser",
    "Durable two-piece square post",
    "\"Please Clean Up After Your Pet\" sign included"
  ];

  return (
    <section 
      id="overview" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/4be68188bd35ad31af1da334a214f260.jpeg"
              alt="The Commander Station"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
              Product Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Commander™ is one of DoodyCalls' most trusted pet waste stations — engineered for performance, visibility, and long-term outdoor durability. Ideal for parks, apartments, and high-traffic areas, it's built from heavy-duty aluminum with a rust-proof powder-coated finish to keep your community spaces clean and professional.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-[#F28C28] text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer">
              Order a Commander™ Station
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}