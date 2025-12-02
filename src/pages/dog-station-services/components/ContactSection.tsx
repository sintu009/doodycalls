export default function ContactSection() {
  const services = [
    {
      icon: "ri-tools-line",
      title: "Replacement of broken or leaning posts",
      description: "Concrete re-setting to keep stations upright and secure",
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#F28C28]",
    },
    {
      icon: "ri-refresh-line",
      title: "Reinstallation or relocation",
      description:
        "Moving stations to better locations as your property evolves",
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#F28C28]",
    },
    {
      icon: "ri-flashlight-line",
      title: "Fast, professional service",
      description: "Keeping your community looking its best without the wait",
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#F28C28]",
    },
    {
      icon: "ri-hand-heart-line",
      title: "Affordable maintenance",
      description:
        "Extending the life of your investment at a fraction of the cost",
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#F28C28]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Repair & Reinstallation{" "}
            <span className="text-[#F28C28]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our repair and reinstallation services keep your waste stations
            functioning smoothly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}
              >
                <i
                  className={`${service.icon} text-3xl ${service.iconColor}`}
                ></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
