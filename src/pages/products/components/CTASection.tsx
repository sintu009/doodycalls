
interface CTASectionProps {
  isVisible: boolean;
}

export default function CTASection({ isVisible }: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          id="cta" 
          data-animate 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Ready to Equip Your Community?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's make your property cleaner, safer, and more pet-friendly with DoodyCalls premium waste management solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-[#F28C28] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
              Get a Free Quote
            </button>
            <button className="border-2 border-[#2E5A51] text-[#2E5A51] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2E5A51] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
              View All Products
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-[#2E5A51] mb-2">Call Us</h3>
              <p className="text-gray-600">(919) 555-0123</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-[#2E5A51] mb-2">Email Us</h3>
              <p className="text-gray-600">info@doodycalls.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-[#2E5A51] mb-2">Visit Us</h3>
              <p className="text-gray-600">Wake County, NC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}