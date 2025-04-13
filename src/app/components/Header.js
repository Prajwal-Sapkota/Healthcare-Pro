"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Topbar from "./topbar";
import { FiPhoneCall } from "react-icons/fi";

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
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.jpg"
              alt="HealthCare Pro"
              className="h-14 w-14"
            />
            <h1 className="text-xl font-bold text-[#375bc7]">AAROGYA</h1>
            <a href="tel:+1234567890" className="ml-4 flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600 transition md:hidden">
              <FiPhoneCall className="text-sm" />
              Appointment
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 items-center text-[#1b2565]">
            <button
              onClick={() => handleNavigation("/")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/healthtips")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              Health Tips
            </button>
            <button
              onClick={() => handleNavigation("/aboutus")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigation("/pages")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("/departments")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              Departments
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-[#375bc7] hover:text-[#A2D063]"
            >
              Contact
            </button>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
            >
              <FiPhoneCall className="text-xl" /> Appointment
            </a>
          </nav>

          {/* Hamburger for mobile */}
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
            className={`absolute top-0 left-0 w-full bg-[#fcfff9] shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex justify-between items-center py-4 px-4">
              <div className="flex items-center">
                <img src="/images/logo.jpg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
                <h1 className="text-xl font-bold text-[#375bc7]">AAROGYA</h1>
              </div>
              {/* Close Button */}
              <button onClick={toggleMenu} className="text-[#1b2565]">
                <FaTimes className="text-xl" />
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-6 text-[#1b2565] py-8">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/healthtips")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  Health Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/aboutus")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/pages")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/departments")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-[#375bc7] hover:text-[#A2D063]"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
