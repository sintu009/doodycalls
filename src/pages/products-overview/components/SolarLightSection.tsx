
interface SolarLightSectionProps {
  isVisible: boolean;
}

export default function SolarLightSection({ isVisible }: SolarLightSectionProps) {
  const benefits = [
    {
      icon: 'ri-eye-line',
      title: 'Improved visibility and safety at night',
      emoji: '🌙'
    },
    {
      icon: 'ri-sun-line',
      title: 'Energy-efficient, cost-free operation using sunlight',
      emoji: '☀️'
    },
    {
      icon: 'ri-tools-line',
      title: 'Easy installation — mounts directly to the top of the dispenser or post',
      emoji: '⚙️'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Weather-resistant design for year-round outdoor use',
      emoji: '💧'
    },
    {
      icon: 'ri-star-line',
      title: 'Enhances the professional, well-maintained look of your dog waste station',
      emoji: '🌿'
    }
  ];

  return (
    <section 
      id="solar-light" 
      data-animate 
      className="relative py-24 bg-gradient-to-b from-[#F6F6F6] via-[#E8F4F8] to-[#2E5A51]/20 overflow-hidden"
    >
      {/* Ambient lighting effects */}
      <div className="absolute inset-0">
        {/* Solar energy rings */}
        <div className="absolute top-20 left-1/4 w-96 h-96 border border-[#F28C28]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-1/4 w-80 h-80 border border-[#F28C28]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-44 left-1/4 w-64 h-64 border border-[#F28C28]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Light rays */}
        <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-transparent via-[#F28C28]/10 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#F28C28]/15 to-transparent transform -rotate-6"></div>
        <div className="absolute top-0 right-2/3 w-1 h-full bg-gradient-to-b from-transparent via-[#F28C28]/10 to-transparent transform rotate-3"></div>
        
        {/* Floating energy particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#F28C28]/30 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#F28C28]/40 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-[#F28C28]/50 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Solar Energy Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#F28C28]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-48 h-48 bg-[#FFB366]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-[#2E5A51]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Light Ray Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#F28C28]/40 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-24 bg-gradient-to-b from-[#FFB366]/30 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-28 bg-gradient-to-b from-[#F28C28]/35 to-transparent rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header with Solar Icon */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#F28C28] to-[#FFB366] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-3xl">☀️</span>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#F28C28] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2E5A51] mb-4 uppercase tracking-wide">
            Solar Light Upgrade
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-[#F28C28] tracking-wide">
            Smart, Sustainable, and Safe
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Hero Image with Ambient Lighting */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Station Image */}
              <div className="relative bg-black/20 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20dog%20waste%20station%20with%20bright%20solar%20light%20mounted%20on%20top%20glowing%20warm%20amber%20light%20in%20twilight%20dusk%20setting%2C%20modern%20community%20park%20environment%2C%20soft%20light%20beams%20illuminating%20ground%20around%20station%2C%20lens%20flare%20effect%20from%20solar%20light%2C%20beautiful%20evening%20sky%20with%20deep%20blue%20and%20orange%20colors%2C%20premium%20quality%20installation%20with%20visible%20light%20dispersion&width=600&height=700&seq=solar-station-twilight&orientation=portrait"
                  alt="Dog waste station with solar light upgrade glowing at dusk"
                  className="w-full rounded-2xl shadow-2xl object-cover object-top"
                />
                
                {/* Ambient Glow Effects */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#FFB366]/60 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/80 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Light Beam Effects */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-transparent via-[#FFB366]/40 to-transparent blur-sm"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-transparent via-[#F28C28]/30 to-transparent blur-md"></div>
              </div>

              {/* Floating Energy Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-40 h-40 border-2 border-[#F28C28]/30 rounded-full animate-ping"></div>
                <div className="absolute inset-6 w-28 h-28 border-2 border-[#FFB366]/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-12 w-16 h-16 border-2 border-white/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Body Text Cards */}
            <div className="space-y-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
                <p className="text-lg text-black leading-relaxed">
                  Adding a solar light to your dog waste station enhances visibility, safety, and usability during evening and early-morning hours. The light automatically charges during the day and turns on at dusk, providing a soft, steady illumination that makes the station easy to locate after dark.
                </p>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px bg-white/20 my-8"></div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
                <p className="text-lg text-black leading-relaxed">
                  For users, a solar light means greater convenience — they can clearly see the bag dispenser and waste bin, reducing littering or improper disposal. For communities, it improves the appearance and accessibility of shared areas without requiring wiring, electricity, or ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - Glowing Feature Cards */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="text-center mb-12">
            <div className="h-px bg-white/20 mb-8"></div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F28C28] to-[#FFB366] rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-xl"></i>
              </div>
              Key Benefits
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28]/20 to-[#FFB366]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2E5A51] to-[#4A7C7A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{benefit.emoji}</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#F28C28] to-[#FFB366] rounded-lg flex items-center justify-center group-hover:animate-pulse">
                      <i className={`${benefit.icon} text-white text-sm`}></i>
                    </div>
                  </div>
                  
                  <p className="text-[#2E5A51] font-medium leading-relaxed group-hover:text-[#1A3A33] transition-colors duration-300">
                    {benefit.title}
                  </p>

                  {/* Micro Glow Effect */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F28C28]/60 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote with Ambient Design */}
        <div className={`mt-20 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="h-px bg-white/20 mb-12"></div>
          
          <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
            {/* Decorative Light Elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#F28C28] to-[#FFB366] rounded-full flex items-center justify-center shadow-2xl">
              <i className="ri-quote-text text-white text-xl"></i>
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#F28C28] to-transparent"></div>
              <div className="w-3 h-3 bg-[#FFB366] rounded-full animate-pulse"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#F28C28] to-transparent"></div>
            </div>
            
            <p className="text-2xl text-[#2E5A51] font-medium leading-relaxed italic">
              "Illuminate your community's commitment to cleanliness and sustainability with our premium solar light upgrade."
            </p>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28]/10 via-transparent to-[#2E5A51]/10 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
