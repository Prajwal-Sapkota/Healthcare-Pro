"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="bg-[#fcfff9] text-[#1b2565] border-b border-[#6dc5f1]">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>1234567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>contact@healthcarepro.com</span>
            </div>
          </div>

          <div className="flex space-x-4 text-sm">
            <button onClick={() => handleNavigation("#")} className="text-[#1b2565] hover:text-[#375bc7]">
              <FiFacebook />
            </button>
            <button onClick={() => handleNavigation("#")} className="text-[#1b2565] hover:text-[#6dc5f1]">
              <FiTwitter />
            </button>
            <button onClick={() => handleNavigation("#")} className="text-[#1b2565] hover:text-red-600">
              <FiYoutube />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#fcfff9] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <img src="/images/logo.jpeg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold text-[#375bc7]">HealthCare Pro</h1>
          </div>

          <nav className="hidden md:flex space-x-6 text-[#1b2565]">
            <button onClick={() => handleNavigation("/")} className="hover:text-[#375bc7]">Home</button>
            <button onClick={() => handleNavigation("/blog")} className="hover:text-[#375bc7]">Blog</button>
            <button onClick={() => handleNavigation("/pages")} className="hover:text-[#375bc7]">Pages</button>
            <button onClick={() => handleNavigation("/departments")} className="hover:text-[#375bc7]">Departments</button>
            <button onClick={() => handleNavigation("/contact")} className="hover:text-[#375bc7]">Contact</button>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#1b2565]">
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#1b2565] bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={` bg-[#fcfff9] shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex justify-center items-center py-4">
              <img src="/images/logo.jpeg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
              <h1 className="text-xl font-bold text-[#375bc7]">HealthCare Pro</h1>
            </div>

            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-[#1b2565]">
                <FaTimes className="text-xl" />
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-6 text-[#1b2565] py-8">
              <li><button onClick={() => handleNavigation("/")} className="hover:text-[#375bc7]">Home</button></li>
              <li><button onClick={() => handleNavigation("/blog")} className="hover:text-[#375bc7]">Blog</button></li>
              <li><button onClick={() => handleNavigation("/pages")} className="hover:text-[#375bc7]">Pages</button></li>
              <li><button onClick={() => handleNavigation("/departments")} className="hover:text-[#375bc7]">Departments</button></li>
              <li><button onClick={() => handleNavigation("/contact")} className="hover:text-[#375bc7]">Contact</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
