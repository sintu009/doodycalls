interface WasteWiseSectionProps {
  isVisible: boolean;
}

export default function WasteWiseSection({ isVisible }: WasteWiseSectionProps) {
  const steps = [
    {
      number: '1',
      title: 'Free Stations',
      description: 'Complimentary waste stations installed at no cost to your community'
    },
    {
      number: '2',
      title: 'Maintenance',
      description: 'Regular servicing and upkeep included in our partnership commitment'
    },
    {
      number: '3',
      title: 'Sustainable Results',
      description: 'Long-term cleanliness and environmental protection for your community'
    }
  ];

  return (
    <section id="wastewise" data-animate className="py-20 bg-[#2E5A51] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The WasteWise Commitment
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-[#F28C28] font-semibold">
            A Smarter Path to Cleaner Spaces
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We created the WasteWise Commitment to help communities upgrade dog waste stations without extra cost. Through this program, we provide complimentary waste stations to partners who commit to long-term maintenance.It's not a promotion — it's a partnership that helps neighborhoods modernize and reduce pollution.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              It's not a promotion — it's a partnership that helps neighborhoods modernize and reduce pollution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg leading-relaxed opacity-90">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Join the WasteWise Commitment
          </button>
        </div>
      </div>
    </section>
  );
}