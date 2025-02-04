"use client";
import { useState, useEffect } from "react";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState([]);

  useEffect(() => {
    async function fetchFAQs() {
      console.log("Fetching FAQ");
      try {
        const response = await fetch("https://admin.msmvideo.com/api/v2/help");
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();
        console.log("Full API Response:", data);

        const gettingStartedCategory = data.find((category) => category.name === "Getting Started");

        if (gettingStartedCategory && gettingStartedCategory.posts) {
        const shuffledPosts = shuffleArray(gettingStartedCategory.posts);
          
          setFaqs(shuffledPosts.slice(0, 4));
        } else {
          console.warn("No posts found for 'Getting Started' category");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {

    setOpenIndex((prevIndex) =>
      prevIndex.includes(index) ? prevIndex.filter((i) => i !== index) : [...prevIndex, index],
    )
   
  };
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };


  if (loading) return <p className="text-center text-gray-500">Loading FAQs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-[#fcfff9] text-[#1b2565] min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1b2565] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.length === 0 ? (
            <p className="text-center text-gray-500">No FAQs available.</p>
          ) : (
            faqs.map((faq, index) => {
              // console.log("FAQ Object:", faq); 
              return (
                <div
                  key={faq.id}
                  className="border border-[#375bc7] rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left flex justify-between items-center py-3 px-4 bg-blue-300 text-gray-800 rounded-t-lg hover:bg-[#6dc5f1] transition duration-300"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex.includes(index)}
                  >
                    <span className="font-medium">{faq.name}</span>
                    {openIndex.includes(index) ? (
                      <FaChevronUp className="text-lg" />
                    ) : (
                      <FaChevronDown className="text-lg" />
                    )}
                  </button>
                  {openIndex.includes(index) && (
                    <div className="p-4 bg-white text-[#1b2565] border-t border-gray-300">
                      {faq.content}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
