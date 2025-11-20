
interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/e814378c8526abcce5153d59df22d687.jpeg')`
      }}
    >
      <div id="hero" data-animate className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DoodyCalls Pet Waste Stations
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold">
            Built for Communities that Care
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Innovative design. Incredible value. Cleaner, smarter spaces for everyone.
          </p>
          <button className="bg-[#F28C28] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
