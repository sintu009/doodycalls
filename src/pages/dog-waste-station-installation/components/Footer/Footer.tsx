
export default function Footer() {
  const handleNavigation = (path: string) => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-[#6DBE45] mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              DoodyCalls
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional dog waste station installation for cleaner, healthier communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-[#6DBE45] transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigation('/services')} className="text-gray-400 hover:text-[#6DBE45] transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigation('/products')} className="text-gray-400 hover:text-[#6DBE45] transition-colors cursor-pointer">
                  Products
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigation('/about')} className="text-gray-400 hover:text-[#6DBE45] transition-colors cursor-pointer">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#6DBE45]"></i>
                919-634-5383
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#6DBE45]"></i>
                gmann@doodycalls.com
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#6DBE45]"></i>
                Raleigh, NC 27617
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DBE45] transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 DoodyCalls. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6DBE45] transition-colors text-sm cursor-pointer"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
