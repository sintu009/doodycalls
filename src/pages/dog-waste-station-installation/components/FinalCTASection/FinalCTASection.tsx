interface FinalCTASectionProps {
  isVisible: boolean;
}

export default function FinalCTASection({ isVisible }: FinalCTASectionProps) {
  return (
    <section id="final-cta" data-animate className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to install dog waste stations that last for years?
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Let's work together to create a cleaner, healthier community
          </p>

          <button className="bg-[#F28C28] text-white px-16 py-6 rounded-full text-xl font-semibold hover:bg-[#5da838] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl whitespace-nowrap cursor-pointer">
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
