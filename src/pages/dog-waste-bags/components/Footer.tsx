
export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                logo
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional pet waste management solutions for cleaner, healthier communities across Wake County.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F28C28] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F28C28] transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F28C28] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F28C28] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Residential Cleanup
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="/dog-station-services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Dog Station Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  HOA Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="/products-overview" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Waste Stations
                </a>
              </li>
              <li>
                <a href="/dog-waste-bags" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Dog Waste Bags
                </a>
              </li>
              <li>
                <a href="/educational-signs" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Customer Signs
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#F28C28]"></i>
                <a href="tel:919-634-5383" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  919-634-5383
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#F28C28]"></i>
                <a href="mailto:gmann@doodycalls.com" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  gmann@doodycalls.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#F28C28]"></i>
                <span className="text-gray-300">Raleigh, NC 27617</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 DoodyCalls of Wake County. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
