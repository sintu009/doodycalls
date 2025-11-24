
export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/df32d39de15f208bf600e7647eb1e00e.webp" 
              alt="DoodyCalls of Wake County" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Professional pet waste management solutions for communities, HOAs, apartments, and parks throughout Wake County.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200 cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200 cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="ri-phone-line mr-3 text-[#F28C28]"></i>
                <span className="text-gray-300">(919) 555-0123</span>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line mr-3 text-[#F28C28]"></i>
                <span className="text-gray-300">info@doodycalls.com</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-3 text-[#F28C28]"></i>
                <span className="text-gray-300">Wake County, NC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 DoodyCalls of Wake County. All rights reserved.
          </p>
           
        </div>
      </div>
    </footer>
  );
}