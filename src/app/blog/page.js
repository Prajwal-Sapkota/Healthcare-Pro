"use client";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "5 Daily Habits to Improve Heart Health",
    excerpt: "Discover simple daily routines that can help you keep your heart strong and healthy...",
    date: "April 10, 2025",
    author: "Dr. Aayush Karki",
    image: "/images/download (7).jpg",
    slug: "daily-heart-health-habits",
  },
  {
    id: 2,
    title: "Understanding Preventive Healthcare in 2025",
    excerpt: "Preventive care is more important than ever. Learn how early detection saves lives...",
    date: "March 28, 2025",
    author: "Dr. Meena Thapa",
    image: "/images/blog2.jpg",
    slug: "preventive-healthcare-2025",
  },
  {
    id: 3,
    title: "The Role of Nutrition in Disease Prevention",
    excerpt: "A balanced diet is not just good for energy – it's the foundation of preventive care...",
    date: "March 15, 2025",
    author: "Dietitian Ramesh Shrestha",
    image: "/images/blog3.jpg",
    slug: "nutrition-in-disease-prevention",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#fcfff9] py-20 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1b2565] mb-12">
        Aarogya Health Blog
      </h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row items-start gap-6 border-b pb-10 border-gray-300"
          >
            <div className="relative w-full md:w-1/3 h-64 md:h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">{blog.date} • {blog.author}</p>
              <h2 className="text-2xl font-semibold text-[#1b2565] mt-2">
                <Link href={`/blog/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </Link>
              </h2>
              <p className="mt-3 text-gray-700">{blog.excerpt}</p>
              <Link href={`/blog/${blog.slug}`}>
                <span className="text-blue-600 mt-4 inline-block hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
