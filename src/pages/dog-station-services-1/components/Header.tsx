import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#2E5A51]">DoodyCalls</div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#6DBE45] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-[#6DBE45] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-[#6DBE45] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-[#6DBE45] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#6DBE45] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </Link>
          </nav>

          <Link
            to="/services"
            className="hidden md:block px-6 py-2.5 bg-[#6DBE45] text-white text-sm font-semibold rounded-full hover:bg-[#5da838] transition-colors whitespace-nowrap cursor-pointer"
          >
            Get a Quote
          </Link>

          <button className="md:hidden text-2xl">
            <i className={`ri-menu-line ${isScrolled ? 'text-gray-700' : 'text-white'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
