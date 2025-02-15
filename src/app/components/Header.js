"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Topbar from "./topbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Topbar />

      <header className="bg-[#fcfff9] shadow-md sticky top-0 z-50">
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
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
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
            className={`absolute top-0 left-0 w-full bg-[#fcfff9] shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex justify-between items-center py-4 px-4">
              <div className="flex items-center">
                <img src="/images/logo.jpeg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
                <h1 className="text-xl font-bold text-[#375bc7]">HealthCare Pro</h1>
              </div>
              {/* Close Button */}
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
      </header>
    </>
  );
}
