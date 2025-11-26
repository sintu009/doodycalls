import { useState } from "react";
// import { Link } from "react-router-dom";
import GetQuoteModal from "../../../components/GetQuoteModal";

interface CommanderSectionProps {
  isVisible: boolean;
}

export default function CommanderSection({ isVisible }: CommanderSectionProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          id="commander"
          data-animate
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <img
              src=" https://res.cloudinary.com/dfnsp8dlj/image/upload/v1764091201/product_ndkr3o.png"
              alt="The Commander™ Pet Waste Station"
              className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center mb-6">
              <i className="ri-command-line text-4xl text-[#F28C28] mr-4"></i>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51]">
                The Commander™
              </h2>
            </div>

            <h3 className="text-2xl font-semibold text-[#F28C28] mb-6">
              Our Most Popular and Versatile Model
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Commander is DoodyCalls' best-selling pet waste station,
              trusted by thousands of communities for its balance of durability,
              cost-effectiveness, and visual appeal.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              It comes in two sizes to suit different property layouts:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#F28C28]">
                <h4 className="font-bold text-[#2E5A51] mb-2">
                  10-Gallon Commander:
                </h4>
                <p className="text-gray-600">
                  Ideal for communities with large shared spaces needing
                  multiple stations.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#2E5A51]">
                <h4 className="font-bold text-[#2E5A51] mb-2">
                  22-Gallon Commander:
                </h4>
                <p className="text-gray-600">
                  Best for dense neighborhoods with limited space, offering
                  higher capacity with fewer installations.
                </p>
              </div>
            </div>

            <div className="bg-[#2E5A51] text-white p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold mb-2">Best For:</h4>
              <p>Dog parks, sidewalks, and community trails.</p>
            </div>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-block bg-[#F28C28] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Get Your Quote Now
            </button>

            {/* <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#F28C28] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Get Your Quote
            </button> */}
          </div>
        </div>
        <GetQuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />
      </div>
    </section>
  );
}
