"use client"

import { useState } from "react"
import Image from "next/image"

export default function BlogPage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const blogs = [
    {
      title: "The Future of Healthcare",
      shortDescription: "Exploring how AI and technology are transforming medical care.",
      fullDescription:"Artificial Intelligence and advanced technologies are revolutionizing the healthcare industry. From AI-assisted diagnoses to robot-assisted surgeries, the future of healthcare is here. This blog post delves into the latest technological advancements in medicine, discussing their potential impact on patient care, treatment efficacy, and overall healthcare delivery...",
      image: "/images/futurehealthcare.jpg",
      author: "Dr. Jane Smith",
      date: "May 15, 2024",
    },
    {
      title: "Top 5 Healthy Lifestyle Tips",
      shortDescription: "Simple changes to improve your health and well-being.",
      fullDescription:"Maintaining a healthy lifestyle doesn't have to be complicated. In this comprehensive guide, we'll walk you through five simple yet effective tips that can significantly improve your overall health and well-being. From staying hydrated and getting enough sleep to regular exercise and a balanced diet...",
      image: "/images/healthytips.jpg",
      author: "Dr. John Doe",
      date: "June 2, 2024",
    },
    {
      title: "Benefits of Telemedicine",
      shortDescription: "How virtual consultations are making healthcare accessible.",
      fullDescription:"Telemedicine has emerged as a game-changer in the healthcare industry. This blog explores the numerous benefits of telemedicine, from increased accessibility for patients in rural areas to reduced healthcare costs and improved patient outcomes. We'll discuss how virtual consultations work and the impact of digital healthcare...",
      image:"/images/telemedicine.jpg",
      author: "Dr. Emily Brown",
      date: "June 10, 2024",
    },
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Blogs</h1>
        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <div className="relative h-48 w-full md:w-48">
                    <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {expandedIndex === index ? blog.fullDescription : blog.shortDescription}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {expandedIndex === index ? "See Less " : "See More "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
