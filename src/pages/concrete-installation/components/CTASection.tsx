interface CTASectionProps {
  isVisible: boolean;
}

export default function CTASection({ isVisible }: CTASectionProps) {
  return (
    <section id="cta" data-animate className="py-24 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Request a Concrete Installation Quote
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            Ready to upgrade or stabilize your community's stations and trash receptacles?
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Contact DoodyCalls of Wake County today for a consultation or free site evaluation.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-white/90">gmann@doodycalls.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-white/90">919-634-5383</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-white/90">Raleigh, NC 27617</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#2E5A51] px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#2E5A51] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}