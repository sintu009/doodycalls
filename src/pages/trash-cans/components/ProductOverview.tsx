
interface ProductOverviewProps {
  isVisible: boolean;
}

export default function ProductOverview({ isVisible }: ProductOverviewProps) {
  const sections = [
    {
      id: 'performance',
      icon: '🪣',
      title: 'Engineered for Everyday Performance',
      bgColor: 'bg-white',
      points: [
        'Available in 10-gallon and 22-gallon models to suit different community sizes and needs.',
        'Crafted from rust-proof aluminum, ensuring long-term strength, corrosion resistance, and a clean look across all weather conditions.'
      ]
    },
    {
      id: 'smart-lid',
      icon: '☔',
      title: 'Smart Lid Design That Works Harder',
      bgColor: 'bg-[#F6F6F6]',
      points: [
        'The oversized lid prevents rainwater from collecting inside — keeping the interior dry, even in heavy rainfall.',
        'Fully replaceable lids extend product life: if a lid becomes damaged or deteriorates, it can be replaced without replacing the entire can.',
        'Unlike most competitors, which use permanently attached lids, DoodyCalls\' design saves cost and reduces waste.'
      ]
    },
    {
      id: 'community',
      icon: '🐾',
      title: 'Purpose-Built for Cleaner Communities',
      bgColor: 'bg-white',
      points: [
        'Ideal companions for DoodyCalls Dog Waste Stations, providing residents and park visitors with a convenient place to dispose of general waste.',
        'Keeps dog waste stations used only for dog waste bags, preventing overflow during weekends or high-traffic periods.',
        'Supports cleaner, safer, and more organized community spaces.'
      ]
    },
    {
      id: 'harmony',
      icon: '🧩',
      title: 'Designed for Visual Harmony',
      bgColor: 'bg-[#F6F6F6]',
      points: [
        'Built with the same material and finish as DoodyCalls Dog Waste Stations.',
        'Creates a consistent, professional look across parks, HOA pathways, and shared community areas.',
        'Ensures every installation feels cohesive, intentional, and proudly maintained.'
      ]
    }
  ];

  return (
    <section 
      id="overview" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Built for Strength, Designed for Communities
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            DoodyCalls trash cans combine industrial-grade durability with a refined, professional appearance — built to perform year after year in any environment.
          </p>
        </div>

        <div className="space-y-0">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`${section.bgColor} py-12`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mr-4 text-2xl">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#2E5A51]">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#F28C28] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    {index === 0 && (
                      <img 
                        src="https://readdy.ai/api/search-image?query=Professional%20DoodyCalls%2010-gallon%20and%2022-gallon%20aluminum%20trash%20cans%20displayed%20in%20a%20clean%20community%20park%20setting%20with%20manicured%20grass%20and%20walkways.%20The%20cans%20show%20rust-proof%20aluminum%20construction%20with%20oversized%20lids%2C%20positioned%20to%20demonstrate%20size%20comparison%20and%20industrial-grade%20durability.%20Background%20features%20well-maintained%20landscaping%20with%20trees%20and%20community%20amenities%2C%20emphasizing%20professional%20quality%20and%20community%20care.&width=600&height=500&seq=performance-models&orientation=landscape"
                        alt="DoodyCalls 10-gallon and 22-gallon trash can models"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20DoodyCalls%20trash%20can%20oversized%20aluminum%20lid%20design%20showing%20weatherproof%20construction%20and%20replaceable%20lid%20mechanism.%20The%20image%20demonstrates%20the%20lids%20ability%20to%20prevent%20rainwater%20collection%20with%20clean%2C%20professional%20engineering%20details%20visible.%20Background%20shows%20outdoor%20community%20setting%20with%20natural%20lighting%20highlighting%20the%20smart%20lid%20technology%20and%20durable%20aluminum%20finish.&width=600&height=500&seq=smart-lid-detail&orientation=landscape"
                        alt="Smart lid design preventing rainwater collection"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="https://readdy.ai/api/search-image?query=DoodyCalls%20trash%20can%20positioned%20next%20to%20a%20DoodyCalls%20dog%20waste%20station%20in%20a%20clean%20HOA%20community%20setting%2C%20showing%20how%20they%20work%20together%20to%20keep%20communities%20organized.%20The%20scene%20includes%20residents%20walking%20their%20dogs%20on%20clean%20sidewalks%20with%20well-maintained%20landscaping%2C%20demonstrating%20the%20purpose-built%20design%20for%20cleaner%2C%20safer%20community%20spaces%20and%20proper%20waste%20separation.&width=600&height=500&seq=community-purpose&orientation=landscape"
                        alt="Trash can supporting cleaner community spaces"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    )}
                    {index === 3 && (
                      <img 
                        src="https://readdy.ai/api/search-image?query=Wide%20view%20of%20multiple%20DoodyCalls%20trash%20cans%20and%20dog%20waste%20stations%20throughout%20a%20beautiful%20HOA%20community%2C%20showing%20consistent%20design%20harmony%20and%20visual%20cohesion.%20The%20installation%20demonstrates%20professional%20matching%20materials%20and%20finishes%20across%20parks%2C%20walkways%2C%20and%20shared%20areas%2C%20creating%20an%20intentional%20and%20proudly%20maintained%20community%20appearance%20with%20unified%20branding%20and%20quality.&width=600&height=500&seq=visual-harmony&orientation=landscape"
                        alt="Visual harmony across community installations"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
