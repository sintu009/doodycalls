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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=A%20professional%20pet%20waste%20station%20installed%20in%20a%20pristine%20community%20park%20setting%20with%20green%20grass%2C%20walking%20paths%2C%20and%20trees%20in%20the%20background.%20The%20station%20is%20modern%2C%20durable%2C%20and%20well-maintained%2C%20showing%20a%20clean%20aluminum%20structure%20with%20a%20waste%20bin%20and%20bag%20dispenser.%20The%20scene%20conveys%20cleanliness%2C%20community%20care%2C%20and%20environmental%20responsibility%20in%20a%20bright%2C%20welcoming%20outdoor%20space%20with%20natural%20lighting%20and%20a%20peaceful%20atmosphere.&width=1920&height=1080&seq=hero-commander-station&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Commander™<br />
            <span className="text-[#F28C28]">Built Tough. Designed Smart.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Durable and versatile, the Commander™ is perfect for busy HOAs, parks, and pet-friendly communities.
          </p>
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Request a Product Quote
          </button>
        </div>
      </div>
    </section>
  );
}