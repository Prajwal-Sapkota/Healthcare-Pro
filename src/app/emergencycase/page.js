"use client";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import React Icons

export default function EmergencyCase() {
  return (
    <div className="min-h-screen bg-[#fcfff9] text-[#1b2565] p-6 sm:p-12 lg:p-16 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#1b2565] mb-6 text-center">
          Emergency Case
        </h1>
        <p className="text-lg sm:text-xl text-center mb-6">
          If you need a doctor urgently outside of opening hours, call emergency
          appointments.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#375bc7]">
            Emergency Contact
          </h2>

          <p className="text-lg sm:text-xl mt-2">
            
            <Link href="tel:9808181796" className="font-bold text-[#1b2565] hover:text-[#375bc7] transition inline-flex items-center gap-2">
              <FaPhone className="h-5 w-5" /> +977-9808181796
            </Link>
          </p>

          <p className="text-lg sm:text-xl">
            
            <Link href="mailto:aarogyaskinclinic@gmail.com" className="font-bold text-[#1b2565] hover:text-[#375bc7] transition inline-flex items-center gap-2">
              <FaEnvelope className="h-5 w-5" />aarogyaskinclinic@gmail.com
            </Link>
          </p>

          <div className="flex justify-center mt-8">
            <Link href="/">
              <button className="px-6 py-3 bg-[#375bc7] text-white rounded-md hover:bg-[#6dc5f1] transition duration-300 text-lg sm:text-xl">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
