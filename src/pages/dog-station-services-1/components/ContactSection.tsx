export default function ContactSection() {
  const processSteps = [
    {
      number: '1',
      title: 'Assessment',
      description: 'On-site evaluation and mapping to identify ideal station locations',
      icon: 'ri-map-pin-user-line',
    },
    {
      number: '2',
      title: 'Placement',
      description: 'Strategic planning for maximum convenience and accessibility',
      icon: 'ri-compass-3-line',
    },
    {
      number: '3',
      title: 'Installation',
      description: 'Concrete-set installations to prevent leaning or loosening',
      icon: 'ri-hammer-line',
    },
    {
      number: '4',
      title: 'Maintenance Tips',
      description: 'Guidance for long-term care and ongoing support',
      icon: 'ri-service-line',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600">
            Simple, professional, and hassle-free installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-[#6DBE45]/10 to-[#2E5A51]/10 p-8 rounded-2xl h-full hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#6DBE45] rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <i className={`${step.icon} text-2xl text-[#6DBE45]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-3xl text-[#6DBE45]"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-6">
              What Makes Us Different
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl text-[#6DBE45] mr-4 mt-1"></i>
                <p className="text-lg text-gray-700">
                  <strong>Durable and community-ready</strong> — Over eight years of reliable service
                </p>
              </div>
              <div className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl text-[#6DBE45] mr-4 mt-1"></i>
                <p className="text-lg text-gray-700">
                  <strong>Fast, hassle-free service with a friendly, experienced crew</strong>
                </p>
              </div>
              <div className="flex items-start">
                <i className="ri-checkbox-circle-fill text-2xl text-[#6DBE45] mr-4 mt-1"></i>
                <p className="text-lg text-gray-700">
                  <strong>Professional concrete installation</strong> for maximum stability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
