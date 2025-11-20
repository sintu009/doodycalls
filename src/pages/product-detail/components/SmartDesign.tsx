interface SmartDesignProps {
  isVisible: boolean;
}

export default function SmartDesign({ isVisible }: SmartDesignProps) {
  const features = [
    {
      title: "Rust-Proof Aluminum",
      description: "All parts are corrosion-resistant, ensuring long-lasting durability in any weather condition.",
      image: "https://readdy.ai/api/search-image?query=Close-up%20detail%20shot%20of%20rust-proof%20aluminum%20material%20with%20powder-coated%20finish%20showing%20the%20durable%20metallic%20surface%20texture.%20The%20image%20emphasizes%20quality%20construction%20and%20weather%20resistance%20with%20professional%20lighting%20highlighting%20the%20smooth%2C%20protective%20coating%20on%20the%20aluminum%20surface%20in%20a%20clean%2C%20technical%20photography%20style.&width=600&height=400&seq=aluminum-material&orientation=landscape"
    },
    {
      title: "Powder-Coated Finish",
      description: "Non-chrome seal rinse improves adhesion and longevity, maintaining a professional appearance for years.",
      image: "https://readdy.ai/api/search-image?query=Professional%20close-up%20of%20powder-coated%20metal%20surface%20showing%20smooth%2C%20durable%20finish%20with%20excellent%20color%20retention.%20The%20image%20displays%20the%20high-quality%20coating%20texture%20with%20even%20coverage%20and%20professional%20finish%2C%20emphasizing%20durability%20and%20weather%20protection%20in%20bright%2C%20clean%20lighting%20conditions.&width=600&height=400&seq=powder-coat-finish&orientation=landscape"
    },
    {
      title: "Angled Roof Design",
      description: "Sloped roof and drip edge prevent water entry, keeping the dispenser dry and functional.",
      image: "https://readdy.ai/api/search-image?query=Detailed%20view%20of%20angled%20roof%20design%20on%20pet%20waste%20station%20showing%20sloped%20top%20with%20drip%20edge%20that%20prevents%20water%20entry.%20The%20image%20highlights%20the%20smart%20engineering%20with%20rain%20drops%20or%20water%20beading%20off%20the%20surface%2C%20demonstrating%20weather%20protection%20in%20outdoor%20conditions%20with%20natural%20lighting.&width=600&height=400&seq=angled-roof&orientation=landscape"
    },
    {
      title: "No More Poop Soup",
      description: "Oversized lid and drain holes prevent standing water, maintaining cleanliness and hygiene.",
      image: "https://readdy.ai/api/search-image?query=Close-up%20of%20waste%20bin%20with%20oversized%20lid%20and%20drainage%20holes%20at%20the%20bottom%20showing%20water%20management%20system.%20The%20image%20demonstrates%20the%20clean%2C%20dry%20interior%20with%20visible%20drain%20holes%20preventing%20water%20accumulation%2C%20shot%20in%20bright%20daylight%20with%20clear%20focus%20on%20the%20drainage%20features.&width=600&height=400&seq=drainage-system&orientation=landscape"
    },
    {
      title: "Heavy-Duty Build",
      description: "Rugged hangers and spring mechanism ensure smooth bag dispensing every time.",
      image: "https://readdy.ai/api/search-image?query=Detailed%20shot%20of%20heavy-duty%20bag%20dispenser%20mechanism%20showing%20rugged%20metal%20hangers%20and%20spring%20system%20for%20smooth%20bag%20dispensing.%20The%20image%20captures%20the%20internal%20mechanism%20with%20professional%20lighting%2C%20emphasizing%20the%20robust%20construction%20and%20reliable%20engineering%20of%20the%20dispenser%20components.&width=600&height=400&seq=dispenser-mechanism&orientation=landscape"
    },
    {
      title: "Stable Square Post",
      description: "Telescoping post resists rust and adds a polished, professional look to any community space.",
      image: "https://readdy.ai/api/search-image?query=Full%20view%20of%20square%20aluminum%20telescoping%20post%20installed%20in%20ground%20showing%20stable%2C%20professional%20appearance.%20The%20image%20displays%20the%20sleek%20square%20post%20design%20with%20rust-resistant%20finish%2C%20emphasizing%20strength%20and%20modern%20aesthetics%20in%20an%20outdoor%20community%20setting%20with%20natural%20background.&width=600&height=400&seq=square-post&orientation=landscape"
    },
    {
      title: "Safety First",
      description: "Plastic bolt caps protect people and pets from sharp edges, ensuring safe interaction.",
      image: "https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20plastic%20safety%20bolt%20caps%20on%20pet%20waste%20station%20hardware%20showing%20protective%20covers%20on%20metal%20fasteners.%20The%20image%20emphasizes%20safety%20features%20with%20clear%20view%20of%20rounded%20plastic%20caps%20covering%20sharp%20bolt%20ends%2C%20shot%20in%20bright%20lighting%20to%20highlight%20the%20safety-conscious%20design.&width=600&height=400&seq=safety-caps&orientation=landscape"
    }
  ];

  return (
    <section 
      id="design" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Smart Design &amp; Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail of the Commander™ is engineered for durability, functionality, and ease of use.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div 
                className={`transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
                } ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              <div 
                className={`transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : index % 2 === 0 ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0'
                } ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <h3 className="text-3xl font-bold text-[#2E5A51] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer">
            Request a Commander™ Demo
          </button>
        </div>
      </div>
    </section>
  );
}