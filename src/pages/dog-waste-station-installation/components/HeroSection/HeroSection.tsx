interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback background color if image fails to load
    e.currentTarget.style.backgroundColor = "#1a1a1a";
    console.error("Hero background image failed to load");
  };

  return (
    <section
      id="hero"
      data-animate
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dfnsp8dlj/image/upload/v1764086409/dreamstime_xxl_3475817_2_evls9e.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Dog Waste Station Installation for{" "}
            <span className="text-[#F28C28]">
              Cleaner, Healthier Communities
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
            Expert installation services that keep your community clean and
            beautiful
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-[#F28C28] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#2E5A51] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl whitespace-nowrap cursor-pointer"
              aria-label="Request a quote for dog waste station installation"
              onClick={() => console.log("Request Quote clicked")}
            >
              Request a Quote
            </button>
            <button
              className="border-2 border-white text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F28C28] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              aria-label="Schedule dog waste station installation"
              onClick={() => console.log("Schedule Installation clicked")}
            >
              Schedule Installation
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-3xl" aria-hidden="true"></i>
      </div>
    </section>
  );
}
