import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo_doody_white_calls.webp";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2E5A51] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              <img
                src={logo}
                alt="DoodyCalls logo"
                className="h-12 object-contain"
              />
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Professional pet waste management services for communities across
              North Carolina.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#F28C28]"></i>
                <span>(919) 634 5383</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#F28C28]"></i>
                <span>gmann@doodycalls.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#F28C28]"></i>
                <span>Raleigh, NC 27617</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © 2025 DoodyCalls of Wake County. All rights reserved.
          </p>

          <nav className="flex space-x-4" aria-label="Footer navigation">
            <button
              type="button"
              onClick={() => navigate("/privacyPolicy")}
              className="text-sm opacity-75 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => navigate("/termcondition")}
              className="text-sm opacity-75 hover:underline"
            >
              Terms &amp; Conditions
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
