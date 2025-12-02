export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20park%20with%20green%20grass%20tall%20trees%20sunlight%20filtering%20through%20leaves%20peaceful%20outdoor%20setting%20dog%20waste%20station%20visible%20professional%20photography%20clean%20maintained%20community%20space%20natural%20lighting%20serene%20environment&width=1920&height=1080&seq=hero-dog-service&orientation=landscape"
          alt="Park with dog waste stations"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Keeping Your Dog Waste Stations
          <br />
          <span className="text-[#F28C28]">Tidy Like New</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          Quick, reliable repairs and reinstallation to keep that "brand new"
          look.
          <br />
          Even if you didn't buy from us, we'll keep your community clean and
          cared for.
        </p>
        <button className="px-10 py-4 bg-[#F28C28] text-white text-lg font-bold rounded-full hover:bg-[#5da838] transition-all hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
          Get Your Free Quote
        </button>
      </div>
    </section>
  );
}
