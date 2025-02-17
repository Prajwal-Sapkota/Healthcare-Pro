"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"

export default function BlogPage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const blogs = [
    {
      slug: "future-of-healthcare",
      title: "The Future of Healthcare",
      shortDescription: "Exploring how AI and technology are transforming medical care.",
      fullDescription:"Artificial Intelligence and advanced technologies are revolutionizing the healthcare industry. From AI-assisted diagnoses to robot-assisted surgeries, the future of healthcare is here...",
      image: "/images/futurehealthcare.jpg",
      author: "Dr. Jane Smith",
      date: "May 15, 2024",
    },
    {
      slug: "healthy-lifestyle-tips",
      title: "Top 5 Healthy Lifestyle Tips",
      shortDescription: "Simple changes to improve your health and well-being.",
      fullDescription:"Maintaining a healthy lifestyle doesn't have to be complicated. Here are five simple yet effective tips to improve your overall well-being...",
      image: "/images/healthytips.jpg",
      author: "Dr. John Doe",
      date: "June 2, 2024",
    },
    {
      slug: "benefits-of-telemedicine",
      title: "Benefits of Telemedicine",
      shortDescription: "How virtual consultations are making healthcare accessible.",
      fullDescription:"Telemedicine has changed the way healthcare is delivered, making it easier for patients to receive medical advice remotely...",
      image: "/images/telemedicine.jpg",
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
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-4">
                      {expandedIndex === index ? blog.fullDescription : blog.shortDescription}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      {expandedIndex === index ? "See Less" : "See More"}
                    </button>

                    <Link href={`/blog/${blog.slug}`} className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Read Full Article <HiArrowRight className="ml-1 text-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
