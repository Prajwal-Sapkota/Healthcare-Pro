"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("doctors");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-blue-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h1>

          {/* Hero Section */}
          <div className="relative w-full h-[300px] mb-12 rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-6 rounded-lg">
                <p className="text-xl mb-4 text-gray-700 text-justify">
                  Arogya Well Care Polyclinic is an initiative launched by a team of local doctors and professionals from various specialties and backgrounds driven by a sense of responsibility to enhance cancer care accessibility and quality  along with other associated health services within the community. Key focus areas include early detection, diagnosis, and treatment, with an emphasis on community outreach and education. The initiative aims to reduce cancer-related morbidity and mortality rates, improve patient outcomes, and alleviate the burden of cancer on individuals and families in the region. Success will be measured by increased screening rates, earlier stage diagnoses, improved treatment adherence, and enhanced patient satisfaction.
                </p>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                Health screening, care and cure in PPP model
              </p>
              
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-4">
                To set up newer approaches in healthcare involving community
              </p>
             
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-8">
              {[
                { title: "A", desc: "Accessibility" },
                { title: "R", desc: "Respect" },
                { title: "O", desc: "Optimism" },
                { title: "G", desc: "Gratitude" },
                { title: "Y", desc: "You-first" },
                { title: "A", desc: "Accountability" },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-4 rounded-lg shadow-lg w-full h-auto sm:h-20 sm:w-96 mx-auto"
                >
                  <h3 className="text-xl sm:text-base font-bold mb-2 text-gray-700 text-center">
                    {val.title}
                  </h3>
                  <p className="text-gray-700 text-center text-sm sm:text-xs">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-1 text-center text-gray-700">Our Objective</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <ul className="space-y-4 text-gray-700 ">
                {[
                  {
                    title: "To offer comprehensive care leveraging technology, engaging community, and thus by ensuring patient centered service",
                    
                  },
                  
                ].map((obj, idx) => (
                  <p key={idx} className="flex items-start">
                    
                    <div>
                      <h3 className="text-lg">{obj.title}</h3>
                      
                    </div>
                  </p>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700 ">Our Team</h2>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {["doctors", "nurses", "staff"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300 
                    ${
                      activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                >
                  {tab === "doctors"
                    ? "Doctors"
                    : tab === "nurses"
                    ? "Nurses"
                    : "Support Staff"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(activeTab === "doctors"
                ? doctors
                : activeTab === "nurses"
                ? nurses
                : staff
              ).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TeamMemberCard({ member }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ${
        expanded ? "max-h-[1000px]" : "max-h-[400px]"
      }`}
    >
      <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="relative h-64 w-full">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-blue-900">{member.name}</h3>
          <p className="text-gray-700 font-medium mb-2">{member.role}</p>
          <p className="text-gray-700 text-sm">{member.bio}</p>

          {expanded && (
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <p><strong>Experience:</strong> {member.experience}</p>
              <p><strong>Education:</strong> {member.education}</p>
              <p><strong>Specialty:</strong> {member.specialty}</p>
              <p><strong>Contact:</strong> {member.contact}</p>
            </div>
          )}

          <p className="mt-2 text-blue-600 text-sm underline">
            {expanded ? "Hide details" : "View more"}
          </p>
        </div>
      </div>
    </div>
  );
}

const doctors = [
  {
    id: 1,
    name: "Dr. Rajeeb Kumar Deo",
    role: "Senior Oncologist",
    bio: "Leading our medical team with compassion and precision.",
    image: "/images/doctor1.png",
    experience: "20+ years as a clinician",
    education: "MBBS, AFMC, Pune MD (Internal Medicine), BPKIHS, Dharan Fellowship in Medical Oncology, RGCI, Delhi Diploma Aerospace Medicine, USAFSAM, USA Professional Diploma in Clinical Research",
    specialty: "Oncology",
    contact: "rajeebdeo@yahoo.com",
  },
  {
    id: 2,
    name: "Dr. Santosh Gautam",
    role: "Internal Medicine",
    bio: "Specializes in all common medical conditions.",
    image: "/images/doctor3.jpg",
    experience: "10+ years in cardiology",
    education: "MBBS/MD, KIST Medical College",
    specialty: "General Physician",
    contact: "aarogyaskinclinic@gmail.com",
  },
  {
    id: 3,
    name: "Dr. Uttam Lamichhane",
    role: "General Practice",
    bio: "Specilaizes in General Practice",
    image: "/placeholder.svg?height=400&width=300",
    experience: "10+ years in General Practice",
    education: "MBBS Nepal Medical College, MD NAMS",
    specialty: "General Practice",
    contact: "aarogyaskinclinic@gmail.com",
  },
  {
    id: 4,
    name: "Dr. Nirmal Ghimire ",
    role: "Cardiologist",
    bio: "Specializes in cardiovascular treatments and diagnostics.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "10+ years in cardiology",
    education: "",
    specialty: "Heart Disease, Hypertension",
    contact: "aarogyaskinclinic@gmail.com",
  },
  {
    id: 5,
    name: "Dr. Mark Patel",
    role: "Cardiologist",
    bio: "Specializes in cardiovascular treatments and diagnostics.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "10+ years in cardiology",
    education: "Johns Hopkins University",
    specialty: "Heart Disease, Hypertension",
    contact: "mark.patel@clinic.com",
  },
  {
    id: 6,
    name: "Dr. Mark Patel",
    role: "Cardiologist",
    bio: "Specializes in cardiovascular treatments and diagnostics.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "10+ years in cardiology",
    education: "Johns Hopkins University",
    specialty: "Heart Disease, Hypertension",
    contact: "mark.patel@clinic.com",
  },
];

const nurses = [
  {
    id: 7,
    name: "Nurse Robert Kim",
    role: "Head Nurse",
    bio: "Ensures every patient receives quality care.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "12 years in clinical nursing",
    education: "NYU Nursing School",
    specialty: "Patient Care, Pediatrics",
    contact: "robert.kim@clinic.com",
  },
  {
    id: 8,
    name: "Nurse Emily Rose",
    role: "Pediatric Nurse",
    bio: "Focused on the health and well-being of children.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "8 years in pediatric nursing",
    education: "Boston College of Nursing",
    specialty: "Child Care, Immunizations",
    contact: "emily.rose@clinic.com",
  },
];

const staff = [
  {
    id: 9,
    name: "Jessica Williams",
    role: "Clinic Administrator",
    bio: "Ensures the clinic operates smoothly day-to-day.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "7 years in healthcare management",
    education: "MBA in Healthcare",
    specialty: "Operations, Staff Coordination",
    contact: "jessica.williams@clinic.com",
  },
  {
    id: 10,
    name: "Michael Lee",
    role: "Front Desk Executive",
    bio: "First point of contact for all patients.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "5 years in reception & patient support",
    education: "Diploma in Administration",
    specialty: "Scheduling, Patient Relations",
    contact: "michael.lee@clinic.com",
  },
];
