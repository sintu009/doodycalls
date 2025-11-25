interface WhyChooseSectionProps {
  isVisible: boolean;
}

export default function WhyChooseSection({ isVisible }: WhyChooseSectionProps) {
  const benefits = [
    "Durable, long-lasting installation",
    "Designed for both small and large communities",
    "Friendly, knowledgeable team",
    "Keeps your property clean and beautiful",
  ];

  return (
    <section id="why-choose" data-animate className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Choose DoodyCalls
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-[#F28C28] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-xl text-white"></i>
                </div>
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
