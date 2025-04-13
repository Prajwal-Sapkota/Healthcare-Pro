"use client";

import React from "react";

export default function MediaModal({ isOpen, onClose, media }) {
  if (!isOpen || !media) return null;

  const isYouTube = media.source.includes("youtube.com") || media.source.includes("youtu.be");

  const getYouTubeEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black text-xl">
          &times;
        </button>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">{media.title}</h2>
          <p className="mb-4 text-sm text-gray-600">{media.description}</p>

          {media.type === "image" ? (
            <img src={media.source} alt={media.title} className="w-full rounded" />
          ) : isYouTube ? (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded"
                src={getYouTubeEmbedUrl(media.source)}
                title={media.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <video controls className="w-full rounded">
              <source src={media.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
