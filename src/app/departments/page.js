import Link from "next/link";
import Image from "next/image";
import { FaHeartbeat, FaBrain, FaBone, FaBaby, FaAllergies, FaDisease } from "react-icons/fa";

export default function Departments() {
  const departments = [
    {
      name: "Cardiology",
      link: "/departments/cardiology",
      icon: <FaHeartbeat className="text-red-500" />,
      image:"/images/download (3).jpg",
      description: "Expert care for your heart health",
    },
    
    {
      name: "ENT",
      link: "/departments/ent",
      icon: <FaBone className="text-green-500" />,
      image:"/images/download (4).jpg",
      description: "Comprehensive care for your bones and joints",
    },
    {
      name: "Urology",
      link: "/departments/urology",
      icon: <FaBaby className="text-yellow-500" />,
      image: "/images/download (5).jpg",
      description: "Dedicated care for children of all ages",
    },
    {
      name: "Dermatology",
      link: "/departments/dermatology",
      icon: <FaAllergies className="text-purple-500" />,
      image:"/images/download (6).jpg",
      description: "Expert skincare and dermatological treatments",
    },
    {
      name: "Oncology",
      link: "/departments/oncology",
      icon: <FaDisease className="text-pink-500" />,
      image:"/images/download (8).jpg",
      description: "Comprehensive cancer care and treatment",
    },
    {
      name: "General Practise",
      link: "/departments/generalpractise",
      icon: <FaBrain className="text-blue-500" />,
      image:"/images/download (7).jpg",
      description: "Specialized treatment for neurological disorders",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Departments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Link key={index} href={dept.link} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform group-hover:scale-105">
                <div className="relative h-48">
                  <Image src={dept.image} alt={dept.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-blue-600">
                    {dept.icon} {dept.name}
                  </h2>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
