interface EducationalSectionProps {
  isVisible: boolean;
}

export default function EducationalSection({ isVisible }: EducationalSectionProps) {
  return (
    <section 
      id="educational" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Education That Makes an Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the environmental impact helps communities make responsible choices
          </p>
        </div>

        <div className={`bg-gradient-to-r from-[#2E5A51] to-[#3a6b61] rounded-3xl p-12 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-bold mb-8">
              What Your Dog Leaves Behind... Can Poison Our Streams
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-heart-3-fill text-3xl text-[#F28C28]"></i>
                </div>
                <span className="text-lg font-semibold">Dog</span>
              </div>
              
              <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-delete-bin-line text-3xl text-[#F28C28]"></i>
                </div>
                <span className="text-lg font-semibold">Waste</span>
              </div>
              
              <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-rainy-line text-3xl text-[#F28C28]"></i>
                </div>
                <span className="text-lg font-semibold">Rain</span>
              </div>
              
              <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-drain-line text-3xl text-[#F28C28]"></i>
                </div>
                <span className="text-lg font-semibold">Drain</span>
              </div>
              
              <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-water-line text-3xl text-[#F28C28]"></i>
                </div>
                <span className="text-lg font-semibold">Stream</span>
              </div>
              
              <i className="ri-arrow-right-line text-3xl text-[#F28C28]"></i>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-skull-line text-3xl text-white"></i>
                </div>
                <span className="text-lg font-semibold">Contamination</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <p className="text-xl text-white leading-relaxed mb-4">
              "If pet waste is left on the ground, nutrients, bacteria, parasites, and viruses can flow into local streams with rainwater runoff."
            </p>
            <p className="text-lg text-[#F28C28] font-semibold">
              — City of Raleigh, NC
            </p>
          </div>
        </div>

        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-[#2E5A51] mb-6">
            Partner with DoodyCalls to Educate, Protect, and Beautify Your Community
          </h3>
          <a 
            href="#contact"
            className="inline-block bg-[#F28C28] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}