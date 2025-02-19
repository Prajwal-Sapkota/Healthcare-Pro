"use client";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gray-200 text-gray-800 py-10">
      <div className="container mx-auto px-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 mb-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start bg-blue-400 text-white p-6 hover:text-[#fcfff9] transition-colors duration-300">
            <FaMapMarkerAlt className="text-[#fcfff9] text-2xl mb-2" />
            <button onClick={() => router.push("/contact/#mapSection")} className="text-lg font-semibold mb-2">
              Find Us On Map
            </button>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="flex flex-col items-center sm:items-start bg-blue-800 text-white p-6 hover:text-[#fcfff9] transition-colors duration-300">
            <FaPhoneAlt className="text-[#fcfff9] text-2xl mb-2" />
            <a href="tel:1234567890" className="text-lg font-semibold mb-2">
              Call for an Appointment
            </a>
            <p className="text-[#6dc5f1] hover:text-[#fcfff9] transition-colors duration-300">
              1234567890
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start bg-[#375bc7] text-white p-6 hover:text-[#fcfff9] transition-colors duration-300">
            <FaEnvelope className="text-[#fcfff9] text-2xl mb-2" />
            <a href="mailto:contact@healthcarepro.com" className="text-lg font-semibold mb-2">
              Send an Email
            </a>
            <p className="text-[#6dc5f1] hover:text-[#fcfff9] transition-colors duration-300">
              contact@healthcarepro.com
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-400 pt-6">
          
          <div>
            <h3 className="text-lg font-semibold text-[#1b2565] mb-2">About Us</h3>
            <p>At HealthCare Pro, we are dedicated to improving patient lives with high-quality care.</p>
            <p className="mt-2 flex items-center">
              <FaMapMarkerAlt className="text-[#1b2565] mr-2" /> Kathmandu, Nepal
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-[#1b2565] mr-2" /> 1234567890
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-[#1b2565] mr-2" /> contact@healthcarepro.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1b2565] mb-2">Additional Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => router.push("/about")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  <IoMdPricetag className="mr-2" /> About
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/doctors")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  <FaRegFileAlt className="mr-2" /> Doctors
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/blog")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  <FaRegFileAlt className="mr-2" /> Blog
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/medical-care")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  <FaRegFileAlt className="mr-2" /> Medical Care
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/pricing")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  <FaRegFileAlt className="mr-2" /> Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1b2565] mb-2">Latest Posts</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => router.push("/blog/ai-diagnosis")} className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  Many doctors use AI to diagnose kids faster
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/blog/diabetes")} className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  Rising diabetes cases increase health concerns
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/blog/nutrition")} className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
                  Can breakfast improve nutrition?
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
          <div className="mb-4 sm:mb-0 sm:text-left">
            <span className="text-[#1b2565]">© 2024 HealthCare Pro. All rights reserved.</span>
          </div>

          <div className="flex flex-row space-x-6 text-center">
            <button onClick={() => router.push("/privacy")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
              <MdOutlinePrivacyTip className="mr-2" /> Privacy
            </button>
            <button onClick={() => router.push("/terms")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
              <MdOutlinePrivacyTip className="mr-2" /> Terms
            </button>
            <button onClick={() => router.push("/sitemap")} className="flex items-center text-[#375bc7] hover:text-[#6dc5f1] transition-colors">
              <MdOutlinePrivacyTip className="mr-2" /> Sitemap
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
