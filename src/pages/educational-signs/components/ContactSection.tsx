interface ContactSectionProps {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: ContactSectionProps) {
  return (
    <section 
      id="contact" 
      data-animate 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Order Your Educational Signs Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify communication and keep your community clean with Educational Dog Waste Ordinance Signs by DoodyCalls of Wake County.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20from%20DoodyCalls%20helping%20community%20manager%20with%20educational%20signage%20consultation%2C%20modern%20office%20setting%2C%20friendly%20business%20interaction%2C%20Wake%20County%20North%20Carolina%20location%2C%20professional%20consultation%20meeting&width=600&height=400&seq=contact&orientation=landscape"
              alt="Professional Consultation"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F28C28] text-white rounded-full flex items-center justify-center mr-6">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-1">Email</h3>
                <a 
                  href="mailto:gmann@doodycalls.com"
                  className="text-gray-600 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer text-lg"
                >
                  gmann@doodycalls.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F28C28] text-white rounded-full flex items-center justify-center mr-6">
                <i className="ri-phone-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-1">Phone</h3>
                <a 
                  href="tel:919-634-5383"
                  className="text-gray-600 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer text-lg"
                >
                  919-634-5383
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F28C28] text-white rounded-full flex items-center justify-center mr-6">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-1">Location</h3>
                <p className="text-gray-600 text-lg">Raleigh, NC 27617</p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="mailto:gmann@doodycalls.com"
                className="inline-block bg-[#F28C28] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-16 bg-white rounded-2xl p-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-xl"></i>
              </div>
              <h4 className="font-bold text-[#2E5A51] mb-2">Quick Response</h4>
              <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calculator-line text-xl"></i>
              </div>
              <h4 className="font-bold text-[#2E5A51] mb-2">Free Quotes</h4>
              <p className="text-gray-600">No obligation estimates for all projects</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#2E5A51] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-xl"></i>
              </div>
              <h4 className="font-bold text-[#2E5A51] mb-2">Expert Support</h4>
              <p className="text-gray-600">Professional guidance throughout the process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}