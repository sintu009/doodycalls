interface ProcessSectionProps {
  isVisible: boolean;
}

export default function ProcessSection({ isVisible }: ProcessSectionProps) {
  const processSteps = [
    {
      icon: "ri-map-pin-line",
      title: "On-Site Evaluation",
      description:
        "On-site evaluation and mapping to identify ideal station locations",
    },
    {
      icon: "ri-hammer-line",
      title: "Concrete-Set Installation",
      description: "Concrete-set installations to prevent leaning or loosening",
    },
    {
      icon: "ri-community-line",
      title: "All Community Sizes",
      description:
        "Suitable for all community sizes — from small parks to large HOAs",
    },
    {
      icon: "ri-time-line",
      title: "Fast & Hassle-Free",
      description:
        "Fast, hassle-free service with a friendly, experienced crew",
    },
  ];

  return (
    <section id="process" data-animate className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            We make installation simple and stress-free with our proven
            four-step approach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className={`${step.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
