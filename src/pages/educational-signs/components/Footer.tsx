
export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Pacifico", serif' }}>
              DoodyCalls of Wake County
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Professional pet waste management services for communities across North Carolina.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#F28C28]"></i>
                <span>(919) 634 5383</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#F28C28]"></i>
                <span>gmann@doodycalls.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#F28C28]"></i>
                <span>Raleigh, NC 27617</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200 cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © 2024 DoodyCalls of Wake County. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
