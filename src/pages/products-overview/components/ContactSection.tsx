
interface ContactSectionProps {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: ContactSectionProps) {
  return (
    <section id="contact" data-animate className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className={`mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
              Ready to Make Your Community Cleaner?
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Cleaner common areas. Happier residents. Smarter communities.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2E5A51] mb-2">Email</h3>
              <a 
                href="mailto:gmann@doodycalls.com" 
                className="text-gray-700 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer"
              >
                gmann@doodycalls.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2E5A51] mb-2">Phone</h3>
              <a 
                href="tel:919-634-5383" 
                className="text-gray-700 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer"
              >
                919-634-5383
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#2E5A51] mb-2">Location</h3>
              <p className="text-gray-700">Raleigh, NC 27617</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <button className="bg-[#F28C28] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Get a Free Quote or Schedule Installation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
