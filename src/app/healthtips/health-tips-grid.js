"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import MediaModal from "./media-modal"

const healthTipsMedia = [
  {
    id: 1,
    title:"कोलोनोस्कोपी के हो?",
    type: "image",
    thumbnail: "/images/colonoscopy.jpg",
    source: "/placeholder.svg?height=800&width=1200",
    description: "कोलोनोस्कोपी भनेको आन्द्राको तल्लो  (कोलोन) र मलाशयको भित्री भाग हेर्न गरिने एक चिकित्सा प्रक्रिया हो। यस प्रक्रियामा एक लचिलो ट्युब (कोलोनोस्कोप) प्रयोग गरिन्छ, जसमा सानो क्यामेरा र प्रकाशको स्रोत जोडिएको हुन्छ। यो ट्युब गुदाबाट भित्र्याएर डाक्टरले कोलोनको अवस्था, जस्तै पोलिप (सानो मांसको ग्रोथ), सुन्निएको ठाउँ, अल्सर, वा क्यान्सर जस्ता समस्याहरू पत्ता लगाउँछन्।  ",
  },
  {
    id: 2,
    title: "Morning Exercise Routine",
    type: "video",
    thumbnail: "/images/download (10).jpg",
    source: "https://www.youtube.com/watch?v=rc3ZDoheMQs",
    description: "A quick 10-minute morning exercise routine to start your day.",
  },
  {
    id: 3,
    title: "Stress Management Techniques",
    type: "image",
    thumbnail: "/placeholder.svg?height=400&width=600",
    source: "/placeholder.svg?height=800&width=1200",
    description: "Effective techniques to manage daily stress and anxiety.",
  },
  {
    id: 4,
    title: "Proper Posture Guide",
    type: "video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    source: "/images/v1.mp4",
    description: "Learn how to maintain proper posture throughout the day.",
  },
  {
    id: 5,
    title: "Hydration Importance",
    type: "image",
    thumbnail: "/placeholder.svg?height=400&width=600",
    source: "/placeholder.svg?height=800&width=1200",
    description: "Why staying hydrated is crucial for your overall health.",
  },
  {
    id: 6,
    title: "Sleep Improvement Tips",
    type: "image",
    thumbnail: "/images/background.jpg",
    source: "/images/background.jpg",
    description: "Tips to improve your sleep quality and duration. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export default function HealthTipsGrid() {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleMediaClick = (media) => {
    setSelectedMedia(media)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthTipsMedia.map((media) => (
          <div
            key={media.id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleMediaClick(media)}
          >
            <div className="relative aspect-video">
              <Image
                src={media.thumbnail || "/placeholder.svg"}
                alt={media.title}
                fill
                className="object-cover"
              />
              {media.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3">
                    <FaPlay className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-black">{media.title}</h3>
              <p className="text-muted-foreground text-sm text-black">{media.description}</p>
            </div>
          </div>
        ))}
      </div>

      <MediaModal isOpen={modalOpen} onClose={closeModal} media={selectedMedia} />
    </>
  )
}
