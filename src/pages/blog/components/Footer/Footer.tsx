export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "Pacifico, serif" }}>
              DoodyCalls
            </div>
            <p className="text-white/80 text-sm">
              Professional dog waste management solutions for cleaner, healthier communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="/products" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/dog-station-services" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Station Services
                </a>
              </li>
              <li>
                <a href="/dog-waste-station-installation" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Installation
                </a>
              </li>
              <li>
                <a href="/concrete-installation" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Concrete Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-1"></i>
                <span>Raleigh, NC</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line"></i>
                <span>info@doodycalls.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2024 DoodyCalls. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
