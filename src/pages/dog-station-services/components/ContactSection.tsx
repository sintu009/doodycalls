
interface ContactSectionProps {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: ContactSectionProps) {
  return (
    <section 
      id="contact" 
      data-animate 
      className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#2E5A51]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
              Need <span className="text-[#F28C28]">Immediate Assistance?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For immediate assistance, call <strong className="text-[#2E5A51] font-bold">919-634-5383</strong> or visit our website
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:919-634-5383"
                className="bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#F28C28]/50 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Call Now: 919-634-5383
              </a>
              <button className="border-2 border-[#2E5A51] text-[#2E5A51] px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-[#2E5A51] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                Visit Our Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
