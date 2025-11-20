interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      data-animate 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20technician%20in%20uniform%20installing%20a%20dog%20waste%20station%20or%20trash%20receptacle%20in%20concrete%20foundation%2C%20construction%20site%20with%20tools%20and%20equipment%2C%20community%20park%20setting%20with%20trees%20and%20pathways%2C%20industrial%20installation%20process%2C%20safety%20equipment%2C%20concrete%20mixing%20and%20pouring%2C%20professional%20service%20work%2C%20clean%20modern%20aesthetic&width=1920&height=1080&seq=concrete-hero&orientation=landscape')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Concrete-Installed Dog Waste Stations & <span className="text-[#F28C28]">Trash Cans</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
            Strong Foundations for Cleaner, Longer-Lasting Communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#F28C28] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl whitespace-nowrap cursor-pointer">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#2E5A51] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule an Evaluation
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}