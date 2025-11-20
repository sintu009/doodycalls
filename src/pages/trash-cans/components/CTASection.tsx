
interface CTASectionProps {
  isVisible: boolean;
}

export default function CTASection({ isVisible }: CTASectionProps) {
  return (
    <section 
      id="cta" 
      data-animate 
      className="py-20 bg-[#2E5A51]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Upgrade Your Community Spaces?
          </h2>
          
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to add durable, professional trash cans to your community areas? Request a quote or ask about pairing options with your existing DoodyCalls stations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E5A51] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Contact Us Today
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-white">
              <i className="ri-phone-line text-2xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="text-lg font-semibold">919-634-5383</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <i className="ri-mail-line text-2xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-lg font-semibold">gmann@doodycalls.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <i className="ri-map-pin-line text-2xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-300">Location</p>
                <p className="text-lg font-semibold">Raleigh, NC 27617</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
