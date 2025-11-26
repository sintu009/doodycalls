import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_doody_calls.webp";
import GetQuoteModal from "./GetQuoteModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // new
  const navigate = useNavigate();

  const optionsRef = useRef<HTMLDivElement | null>(null); // new

  // Timeout refs for delayed hide behavior for dropdowns
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isOptionsOpen &&
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setIsOptionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOptionsOpen]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    servicesTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      servicesTimeoutRef.current = null;
    }, 300);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
    setProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    productsTimeoutRef.current = window.setTimeout(() => {
      setProductsOpen(false);
      productsTimeoutRef.current = null;
    }, 300);
  };

  // Centralized navigation helper
  const handleNavigation = (path: string) => {
    console.log("Navigate to:", path);
    // clear any pending timeouts as we navigate away
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    setIsMenuOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              {/* Logo Image */}
              <img
                src={logo}
                alt="DoodyCalls Logo"
                className="h-10 w-15 object-contain mr-2"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                Home
              </a>

              {/* Services with hover dropdown (desktop) */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/services");
                  }}
                  className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer flex items-center space-x-2"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {/* Desktop Services dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden transition-opacity duration-150 ${
                    servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <a
                    href="/concrete-installation"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/concrete-installation");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Station & Trash Can Installation
                  </a>
                  <a
                    href="/dog-waste-station-installation"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/dog-waste-station-installation");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Dog Waste Station Installation
                  </a>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Repair ReInstallation
                  </a>
                </div>
              </div>

              {/* Products with hover dropdown (desktop) */}
              <div
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <a
                  href="/products-overview"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/products-overview");
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
                    href="/educational-signs"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/educational-signs");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Educational-signs
                  </a>
                  <a
                    href="/dog-waste-bags"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/dog-waste-bags");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Dog-waste-bags
                  </a>
                  <a
                    href="/trash-cans"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/trash-cans");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    Trash-cans
                  </a>
                  <a
                    href="/products-overview#masterchief"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen(false);
                      handleNavigation("/products-overview#masterchief");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    The Master Chief™
                  </a>
                  <a
                    href="/products-overview#commander"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen(false);
                      handleNavigation("/products-overview#commander");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    The Commander™
                  </a>
                  <a
                    href="/products-overview#admiral"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen(false);
                      handleNavigation("/products-overview#admiral");
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    The Admiral™
                  </a>
                </div>
              </div>

              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/blog");
                }}
                className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
              >
                Blogs
              </a>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#F28C28] text-white px-6 py-2 rounded-full hover:bg-[#e07a1f] transition-colors whitespace-nowrap cursor-pointer"
              >
                Get a Free Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() =>
                setIsMenuOpen((prev) => {
                  if (prev) {
                    setProductsOpen(false); // close products when closing menu
                    setServicesOpen(false); // close services when closing menu
                  }
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/");
                  }}
                  className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/services");
                  }}
                  className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                >
                  Services
                </a>

                {/* Mobile Services expandable */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                    onClick={() => setServicesOpen((p) => !p)}
                    aria-expanded={servicesOpen}
                  >
                    <span>Services</span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="mt-2 flex flex-col space-y-2 pl-4">
                      <a
                        href="/concrete-installation"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/concrete-installation");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Station & Trash Can Installation
                      </a>
                      <a
                        href="/dog-waste-station-installation"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/dog-waste-station-installation");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Dog Waste Station Installation
                      </a>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Repair ReInstallation
                      </a>
                    </div>
                  )}
                </div>

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
                        href="/educational-signs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/educational-signs");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Educational-signs
                      </a>
                      <a
                        href="/dog-waste-bags"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/dog-waste-bags");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Dog-waste-bags
                      </a>
                      <a
                        href="/trash-cans"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/trash-cans");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        Trash-cans
                      </a>
                      <a
                        href="/products-overview#masterchief"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductsOpen(false);
                          handleNavigation("/products-overview#masterchief");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        The Master Chief™
                      </a>
                      <a
                        href="/products-overview#commander"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductsOpen(false);
                          handleNavigation("/products-overview#commander");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        The Commander™
                      </a>
                      <a
                        href="/products-overview#admiral"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductsOpen(false);
                          handleNavigation("/products-overview#admiral");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                      >
                        The Admiral™
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Options - simple collapsible */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-700 hover:text-[#2E5A51] transition-colors cursor-pointer"
                    onClick={() => setIsOptionsOpen((p) => !p)}
                    aria-expanded={isOptionsOpen}
                  >
                    <span>Options</span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${
                        isOptionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOptionsOpen && (
                    <div className="mt-2 flex flex-col space-y-2 pl-4">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOptionsOpen(false);
                          setIsMenuOpen(false);
                          handleNavigation("/account");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51]"
                      >
                        Account settings
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOptionsOpen(false);
                          setIsMenuOpen(false);
                          handleNavigation("/support");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51]"
                      >
                        Support
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOptionsOpen(false);
                          setIsMenuOpen(false);
                          handleNavigation("/license");
                        }}
                        className="text-gray-700 hover:text-[#2E5A51]"
                      >
                        License
                      </a>
                      <button
                        onClick={() => {
                          setIsOptionsOpen(false);
                          setIsMenuOpen(false);
                          // TODO: sign-out
                          console.log("Sign out clicked");
                          handleNavigation("/");
                        }}
                        className="text-left text-gray-700 hover:text-[#2E5A51]"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>

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
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
