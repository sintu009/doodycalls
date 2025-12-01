import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <i className="ri-recycle-line text-2xl text-white"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">DoodyCalls</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About
            </Link>
            <a
              href="#quote"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
