"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="bg-gray-100 text-gray-500 border-b border-gray-300">
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
              <span>contact@medicenter.com</span>
            </div>
          </div>

          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FiFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <FiTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <img src="/images/logo.jpeg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold text-blue-600">HealthCare Pro</h1>
          </div>

          <nav className="hidden md:flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
            <a href="#" className="hover:text-blue-500">Pages</a>
            <a href="#" className="hover:text-blue-500">Departments</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
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
          className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={` bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex justify-center items-center py-4">
              <img src="/images/logo.jpeg" alt="HealthCare Pro" className="h-8 w-8 mr-2" />
              <h1 className="text-xl font-bold text-blue-600">HealthCare Pro</h1>
            </div>

            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-gray-700">
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center space-y-6 text-gray-500 py-8">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Pages</a></li>
              <li><a href="#" className="hover:text-blue-500">Departments</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
