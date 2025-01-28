import React from "react";
import { FaHospital, FaDna, FaUsers, FaFlask } from "react-icons/fa";

export const Stats = () => {
  const stats = [
    { icon: <FaHospital />, value: "20,537", label: "Hospitalizations" },
    { icon: <FaDna />, value: "16,205", label: "Ambulatory Cases" },
    { icon: <FaUsers />, value: "10,852", label: "Employed Doctors" },
    { icon: <FaFlask />, value: "12,460", label: "Laboratory Tests" },
  ];

  return (
    <section
      className="bg-[#fcfff9] py-36 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4"
          >
            <div className="text-[#375bc7] text-4xl">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#1b2565]">{stat.value}</h3>
            <p className="text-[#375bc7]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
