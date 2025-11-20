
interface KeyFeaturesProps {
  isVisible: boolean;
}

export default function KeyFeatures({ isVisible }: KeyFeaturesProps) {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Extra Thick Aluminum',
      description: 'Aluminum body 50% thicker than the industry standard, increasing strength and product longevity.'
    },
    {
      icon: 'ri-drop-line',
      title: 'Steel Lid Durability',
      description: '22-gallon model features a steel lid for extra durability due to its larger coverage area.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Low Maintenance',
      description: 'Low-maintenance and corrosion-resistant, ideal for all climates.'
    }
  ];

  return (
    <section 
      id="features" 
      data-animate 
      className="py-20 bg-[#F6F6F6]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Additional Key Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2E5A51] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20comparison%20image%20showing%20DoodyCalls%2010-gallon%20and%2022-gallon%20trash%20cans%20side%20by%20side%20with%20clear%20capacity%20labels%20and%20icons.%20The%20cans%20are%20positioned%20on%20clean%20pavement%20in%20a%20well-maintained%20community%20setting%2C%20showing%20the%20size%20difference%20and%20professional%20aluminum%20construction.%20Both%20cans%20feature%20the%20same%20design%20aesthetic%20with%20rust-proof%20finish%20and%20oversized%20lids%2C%20demonstrating%20the%20consistent%20quality%20across%20both%20models.&width=600&height=400&seq=capacity-comparison&orientation=landscape"
              alt="10-gallon and 22-gallon capacity comparison"
              className="w-full max-w-md mx-auto rounded-xl"
            />
            <p className="text-sm text-gray-500 mt-4 italic">10-gallon and 22-gallon models shown with labeled capacity icons</p>
          </div>
        </div>
      </div>
    </section>
  );
}
