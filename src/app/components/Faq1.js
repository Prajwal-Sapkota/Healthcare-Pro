"use client";
import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const response = await fetch("https://admin.msmvideo.com/api/v2/help");
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();

        const gettingStartedCategory = data.find(
          (category) => category.name === "Getting Started"
        );

        if (gettingStartedCategory && gettingStartedCategory.posts) {
          setFaqs(gettingStartedCategory.posts.slice(0, 3));
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
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <p className="text-center text-gray-500">Loading FAQs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="bg-[#fcfff9] text-[#1b2565] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1b2565] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-[#375bc7] rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-[#6dc5f1] text-[#1b2565] font-semibold text-left hover:bg-[#375bc7] hover:text-white transition-colors duration-300"
              >
                {faq.name}
                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-[#375bc7] border-t border-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: faq.content }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
