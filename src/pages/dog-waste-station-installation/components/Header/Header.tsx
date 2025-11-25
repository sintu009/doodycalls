
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE(path);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-[#6DBE45]" style={{ fontFamily: '"Pacifico", serif' }}>
              DoodyCalls
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Home</a>
            <a onClick={() => handleNavigation('/services')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Services</a>
            <a onClick={() => handleNavigation('/products')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Products</a>
            <a onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">About</a>
            <button className="bg-[#6DBE45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5da838] transition-all whitespace-nowrap cursor-pointer">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Home</a>
            <a onClick={() => handleNavigation('/services')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Services</a>
            <a onClick={() => handleNavigation('/products')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">Products</a>
            <a onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-[#6DBE45] transition-colors cursor-pointer font-medium">About</a>
            <button className="bg-[#6DBE45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5da838] transition-all whitespace-nowrap cursor-pointer">
              Get a Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
