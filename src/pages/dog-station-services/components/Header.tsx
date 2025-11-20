import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="text-2xl font-bold text-[#2E5A51]"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              DoodyCalls
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
            >
              Products
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
            >
              About
            </a>
            <button className="bg-[#F28C28] text-white px-6 py-2 rounded-full hover:bg-[#e07a1f] transition-colors whitespace-nowrap cursor-pointer">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i
                className={`${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                } text-2xl text-gray-700`}
              ></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="/products"
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                Products
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                About
              </a>
              <button className="bg-[#F28C28] text-white px-6 py-2 rounded-full hover:bg-[#e07a1f] transition-colors w-fit whitespace-nowrap cursor-pointer">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
