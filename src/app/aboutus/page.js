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
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Clinic team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center">
              <div className="p-8 max-w-md">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Caring for Your Health Since 2005
                </h2>
                <p className="text-white/90">
                  Providing exceptional healthcare services with compassion and
                  expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                To provide exceptional healthcare services that improve the
                quality of life for our patients through compassionate care,
                innovative treatments, and a commitment to excellence.
              </p>
              <p className="text-gray-700">
                We strive to make healthcare accessible to all members of our
                community, ensuring that each patient receives personalized
                attention and the highest standard of medical care.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-4">
                To be the leading healthcare provider in our region, recognized
                for clinical excellence, patient-centered care, and innovative
                health solutions.
              </p>
              <p className="text-gray-700">
                We envision a community where optimal health and wellness are
                achievable for everyone through preventive care, education, and
                cutting-edge medical practices.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Excellence",
                  desc: "We are committed to delivering the highest quality of care and continuously improving our services.",
                },
                {
                  title: "Compassion",
                  desc: "We treat each patient with kindness, empathy, and respect, recognizing their unique needs.",
                },
                {
                  title: "Integrity",
                  desc: "We uphold the highest ethical standards and are transparent in all our interactions.",
                },
                {
                  title: "Innovation",
                  desc: "We embrace new technologies and approaches to enhance patient care and outcomes.",
                },
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-gray-700">
                    {val.title}
                  </h3>
                  <p className="text-gray-700">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Our Objectives</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <ul className="space-y-4 text-gray-700">
                {[
                  {
                    title: "Provide Patient-Centered Care",
                    desc: "Deliver healthcare services that respect patient preferences, needs, and values.",
                  },
                  {
                    title: "Promote Preventive Healthcare",
                    desc: "Focus on preventive measures and early intervention to reduce the incidence of disease.",
                  },
                  {
                    title: "Ensure Accessibility",
                    desc: "Make healthcare services accessible to all regardless of socioeconomic status or location.",
                  },
                  {
                    title: "Foster Continuous Improvement",
                    desc: "Continuously evaluate and improve our services and processes.",
                  },
                ].map((obj, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-blue-600/10 p-2 rounded-full mr-4 mt-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{obj.title}</h3>
                      <p className="text-gray-700">{obj.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Our Team</h2>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    bio: "Leading our medical team with compassion and precision.",
    image: "/images/team1.jpeg",
    experience: "15+ years in family medicine",
    education: "Harvard Medical School",
    specialty: "Family Medicine, Chronic Illness",
    contact: "sarah.johnson@clinic.com",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
