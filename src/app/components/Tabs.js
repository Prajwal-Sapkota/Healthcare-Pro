"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the ArrowRight icon

export function Tabs() {
  const [activeTab, setActiveTab] = useState("history");

  const tabs = [
    { id: "history", label: "Our History" },
    { id: "technology", label: "Technology" },
    { id: "benefits", label: "The Benefits" },
  ];

  return (
    <div className="w-full bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center border-b-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "history" && (
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src="/images/carenrelief.jpeg"
                  alt="Care and Relief"
                  className="w-60 h-60 object-cover rounded-lg" // Adjust size as needed
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">Care and Relief</h2>
                <div className="text-gray-600 leading-10">
                  No appointment needed, most patients are seen, treated, and released in about 60 minutes. Certified and
                  experienced MD physicians, not nurses, and on-site diagnostic tests with lab.
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    LEARN MORE
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-black rounded hover:border-blue-500 hover:text-blue-500 transition-colors">
                    TIMETABLE
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "technology" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Technology</h2>
              <p className="text-gray-600 mt-2">
                This is the content for the "Technology" tab.
              </p>
            </div>
          )}
          {activeTab === "benefits" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">The Benefits</h2>
              <p className="text-gray-600 mt-2">
                This is the content for the "The Benefits" tab.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
