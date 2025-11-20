interface TechnicalSpecsProps {
  isVisible: boolean;
}

export default function TechnicalSpecs({ isVisible }: TechnicalSpecsProps) {
  const specs = [
    { attribute: "Material", details: "Extra-thick rust-proof aluminum" },
    { attribute: "Finish", details: "Powder-coated with non-chrome seal" },
    { attribute: "Capacity", details: "10 gallons" },
    { attribute: "Colors", details: "Green / Black" },
    { attribute: "Post", details: "Two-piece 8 ft. square aluminum post" },
    { attribute: "Dispenser", details: "Header or Roll bag compatible" },
    { attribute: "Signage", details: "\"Please Clean Up After Your Pet\" included" },
    { attribute: "Installation", details: "In-ground with concrete" }
  ];

  return (
    <section 
      id="specs" 
      data-animate 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by over 17 years of field-tested design experience.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2E5A51] text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">Attribute</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, index) => (
                    <tr 
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-gray-100 transition-colors duration-200`}
                    >
                      <td className="px-6 py-4 text-gray-700 font-semibold border-b border-gray-200">
                        {spec.attribute}
                      </td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gray-200">
                        {spec.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 italic">
              Backed by over 17 years of field-tested design experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}