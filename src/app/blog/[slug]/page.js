import Image from "next/image";

const blogs = [
  {
    slug: "daily-heart-health-habits",
    title: "5 Daily Habits to Improve Heart Health",
    author: "Dr. Aayush Karki",
    date: "April 10, 2025",
    image: "/images/download (7).jpg",
    content: `
      Keeping your heart healthy doesn't have to be complicated. 
      Start with daily walks, drink more water, and include heart-friendly foods in your meals.
      
      💡 Avoid processed food and manage your stress with breathing exercises. 
      
      These simple habits lead to long-term benefits and reduced risk of heart disease.
    `,
  },
  {
    slug: "preventive-healthcare-2025",
    title: "Understanding Preventive Healthcare in 2025",
    author: "Dr. Meena Thapa",
    date: "March 28, 2025",
    image: "/images/blog2.jpg",
    content: `
      Preventive healthcare is all about early action. 
      Annual screenings, lifestyle awareness, and regular checkups can save lives.
      
      🚑 Our Aarogya initiative brings this care closer to your community.
    `,
  },
  {
    slug: "nutrition-in-disease-prevention",
    title: "The Role of Nutrition in Disease Prevention",
    author: "Dietitian Ramesh Shrestha",
    date: "March 15, 2025",
    image: "/images/blog3.jpg",
    content: `
      Nutrition plays a vital role in boosting immunity and preventing illness. 
      Focus on whole foods, hydrate well, and avoid excessive sugar/salt.
      
      🥦 Healthy eating is healthcare you control.
    `,
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return <div className="p-10 text-center text-red-500">Blog post not found.</div>;
  }

  return (
    <div className="bg-[#fcfff9] py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1b2565] mb-4">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-6">
          {post.date} • {post.author}
        </p>
        <div className="relative w-full h-80 mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
          {post.content.split("\n").map((para, index) => (
            <p key={index}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
