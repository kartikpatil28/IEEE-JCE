import React from 'react';
import Gallery from '../Gallery/Gallery';
import workshopImage from '../../assets/Events/IMG_0066.HEIC';

// Import images using Vite's import.meta.url
const eventImages = [
  {
    url: workshopImage,
    caption: "IEEE Technical Workshop"
  },
  // Add more images here
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Our <span className="text-blue-500">Events</span>
        </h1>
        <Gallery images={eventImages} />
      </div>
    </div>
  );
};

export default Events; 