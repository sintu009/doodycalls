
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Clean%20neighborhood%20park%20with%20dog%20owner%20responsibly%20using%20compostable%20waste%20bags%2C%20beautiful%20green%20community%20landscape%2C%20responsible%20pet%20ownership%2C%20eco-friendly%20dog%20waste%20management%20in%20residential%20area%20with%20trees%20and%20walking%20paths&width=1920&height=1080&seq=hero-community-park&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Cleaner Communities Start with<br />
            <span className="text-[#F28C28]">Smarter Choices</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Environmental benefits of using 100% Compostable bags from renewable material versus virgin plastic bags for collecting dog waste in the U.S.
          </p>
          
          {/* EPA Data Infographic Line */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-white/30">
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
                <i className="ri-bar-chart-line text-2xl"></i>
              </div>
              <p className="text-lg font-semibold">
                See how your HOA can reduce landfill waste and methane emissions — backed by EPA data.
              </p>
            </div>
          </div>

          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Learn How Compostable Bags Help the Planet
          </button>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
