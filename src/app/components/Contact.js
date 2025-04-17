"use client"; 

import { useRouter } from 'next/navigation';  
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export function Contact() {
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push("/contact#Form"); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#fcfff9]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
            <h3 className="text-red-700 text-2xl sm:text-3xl font-bold mb-4">In Case of Emergency Call</h3>
            <p className="text-[#375bc7] text-xl sm:text-2xl mb-4">
              <a href="tel:9808181796" className="font-bold text-[#1b2565] hover:text-[#375bc7] transition inline-flex items-center gap-2">
                <FaPhone className="h-5 w-5" /> +977-9808181796
              </a>
            </p>
            <p className="text-gray-600 mb-6">Please remember we care about your privacy.</p>
            <button
              onClick={handleNavigateToContact} 
              className="inline-flex items-center px-6 py-3 bg-[#375bc7] text-white rounded-md hover:bg-[#6dc5f1] transition-colors"
            >
              OR SEND US A MESSAGE →
            </button>
          </div>
          <div className="relative rounded-lg overflow-hidden flex flex-col h-full">
            <Image
              src="/images/map.jpeg"
              alt="Location"
              width={1200}
              height={800}
              className="object-cover w-full h-64 sm:h-80 md:h-[400px]"
            />
            <div className="absolute inset-0 bg-[#1b2565]/80 p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Kathmandu</h3>
              <p className="mb-6 text-lg sm:text-xl">Nepal</p>
              <p className="mb-8 text-base sm:text-lg">Check duty hours of doctors in our timetable.</p>
              <Link
                href="/doctorstimetable"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#1b2565] transition-colors"
              >
                GO TO TIMETABLE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
