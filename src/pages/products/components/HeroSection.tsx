
interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      data-animate 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/df27f716ddfc7c903b26f21e4377f2d6.png')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Top-Quality Pet Waste Solutions<br />
            <span className="text-[#F28C28]">for Cleaner, Happier Communities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover durable, eco-friendly pet waste products designed to make community spaces cleaner, safer, and more welcoming.
          </p>
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Request a Product Quote
          </button>
        </div>
      </div>
    </section>
  );
}