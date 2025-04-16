"use client";

import { FaTimes } from "react-icons/fa";

export default function MediaModal({ isOpen, onClose, media }) {
  if (!isOpen || !media) return null;

  const isVideo = media.type === "video";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{media.title}</h2>

          {isVideo ? (
            <div className="w-full aspect-video">
              {media.url.includes("youtube.com") ? (
                <iframe
                  src={media.url.replace("watch?v=", "embed/")}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls className="w-full h-full rounded-lg">
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <img
              src={media.source}
              alt={media.title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
          )}

          {media.description && (
            <p className="mt-4 whitespace-pre-line text-gray-700">{media.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}