
interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      data-animate 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Clean%20modern%20HOA%20community%20park%20walkway%20with%20professional%20educational%20signage%2C%20well-maintained%20landscaping%2C%20walking%20paths%2C%20residential%20buildings%20in%20background%2C%20bright%20daylight%2C%20community%20setting%20with%20clear%20visibility%20of%20informational%20signs%20promoting%20responsible%20pet%20ownership&width=1920&height=1080&seq=hero-signs&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Educational Dog Waste Ordinance Signs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Help Your Community Stay Informed, Compliant, and Clean
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90">
            Reduce complaints, promote responsibility, and keep shared spaces healthy with professionally designed ordinance signs from DoodyCalls of Wake County.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#F28C28] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
