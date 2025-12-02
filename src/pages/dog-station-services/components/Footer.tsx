import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DoodyCalls</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Professional dog waste station repair and maintenance services for cleaner, healthier communities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dog-waste-station-installation" className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm">
                  Station Installation
                </Link>
              </li>
              <li>
                <Link to="/concrete-installation" className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm">
                  Concrete Installation
                </Link>
              </li>
              <li>
                <Link to="/dog-station-services" className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm">
                  Repair Services
                </Link>
              </li>
              <li>
                <Link to="/educational-signs" className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm">
                  Educational Signs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-phone-line text-lg mr-3 mt-1"></i>
                <div>
                  <p className="text-white/70 text-sm">Call us today</p>
                  <p className="text-white font-semibold">(919) 335-1515</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-lg mr-3 mt-1"></i>
                <div>
                  <p className="text-white/70 text-sm">Email us</p>
                  <p className="text-white font-semibold text-sm">info@doodycalls.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm mb-2">
            © 2025 DoodyCalls. All rights reserved. | <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Powered by Readdy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
