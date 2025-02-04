"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
export const Welcome = () => {
  return (
    <section className="bg-[#fcfff9] py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="relative flex justify-center md:justify-end w-full ml-[-5%] sm:ml-[-15%] lg:ml-[-15%] mt-[-5%] md:mt-[-10%] lg:mt-[-5%] mb-[5%]">
          <Image
            src="/images/doctor1.jpg"
            alt="Doctor"
            width={500}
            height={300}
            className="w-[90%] sm:w-[75%] md:w-[80%] lg:w-[80%] xl:w-[75%] shadow-lg rounded-lg"
          />
          
          <Image
            src="/images/doctor2.jpg"
            alt="Doctor"
            width={300}
            height={200}
            className="absolute bottom-[-20%] right-[-5%] w-[60%] sm:w-[50%] md:w-[55%] lg:w-[50%] xl:w-[50%] shadow-lg rounded-lg"
          />
        </div>
      


        <div className="space-y-6 lg:w-[80%] xl:w-[75%]">
          <h4 className="text-3xl text-[#375bc7] font-medium text-center md:text-left">
            Welcome to Healthcare Pro
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2565] leading-snug text-center md:text-left">
            Healthcare Pro holds the privilege of being the first choice hospital
          </h2>
          <p className="text-[#375bc7] leading-relaxed text-center md:text-left">
            Since its founding, we have become an integral part of the community,
            advancing our mission of providing compassionate care. Today, patients
            find care that combines world-class medicine with compassion.
          </p>
          <div className="flex items-start space-x-2 justify-center md:justify-start">
            <FaCheckCircle className="text-[#375bc7] text-5xl" />
            <p className="text-[#1b2565]">
              Healthcare Pro is a people-centered environment — we prioritize your
              care and every decision we make is centered around you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
