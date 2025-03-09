import React from 'react';

const Lightbox = ({ images, currentImage, onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 focus:outline-none"
          aria-label="Close lightbox"
        >
          ×
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src={images[currentImage].source}
            alt={images[currentImage].title}
            className="max-h-[75vh] mx-auto object-contain"
            loading="eager"
          />

          {/* Navigation buttons */}
          <button
            onClick={() => onNavigate("prev")}
            className="absolute top-1/2 -translate-y-1/2 -left-16 md:-left-20 bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => onNavigate("next")}
            className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-20 bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Caption */}
        <div className="text-center mt-4">
          <h3 className="text-white text-xl font-bold">
            {images[currentImage].title}
          </h3>
          <p className="text-white/80 mt-2">
            {images[currentImage].description}
          </p>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Keyboard navigation */}
      <div className="sr-only">
        Use left and right arrow keys to navigate between images.
        Press Escape to close the lightbox.
      </div>
    </div>
  );
};

export default Lightbox; 