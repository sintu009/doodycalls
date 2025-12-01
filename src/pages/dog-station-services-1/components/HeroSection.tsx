export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/78dcd91a43bbf7da6cdb1777e3bc2299.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Professional Dog Waste
          <br />
          Station Installation for
          <br />
          Cleaner, Healthier
          <br />
          Communities
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Expert installation services for HOAs, parks, and property managers
        </p>
        <button className="px-8 py-4 bg-[#6DBE45] text-white text-lg font-semibold rounded-full hover:bg-[#5da838] transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg">
          Request a Quote
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white"></i>
      </div>
    </section>
  );
}
