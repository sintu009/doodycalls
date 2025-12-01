export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-map-pin-line',
      title: 'Site Assessment',
      description: 'Our team evaluates your property to identify the optimal locations for waste station placement, ensuring maximum convenience and accessibility.',
    },
    {
      icon: 'ri-tools-line',
      title: 'Professional Installation',
      description: 'We handle complete installation with concrete-secured mounting for long-lasting durability and stability in all weather conditions.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Guarantee',
      description: 'All installations come with our quality guarantee, ensuring your waste stations remain functional and attractive for years to come.',
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Ongoing Support',
      description: 'From initial consultation to post-installation support, our friendly team is here to ensure your complete satisfaction.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-4">
            Reliable Dog Waste Station Installation Made Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            When it comes to keeping shared spaces clean, proper waste station placement makes all the difference. At DoodyCalls, we help communities, HOAs, and property managers install reliable, long-lasting dog waste stations that blend perfectly into their surroundings. Our team handles everything — from choosing the right spot to concrete-secured installation — ensuring long-term durability and a clean, inviting environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#6DBE45] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#6DBE45]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#6DBE45] transition-colors">
                <i className={`${service.icon} text-3xl text-[#6DBE45] group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2E5A51] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
