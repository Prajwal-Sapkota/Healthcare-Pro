"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import MediaModal from "./media-modal";

const imageSlides = [
  {
    id: 1,
    title: "कोलोनोस्कोपी के हो?",
    image: "/images/colonoscopy.jpg",
    shortDescription: "कोलोनोस्कोपी भनेको आन्द्राको तल्लो (कोलोन) र मलाशयको भित्री भाग हेर्न गरिने एक चिकित्सा प्रक्रिया हो।",
    fullDescription: `कोलोनोस्कोपी भनेको आन्द्राको तल्लो (कोलोन) र मलाशयको भित्री भाग हेर्न गरिने एक चिकित्सा प्रक्रिया हो। यस प्रक्रियामा एक लचिलो ट्युब (कोलोनोस्कोप) प्रयोग गरिन्छ, जसमा सानो क्यामेरा र प्रकाशको स्रोत जोडिएको हुन्छ।\n\nयो ट्युब गुदाबाट भित्र्याएर डाक्टरले कोलोनको अवस्था, जस्तै पोलिप (सानो मांसको ग्रोथ), सुन्निएको ठाउँ, अल्सर, वा क्यान्सर जस्ता समस्याहरू पत्ता लगाउँछन्।\n\nकोलोनोस्कोपी किन गरिन्छ?\n- क्यान्सरको जाँच र रोकथाम\n- पोलिप पत्ता लगाउन र हटाउन\n- रक्तस्राव वा दिसामा रगत देखिने कारण पत्ता लगाउन\n- पेटको दुखाई र दिसाको बानीमा आएको परिवर्तनको कारण पत्ता लगाउन`
  },
  {
    id: 2,
    title: "एन्डोस्कोपी के हो?",
    image: "/images/endoscopy.png",
    shortDescription: "एन्डोस्कोपी पेट र सानो आन्द्राको भित्री भाग हेर्न प्रयोग गरिने प्रक्रिया हो।",
    fullDescription: `एन्डोस्कोपी एउटा प्रक्रिया हो जसमा शरीरको भित्री अंगहरू हेर्न लचिलो ट्युब (एन्डोस्कोप) प्रयोग गरिन्छ, जसमा क्यामेरा र प्रकाश हुन्छ। सामान्यतः यसले घाँटी, इसोफागस, पेट र डुओडेनमको अवस्था मूल्याङ्कन गर्न मद्दत गर्छ।\n\nकिन गरिन्छ?\n- पाचन समस्या (ग्यास्ट्रिक, अल्सर)\n- पेट दुख्ने कारण पत्ता लगाउन\n- दिसामा रगत देखिएमा\n- ट्युमर वा संक्रमणको पहिचान गर्न`
  },
  {
    id: 3,
    title: "अल्ट्रासाउण्ड के हो?",
    image: "/images/ultrasound.png",
    shortDescription: "अल्ट्रासाउण्ड ध्वनि तरंगको माध्यमबाट शरीर भित्रको चित्र देखाउने प्रक्रिया हो।",
    fullDescription: `अल्ट्रासाउण्ड भनेको उच्च फ्रिक्वेन्सी ध्वनि तरंग प्रयोग गरेर शरीरको भित्री अंगहरूको प्रतिमा हेर्ने सुरक्षित र पीडारहित प्रक्रिया हो। प्रायः गर्भावस्थाको परीक्षण, पेटको अंगहरू, मुटु, किड्नी र अन्य अंगहरूको मूल्याङ्कन गर्न प्रयोग गरिन्छ।\n\nफाइदाहरू:\n- विकिरण प्रयोग हुँदैन\n- गर्भवती महिलाका लागि सुरक्षित\n- तत्काल परिणाम प्राप्त गर्न सकिने`
  },
  {
    id: 4,
    title: "ईसीजी (ECG) के हो?",
    image: "/images/ECG.png",
    shortDescription: "ईसीजी मुटुको विद्युत गतिविधिको रेकर्ड हो, जुन मुटुको स्वास्थ्य जाँच्न प्रयोग गरिन्छ।",
    fullDescription: `ECG (Electrocardiogram) एउटा परीक्षण हो जसले मुटु कसरी काम गरिरहेको छ भनेर मूल्याङ्कन गर्छ। यसले मुटुको धडकन, गति, र कुनै असमानतालाई देखाउँछ।\n\nECG किन आवश्यक?\n- छाती दुखेको कारण पत्ता लगाउन\n- मुटुको धड्कन असमान भएमा\n- मुटुको दौड (heart attack) को पुष्टि गर्न\n- मुटुको नियमित स्वास्थ्य परीक्षणका लागि`
  },
  {
    id: 5,
    title: "इकोकार्डियोग्राफी के हो?",
    image: "/images/echo.png",
    shortDescription: "इकोकार्डियोग्राफी मुटुको ढाँचा र कार्यक्षमता मूल्याङ्कन गर्न प्रयोग गरिन्छ।",
    fullDescription: `इकोकार्डियोग्राफी (Echocardiography) एक प्रकारको अल्ट्रासाउण्ड हो जुन मुटुको बनावट, वाल्भ, र रक्त प्रवाह जाँच्न प्रयोग गरिन्छ। यसले मुटुको पम्पिंग क्षमता र समस्याहरू पत्ता लगाउन मद्दत गर्छ।\n\nइको किन गरिन्छ?\n- मुटुमा फुलावट, वाल्भको समस्या, वा हृदयघातपछि परीक्षण गर्न\n- जन्मजात मुटु रोग पत्ता लगाउन\n- हृदयको सामान्य कार्यक्षमता मूल्याङ्कन गर्न`
  }
];

const videos = [
  {
    id: 1,
    title: "Morning Exercise Routine",
    thumbnail: "/images/download (10).jpg",
    url: "https://www.youtube.com/watch?v=rc3ZDoheMQs",
    description: "A quick 10-minute morning exercise routine to start your day."
  },
  {
    id: 2,
    title: "Proper Posture Guide",
    thumbnail: "/placeholder.svg?height=400&width=600",
    url: "/images/v1.mp4",
    description: "Learn how to maintain proper posture throughout the day."
  }
];

export default function HealthTipsLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openImageModal = () => {
    setSelectedMedia({
      type: "image",
      title: imageSlides[currentSlide].title,
      description: imageSlides[currentSlide].fullDescription,
      source: imageSlides[currentSlide].image,
    });
    setModalOpen(true);
  };

  const openVideoModal = (video) => {
    setSelectedMedia({
      ...video,
      type: "video",
    });
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Slider Section */}
        <div className="lg:w-1/2 relative">
          <h2 className="text-2xl font-semibold mb-6 text-black">Health Tips</h2>

          <div
            className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer"
            onClick={openImageModal}
          >
            <Image
              src={imageSlides[currentSlide].image}
              alt={imageSlides[currentSlide].title}
              fill
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{imageSlides[currentSlide].title}</h3>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>

          <div className="mt-4 bg-white rounded-lg p-6 shadow-lg">
            {/* <h2 className="text-2xl font-semibold mb-2">{imageSlides[currentSlide].title}</h2> */}
            <div className="text-gray-600 mb-4">
              {imageSlides[currentSlide].shortDescription}
            </div>
            <button
              onClick={openImageModal}
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Read More
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {imageSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-black">Health Videos</h2>
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={() => openVideoModal(video)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30">
                    <div className="bg-white rounded-full p-3">
                      <FaPlay className="text-primary h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-black">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Modal */}
      <MediaModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedMedia(null);
        }}
        media={selectedMedia}
      />
    </>
  );
}
