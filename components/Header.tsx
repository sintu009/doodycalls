
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_doody_calls.webp";
import GetQuoteModal from "./GetQuoteModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            {/* Logo Image */}
            <img
              src={logo}
              alt="DoodyCalls Logo"
              className="h-10 w-25 object-contain mr-2"
            />
 
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

            {/* Products with hover dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <a
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/products");
                }}
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer flex items-center space-x-2"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </a>

              {/* Desktop dropdown */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden transition-opacity duration-150 ${
                  productsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <a
                  href="/products-overview#masterchief"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  The Master Chief
                </a>
                <a
                  href="/products-overview#commander"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  The Commander
                </a>
                <a
                  href="/products-overview#admiral"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  The Admiral
                </a>
              </div>
            </div>

            {/* <a
              href="/about"
              className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
            >
              About
            </a> */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#F28C28] text-white px-6 py-2 rounded-full hover:bg-[#e07a1f] transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() =>
              setIsMenuOpen((prev) => {
                if (prev) setProductsOpen(false); // close products when closing menu
                return !prev;
              })
            }
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

              {/* Mobile Products expandable */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                  onClick={() => setProductsOpen((p) => !p)}
                  aria-expanded={productsOpen}
                >
                  <span>Products</span>
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="mt-2 flex flex-col space-y-2 pl-4">
                    <a
                      href="/products-overview#masterchief"
                      className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                    >
                      The Master Chief
                    </a>
                    <a
                      href="/products-overview#commander"
                      className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                    >
                      The Commander
                    </a>
                    <a
                      href="/products-overview#admiral"
                      className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                    >
                      The Admiral
                    </a>
                  </div>
                )}
              </div>

              {/* <a
                href="/about"
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                About
              </a> */}
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#F28C28] text-white px-6 py-2 rounded-full hover:bg-[#e07a1f] transition-colors w-fit whitespace-nowrap cursor-pointer"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
      </header>
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
