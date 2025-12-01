export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/475600a98881414a1b6e5b35d430e295.jpeg"
          alt="Professional dog waste station installation in community park"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Professional Dog Waste Station Installation for Cleaner Spaces
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your community with expertly installed dog waste stations. Professional service, quality products, and cleaner environments.
        </p>
        <a
          href="#quote"
          className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap"
        >
          Request Installation
        </a>
      </div>
    </section>
  );
}
