"use client";
import { useState } from "react";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

export default function Pages() {
  const services = [
    {
      name: "Colonoscopy",
      details: {
        what: "Colonoscopy is a procedure used to examine the inner lining of the large intestine (colon and rectum). It helps detect ulcers, polyps, tumors, and areas of inflammation or bleeding.",
        who: "Performed by a certified gastroenterologist or trained specialist.",
        prep: "You may need to follow a special diet, take a laxative, or fast before the procedure to clean out your colon.",
      },
    },
    {
      name: "Endoscopy",
      details: {
        what: "Endoscopy is a non-surgical procedure used to examine a person's digestive tract using an endoscope.",
        who: "Performed by a gastroenterologist or an experienced endoscopy nurse under supervision.",
        prep: "Fasting for 6–8 hours before the procedure is typically required.",
      },
    },
    {
      name: "Ultrasound",
      details: {
        what: "Ultrasound uses high-frequency sound waves to create images of organs and structures inside the body.",
        who: "Conducted by a certified radiologist or sonographer.",
        prep: "Preparation varies by type – for abdominal ultrasound, fasting may be needed; for pelvic, you may need a full bladder.",
      },
    },
    {
      name: "ECG",
      details: {
        what: "An Electrocardiogram (ECG) records the electrical activity of the heart to check for heart conditions.",
        who: "Usually performed by a nurse or technician, then interpreted by a doctor.",
        prep: "No specific preparation required; wear comfortable clothing for easy access to the chest.",
      },
    },
    {
      name: "Echocardiography",
      details: {
        what: "Echocardiography is an ultrasound of the heart to evaluate heart structure and function.",
        who: "Done by a trained echocardiographer or cardiologist.",
        prep: "No major preparation needed; sometimes mild fasting depending on type.",
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="bg-white max-w-6xl mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>

        <ul className="text-lg sm:text-xl text-black inline-block text-left space-y-6">
          {services.map((service, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center justify-between w-full max-w-md">
                <span>{service.name}</span>
                <button
                  onClick={() => toggleDetails(index)}
                  className="ml-4 text-blue-600 hover:text-blue-800 text-xl focus:outline-none"
                  aria-label="More Information"
                >
                  <FaInfoCircle />
                </button>
              </div>

              {openIndex === index && (
                <div className="mt-2 text-xl text-gray-700 space-y-2 max-w-md ml-4">
                  <div>
                    <strong>What is {service.name}?</strong>
                    <p>{service.details.what}</p>
                  </div>
                  <div>
                    <strong>Who will do it?</strong>
                    <p>{service.details.who}</p>
                  </div>
                  <div>
                    <strong>What are the special preparations?</strong>
                    <p>{service.details.prep}</p>
                  </div>
                  <div>
                    <strong>Other queries?</strong>
                    <p>
                      <Link href="/contact#Form" className="text-blue-500">
                        Contact Us
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
