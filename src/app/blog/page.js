

export default function BlogPage() {
  const blogs = [
    {
      title: "The Future of Healthcare",
      description: "Exploring how AI and technology are transforming medical care.",
    },
    {
      title: "Top 5 Healthy Lifestyle Tips",
      description: "Simple changes to improve your health and well-being.",
    },
    {
      title: "Benefits of Telemedicine",
      description: "How virtual consultations are making healthcare accessible.",
    },
  ];

  return (
    <div className="bg-white">
    
      <div className=" max-w-6xl mx-auto p-6">
        <h1 className="text-3xl text-gray-900 font-bold text-center mb-6">Latest Blogs</h1>
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div key={index} className="p-5 border rounded-lg shadow-md bg-gray-200 text-gray-800  hover:bg-blue-500 hover:text-white ">
              <h2 className="text-xl  font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
}
