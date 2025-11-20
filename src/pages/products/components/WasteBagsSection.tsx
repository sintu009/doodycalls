
interface WasteBagsSectionProps {
  isVisible: boolean;
}

export default function WasteBagsSection({ isVisible }: WasteBagsSectionProps) {
  const bagTypes = [
    {
      name: "Header Bags",
      description: "Dispenses one at a time with easy-tear perforation.",
      icon: "ri-file-list-3-line",
      color: "text-[#2E5A51]"
    },
    {
      name: "Roll Bags",
      description: "Compatible with multiple station brands; thick, opaque, and easy to open.",
      icon: "ri-refresh-line",
      color: "text-[#2E5A51]"
    },
    {
      name: "Compostable Bags",
      description: "100% compostable pick-up bags for communities that prioritize sustainability.",
      icon: "ri-leaf-line",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Safe, Strong & Sustainable Waste Bags
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leak-resistant and eco-friendly bags are designed to fit most pet waste stations.
          </p>
        </div>

        <div 
          id="bags" 
          data-animate 
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {bagTypes.map((bag, index) => (
            <div 
              key={bag.name}
              className={`bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 ${bag.color} mx-auto mb-6 flex items-center justify-center`}>
                <i className={`${bag.icon} text-4xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
                {bag.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {bag.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compostable Bags Highlight */}
        <div className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://readdy.ai/api/search-image?query=Eco-friendly%20compostable%20pet%20waste%20bags%20package%20in%20green%20packaging%2C%20ASTM%20certified%20logo%20visible%2C%20sustainable%20materials%20highlighted%2C%20clean%20product%20photography%20with%20natural%20green%20background%20emphasizing%20environmental%20responsibility%20and%20quality&width=300&height=200&seq=compostable-bags&orientation=landscape"
              alt="Compostable Bags"
              className="h-32 w-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center justify-center space-x-8 text-green-700 font-semibold">
            <span className="flex items-center">
              <i className="ri-shield-check-line mr-2"></i>
              Eco-Safe
            </span>
            <span className="flex items-center">
              <i className="ri-award-line mr-2"></i>
              ASTM Certified
            </span>
            <span className="flex items-center">
              <i className="ri-recycle-line mr-2"></i>
              Clean Disposal
            </span>
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