
interface MasterChiefSectionProps {
  isVisible: boolean;
}

export default function MasterChiefSection({ isVisible }: MasterChiefSectionProps) {
  const includes = [
    "Header or roll bag dispenser",
    "10-gallon aluminum waste receptacle",
    "\"Please Clean Up After Your Pet\" sign",
    "8 ft. square steel post",
    "Installation provided by DoodyCalls"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          id="masterchief" 
          data-animate 
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="flex items-center mb-6">
              <i className="ri-shield-star-line text-4xl text-[#F28C28] mr-4"></i>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51]">
                The Master Chief™
              </h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-[#F28C28] mb-6">
              Compact, Reliable, and Affordable
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Master Chief delivers DoodyCalls' trusted performance and simplicity in a compact, affordable model. 
              It's ideal for areas with existing trash cans where dependable access to dog waste bags is needed.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#2E5A51] mb-4">Includes:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#F28C28] mr-3 text-lg"></i>
                  Header or roll bag dispenser
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#F28C28] mr-3 text-lg"></i>
                  "Please Clean Up After Your Pet" sign
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#F28C28] mr-3 text-lg"></i>
                  8 ft. square steel post
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#F28C28] mr-3 text-lg"></i>
                  Installation provided by DoodyCalls
                </li>
              </ul>
            </div>

            <div className="bg-[#F6F6F6] p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-[#2E5A51] mb-2">Best For:</h4>
              <p className="text-gray-600">
                Properties with existing trash cans or low-traffic dog areas.
              </p>
            </div>

            <button className="bg-[#F28C28] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Get Your Quote
            </button>
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/023096dee2dda0da09a6914254c01aff.png"
              alt="The Master Chief™ Pet Waste Station"
              className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
