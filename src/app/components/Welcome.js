"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
export const Welcome = () => {
  return (
    <section className="bg-[#fcfff9] py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="relative flex justify-center md:justify-end w-full ml-[-5%] sm:ml-[-15%] lg:ml-[-15%] mt-[-5%] md:mt-[-10%] lg:mt-[-5%] mb-[5%] filter brightness-75">
          <Image
            src="/images/images (5).jpg"
            alt="Doctor"
            width={500}
            height={300}
            className="w-[90%] sm:w-[75%] md:w-[80%] lg:w-[80%] xl:w-[75%] shadow-lg rounded-lg"
          />
          
          <Image
            src="/images/images (4).jpg"
            alt="Doctor"
            width={300}
            height={200}
            className="absolute bottom-[-20%] right-[-5%] lg:right-[-15%] w-[60%] sm:w-[50%] md:w-[55%] lg:w-[50%] xl:w-[50%] shadow-lg rounded-lg filter brightness-100"
          />
        </div>
      


        <div className="space-y-6 lg:w-[80%] xl:w-[75%]">
          <h4 className="text-3xl text-[#375bc7] font-medium text-center md:text-left mt-2">
            Welcome to Aarogya Well Care Polyclinic
          </h4>
          <h2 className="text-xl sm:text-xl text-black leading-snug text-center md:text-left">
          Aarogya Well Care Polyclinic was founded by a team of dedicated local doctors to improve access to quality cancer care and associated health services. We focus on early detection, diagnosis, and treatment while reaching out to the community through education and support.
          </h2>
         
          <div className="flex items-start space-x-2 justify-center md:justify-start">
            <p className="text-xl text-black">
            At Aarogya, every step is guided by compassion and a commitment to better health outcomes for individuals and families in our region.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
