
export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/df32d39de15f208bf600e7647eb1e00e.webp" 
              alt="DoodyCalls of Wake County" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Professional pet waste management services for Wake County communities. 
              Keeping your neighborhood clean and pet-friendly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Residential Cleanup
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="/dog-station-services" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Dog Station Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  One-Time Cleanup
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Waste Stations
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Biodegradable Bags
                </a>
              </li>
              <li>
                <a href="/educational-signs" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Educational Signs
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Maintenance Supplies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <i className="ri-phone-line mr-2"></i>
                (919) 634-5383
              </p>
              <p className="text-gray-300">
                <i className="ri-mail-line mr-2"></i>
                info@doodycalls.com
              </p>
              <p className="text-gray-300">
                <i className="ri-map-pin-line mr-2"></i>
                Wake County, NC
              </p>
            </div>
            <button className="mt-4 bg-[#F28C28] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 DoodyCalls of Wake County. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
              Terms of Service
            </a>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
