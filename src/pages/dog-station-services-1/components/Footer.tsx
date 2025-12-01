import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2E5A51] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DoodyCalls</h3>
            <p className="text-white/80 leading-relaxed">
              Professional dog waste station installation for cleaner, healthier communities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dog-waste-station-installation" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Station Installation
                </Link>
              </li>
              <li>
                <Link to="/concrete-installation" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Concrete Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Maintenance Services
                </Link>
              </li>
              <li>
                <Link to="/educational-signs" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Educational Signs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-phone-line text-xl mr-3"></i>
                <span className="text-white/80">(919) 335-1515</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-xl mr-3"></i>
                <span className="text-white/80">info@doodycalls.com</span>
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line text-xl mr-3"></i>
                <span className="text-white/80">Raleigh, NC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 DoodyCalls. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
