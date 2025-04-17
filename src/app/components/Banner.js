"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      image: "/images/banner1.jpg",
      heading: "सर्वे सन्तु निरामयाः",
      subheading: "For healthcare professionals and institutions.",
    },
    {
      image: "/images/banner2.jpg",
      heading: "Together for your Care",
      subheading: "Empowering the future of healthcare.",
    },
    
    {
      image: "/images/banner1.jpg",
      heading: "आपदां अपहर्ता, आरोग्यस्य दाता।",
      subheading: "Empowering the future of healthcare.",
    },
    {
      image: "/images/banner3.jpg",
      heading: "Driven by Responsibility",
      subheading: "Providing quality healthcare tools worldwide.",
    },
    {
      image: "/images/banner2.jpg",
      heading: "रोगान् शेषान् पहसि तुष्टा",
      subheading: "Providing quality healthcare tools worldwide.",
    },
    {
      image: "/images/banner3.jpg",
      heading: "You are our friend, not patient.",
      subheading: "Providing quality healthcare tools worldwide.",
    },
    
    {
      image: "/images/banner3.jpg",
      heading: "स्वस्थस्य स्वास्थ्यरक्षणं, आतुरस्य विकारप्रशमनं।",
      subheading: "Providing quality healthcare tools worldwide.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority 
          />
          <div className="absolute inset-0 bg-[#1b2565]/80 flex flex-col justify-center items-center text-[#fcfff9] text-center px-4 sm:px-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {slide.heading}
            </h2>
            {/* <p className="text-sm sm:text-lg md:text-xl mt-2 sm:mt-4">
              {slide.subheading}
            </p> */}
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide
                ? "bg-[#375bc7]"
                : "bg-[#6dc5f1] hover:bg-[#375bc7]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
