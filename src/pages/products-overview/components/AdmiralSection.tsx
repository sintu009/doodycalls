interface AdmiralSectionProps {
  isVisible: boolean;
}

export default function AdmiralSection({ isVisible }: AdmiralSectionProps) {
  const keyFeatures = [
    "Double-wall, non-perforated enclosure for total odor control",
    "11-gallon enclosed bin with chute entry",
    "Premium aluminum and galvanized steel construction",
    "Designed for odor-sensitive or high-end areas",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          id="admiral"
          data-animate
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="flex items-center mb-6">
              <i className="ri-anchor-line text-4xl text-[#F28C28] mr-4"></i>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51]">
                The Admiral™
              </h2>
            </div>

            <h3 className="text-2xl font-semibold text-[#F28C28] mb-6">
              Premium, Odor-Free Station for Sensitive Areas
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Admiral is DoodyCalls' premium model — perfect for communities
              that prioritize odor control and aesthetics. Its double-can,
              non-perforated design traps odors completely, while a
              mailbox-style chute prevents misuse with household trash.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#2E5A51] mb-4">
                Key Features:
              </h4>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <i className="ri-star-line text-[#F28C28] mr-3 text-lg mt-1 flex-shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#2E5A51] to-[#3a6b61] text-white p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold mb-2">Best For:</h4>
              <p>
                Playgrounds, luxury communities, pet-friendly restaurants, and
                veterinary clinics.
              </p>
            </div>

            <button className="bg-[#F28C28] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Explore The Admiral™
            </button>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src=" https://res.cloudinary.com/dfnsp8dlj/image/upload/v1764091582/admiral_yzaopi.png"
              alt="The Admiral™ Pet Waste Station"
              className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
