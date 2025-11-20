
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20DoodyCalls%20trash%20cans%20installed%20in%20clean%20HOA%20community%20park%20setting%2C%20well-maintained%20sidewalks%20and%20green%20spaces%2C%20families%20walking%20in%20background%2C%20bright%20sunny%20day%20with%20trees%20and%20grass%2C%20modern%20community%20amenities%2C%20clean%20and%20organized%20neighborhood%20environment&width=1920&height=1080&seq=hero-trash-cans&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            DoodyCalls Trash Cans —<br />
            <span className="text-[#F28C28]">Built to Last</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Durable. Rust-Proof. Professionally Designed for Clean, Consistent Community Spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E5A51] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Ask About Pairing Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
