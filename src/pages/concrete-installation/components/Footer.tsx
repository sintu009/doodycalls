export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              <span className="text-white">DoodyCalls</span>
              <span className="text-[#F28C28]"> of Wake County</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional dog waste station services and concrete installation solutions for cleaner, safer communities throughout Wake County.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-300 cursor-pointer">Station Maintenance</a></li>
              <li><a href="/concrete-installation" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-300 cursor-pointer">Concrete Installation</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-300 cursor-pointer">Dog Waste Stations</a></li>
              <li><a href="/trash-cans" className="text-gray-300 hover:text-[#F28C28] transition-colors duration-300 cursor-pointer">Trash Receptacles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#F28C28]"></i>
                <span className="text-gray-300">919-634-5383</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#F28C28]"></i>
                <span className="text-gray-300">gmann@doodycalls.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#F28C28]"></i>
                <span className="text-gray-300">Raleigh, NC 27617</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 DoodyCalls of Wake County. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-[#F28C28] text-sm transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-[#F28C28] text-sm transition-colors duration-300 cursor-pointer">
              Terms of Service
            </a>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-[#F28C28] text-sm transition-colors duration-300 cursor-pointer">
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}