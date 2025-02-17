"use client"

import { notFound, useRouter} from "next/navigation"
import Image from "next/image"
import { HiArrowLeft } from "react-icons/hi"

const blogs = [
  {
    slug: "future-of-healthcare",
    title: "The Future of Healthcare",
    content: `
      Artificial Intelligence and advanced technologies are revolutionizing the healthcare industry. 
      AI is assisting doctors in diagnosing diseases more accurately, while robotic surgery is improving precision. 
      Wearable devices track patient health in real-time, reducing hospital visits.
      
      Some of the major breakthroughs in healthcare technology include:
      - AI-powered diagnostics improving accuracy
      - Telemedicine reducing the need for physical appointments
      - Personalized medicine using genetic data
      - Smart hospitals integrating IoT technology for better patient management

      As technology evolves, healthcare will become more efficient, cost-effective, and accessible for everyone.`,
    image: "/images/futurehealthcare.jpg",
    author: "Dr. Jane Smith",
    date: "May 15, 2024",
  },
  {
    slug: "healthy-lifestyle-tips",
    title: "Top 5 Healthy Lifestyle Tips",
    content: `
      Maintaining a healthy lifestyle is essential for a long and happy life. Here are five key habits that can help:

      1. **Stay Hydrated**: Drinking enough water helps keep your body functioning properly.
      2. **Exercise Regularly**: At least 30 minutes of daily activity improves cardiovascular health.
      3. **Eat a Balanced Diet**: Include fruits, vegetables, and lean proteins in your meals.
      4. **Get Enough Sleep**: Aim for 7-9 hours of quality sleep per night.
      5. **Manage Stress**: Practice meditation, yoga, or deep breathing exercises.

      By making these small changes, you can significantly improve your overall well-being.`,
    image: "/images/healthytips.jpg",
    author: "Dr. John Doe",
    date: "June 2, 2024",
  },
  {
    slug: "benefits-of-telemedicine",
    title: "Benefits of Telemedicine",
    content: `
      Telemedicine is revolutionizing the way healthcare is delivered. It allows patients to consult doctors remotely, reducing the need for in-person visits. Some key benefits include:

      - **Accessibility**: Patients in rural areas can receive expert medical advice.
      - **Cost Savings**: Reduces travel and hospital expenses.
      - **Convenience**: Appointments can be scheduled from the comfort of home.
      - **Better Monitoring**: Wearable devices enable continuous tracking of health metrics.

      As telemedicine continues to grow, it is expected to enhance patient care and improve health outcomes worldwide.`,
    image: "/images/telemedicine.jpg",
    author: "Dr. Emily Brown",
    date: "June 10, 2024",
  },
]

export default function BlogPost({ params }) {
  const router = useRouter()
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => router.push("/blog")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition mb-6"
        >
          <HiArrowLeft className="mr-2 text-xl" /> Back
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          By {blog.author} | {blog.date}
        </p>
        <div className="relative h-64 w-full mb-6">
          <Image src={blog.image} alt={blog.title} fill className="object-cover rounded-lg" />
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
      </div>
    </div>
  )
}
