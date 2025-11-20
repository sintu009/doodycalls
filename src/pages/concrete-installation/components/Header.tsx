
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/df32d39de15f208bf600e7647eb1e00e.webp" 
              alt="DoodyCalls of Wake County" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/services" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
              Services
            </a>
            <a href="/products" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
              Products
            </a>
            <a href="/about" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
              About
            </a>
            <a href="/concrete-installation" className="text-[#F28C28] font-semibold cursor-pointer">
              Installation
            </a>
            <button className="bg-[#F28C28] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e07a1f] transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2E5A51] hover:text-[#F28C28] transition-colors duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/services" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
                Services
              </a>
              <a href="/products" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
                Products
              </a>
              <a href="/about" className="text-[#2E5A51] hover:text-[#F28C28] font-medium transition-colors duration-300 cursor-pointer">
                About
              </a>
              <a href="/concrete-installation" className="text-[#F28C28] font-semibold cursor-pointer">
                Installation
              </a>
              <button className="bg-[#F28C28] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e07a1f] transition-all duration-300 hover:shadow-lg w-fit whitespace-nowrap cursor-pointer">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
