import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <i className="ri-recycle-line text-2xl text-teal-600"></i>
              </div>
              <span className="text-2xl font-bold">DoodyCalls</span>
            </div>
            <p className="text-teal-100 leading-relaxed">
              Professional dog waste station installation for cleaner, healthier communities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-teal-100 hover:text-white transition-colors">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-teal-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/dog-station-services" className="text-teal-100 hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-teal-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-teal-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#quote" className="text-teal-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 pt-8 text-center">
          <p className="text-teal-100">
            © 2024 DoodyCalls. All rights reserved. |{' '}
            <a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors">
              Website Builder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
