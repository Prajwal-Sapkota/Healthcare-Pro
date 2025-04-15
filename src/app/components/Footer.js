"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gray-200 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Contact Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Map */}
          <div className="bg-blue-400 text-white p-6 rounded-lg hover:text-[#fcfff9] transition-colors">
            <button
              onClick={() => router.push("/contact/#mapSection")}
              className="flex flex-col sm:items-start sm:text-left items-center text-center w-full focus:outline-none"
            >
              <FaMapMarkerAlt className="text-[#fcfff9] text-3xl mb-2" />
              <span className="text-lg font-semibold mb-1">Find Us On Map</span>
              <p className="text-sm">Jorpati, Kathmandu, Nepal</p>
            </button>
          </div>

          {/* Phone */}
          <div className="bg-blue-800 text-white p-6 rounded-lg hover:text-[#fcfff9] transition-colors">
            <a
              href="tel:9808181796"
              className="flex flex-col sm:items-start sm:text-left items-center text-center w-full focus:outline-none"
            >
              <FaPhoneAlt className="text-[#fcfff9] text-3xl mb-2" />
              <span className="text-lg font-semibold mb-1">Call for an Appointment</span>
              <p className="text-sm text-[#6dc5f1] hover:text-[#fcfff9] transition-colors">
                +977-9808181796
              </p>
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#375bc7] text-white p-6 rounded-lg hover:text-[#fcfff9] transition-colors">
            <a
              href="mailto:aarogyaskinclinic@gmail.com"
              className="flex flex-col sm:items-start sm:text-left items-center text-center w-full focus:outline-none"
            >
              <FaEnvelope className="text-[#fcfff9] text-3xl mb-2" />
              <span className="text-lg font-semibold mb-1">Send an Email</span>
              <p className="text-sm text-[#6dc5f1] hover:text-[#fcfff9] transition-colors">
                aarogyaskinclinic@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-gray-400 pt-10">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#1b2565] mb-3">About Us</h3>
            <p className="mb-3">
              At HealthCare Pro, we are dedicated to improving patient lives
              with high-quality care.
            </p>
            <p className="flex justify-center sm:justify-start items-center mb-1">
              <FaMapMarkerAlt className="text-[#1b2565] mr-2" />
              Jorpati, Kathmandu, Nepal
            </p>
            <p className="flex justify-center sm:justify-start items-center mb-1">
              <FaPhoneAlt className="text-[#1b2565] mr-2" />
              +977-9808181796
            </p>
            <p className="flex justify-center sm:justify-start items-center">
              <FaEnvelope className="text-[#1b2565] mr-2" />
              aarogyaskinclinic@gmail.com
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#1b2565] mb-3">
              Additional Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", icon: <IoMdPricetag />, path: "/about" },
                { label: "Doctors", icon: <FaRegFileAlt />, path: "/doctors" },
                { label: "Blog", icon: <FaRegFileAlt />, path: "/blog" },
                { label: "Medical Care", icon: <FaRegFileAlt />, path: "/medical-care" },
                { label: "Pricing", icon: <FaRegFileAlt />, path: "/pricing" },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => router.push(item.path)}
                    className="flex justify-center sm:justify-start items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors"
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#1b2565] mb-3">
              Latest Posts
            </h3>
            <ul className="space-y-2">
              {[
                {
                  title: "Many doctors use AI to diagnose kids faster",
                  slug: "/blog/ai-diagnosis",
                },
                {
                  title: "Rising diabetes cases increase health concerns",
                  slug: "/blog/diabetes",
                },
                {
                  title: "Can breakfast improve nutrition?",
                  slug: "/blog/nutrition",
                },
              ].map((post, i) => (
                <li key={i}>
                  <button
                    onClick={() => router.push(post.slug)}
                    className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors"
                  >
                    {post.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-center">
          <span className="text-[#1b2565] mb-4 sm:mb-0">
            © 2025 Aarogya Well Care Clinic. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
            {[
              { label: "Privacy", path: "/privacy" },
              { label: "Terms", path: "/terms" },
              { label: "Sitemap", path: "/sitemap" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => router.push(item.path)}
                className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors"
              >
                <MdOutlinePrivacyTip className="mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
