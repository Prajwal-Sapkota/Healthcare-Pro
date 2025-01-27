"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Welcome = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative order-first md:order-none">
          <img
            src="/images/doctor1.jpeg"
            alt="Doctor"
            className="w-full sm:w-[80%] md:w-[100%] lg:w-[60%] mx-auto shadow-lg z-10"
          />
          <img
            src="/images/doctor2.jpeg"
            alt="Doctor"
            className="w-[50%] sm:w-[80%] md:w-[70%] lg:w-[40%] absolute bottom-4 right-4 sm:bottom-[-10px] sm:right-[10%] md:right-[0%] lg:right-[5%] shadow-lg z-20"
          />
        </div>

        <div className="space-y-6">
          <h4 className="text-blue-500 font-medium text-center md:text-left">
            Welcome to Healthcare Pro
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug text-center md:text-left">
            Healthcare Pro holds the privilege of being the first choice hospital
          </h2>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            Since its founding, we have become an integral part of the community,
            advancing our mission of providing compassionate care. Today, patients
            find care that combines world-class medicine with compassion.
          </p>
          <div className="flex items-start space-x-2 justify-center md:justify-start">
            <FaCheckCircle className="text-blue-500 text-xl" />
            <p className="text-gray-600">
              Healthcare Pro is a people-centered environment — we prioritize your
              care and every decision we make is centered around you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
