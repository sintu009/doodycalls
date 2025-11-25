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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Beautiful%20community%20park%20with%20families%20walking%20dogs%2C%20children%20playing%2C%20clean%20walkways%20and%20green%20spaces%2C%20bright%20sunny%20day%20with%20trees%20and%20well-maintained%20grass%20areas%2C%20friendly%20neighborhood%20atmosphere%20with%20modern%20playground%20equipment%20and%20benches%2C%20professional%20photography%20style%20with%20warm%20natural%20lighting&width=1920&height=1080&seq=hero-community&orientation=landscape')`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div
          className={`text-center text-white transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Because Clean Communitiessss
            <br />
            <span className="text-[#F28C28]">Reflect Who We Are</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            We help communities protect what matters — their shared spaces,
            their environment, and their reputation.
          </p>
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Start Your Community's Clean Future
          </button>
        </div>
      </div>
    </section>
  );
}
