
interface AddOnsSectionProps {
  isVisible: boolean;
}

export default function AddOnsSection({ isVisible }: AddOnsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Smart Add-ons for Every Station
          </h2>
        </div>

        <div 
          id="addons" 
          data-animate 
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Custom Signs */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-[#2E5A51] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-signpost-line text-3xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
                  Custom Signs
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Clearly visible signage to promote responsible pet ownership.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700 italic">
                    Example: "Please Pick Up After Your Pet" with fines or city code info.
                  </p>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20pet%20waste%20station%20sign%20with%20clear%20text%20Please%20Pick%20Up%20After%20Your%20Pet%2C%20teal%20green%20and%20orange%20color%20scheme%2C%20weather-resistant%20materials%2C%20mounted%20on%20post%20in%20community%20setting%2C%20clean%20typography%20and%20modern%20design&width=400&height=300&seq=custom-signs&orientation=landscape"
                  alt="Custom Signs"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
              </div>
            </div>
          </div>

          {/* Solar Lights */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-[#F28C28] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-sun-line text-3xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
                  Solar Lights
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Optional solar-powered light system for night visibility at waste stations.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <span className="flex items-center text-green-600 font-medium">
                    <i className="ri-flashlight-line mr-2"></i>
                    Energy-efficient
                  </span>
                  <span className="flex items-center text-blue-600 font-medium">
                    <i className="ri-shield-line mr-2"></i>
                    Weather-resistant
                  </span>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Solar-powered%20LED%20light%20system%20mounted%20on%20pet%20waste%20station%2C%20modern%20design%20with%20solar%20panel%20visible%2C%20illuminated%20at%20dusk%20in%20park%20setting%2C%20energy-efficient%20technology%20highlighting%20night%20visibility%20and%20safety%20features&width=400&height=300&seq=solar-lights&orientation=landscape"
                  alt="Solar Lights"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}