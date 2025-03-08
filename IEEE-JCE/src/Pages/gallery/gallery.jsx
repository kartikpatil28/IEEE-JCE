import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All available images
const allImages = [
  {
    source: "src/assets/Events/CTC/Campus-to-Corporate-14.jpg",
    title: "Placement",
    description: "Making students ready for the corporate world",
    category: "Development"
  },
  {
    source: "src/assets/Events/IEEE_DAY/IEEE_DAY_1.jpg",
    title: "IEEE DAY",
    description: "Celebrating the spirit of IEEE with students",
    category: "Events"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_1.jpg",
    title: "Weekend Events",
    description: "Fun and learning activities for students",
    category: "Events"
  },
  {
    source: "src/assets/Events/Conference/Conference-1.jpg",
    title: "Memory & Storage Summit",
    description: "Keynote speakers and tech talks",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/CTC/Campus-to-Corporate-18.jpg",
    title: "Networking",
    description: "Building connections with industry professionals",
    category: "Development"
  },
  {
    source: "src/assets/Events/IEEE_DAY/IEEE_DAY_12.jpg",
    title: "Speech by Dr.Praveen Chitti",
    description: "Sharing insights on technology and innovation",
    category: "Events"
  },
  {
    source: "src/assets/Events/Conference/Conference-3.jpg",
    title: "Memory & Storage Summit",
    description: "Exploring the future of data storage",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/cyberquest.jpg",
    title: "CyberQuest",
    description: "Cybersecurity competition for students",
    category: "Development"
  },
  // Adding more images
  {
    source: "src/assets/Events/CTC/Campus-to-Corporate-5.jpg",
    title: "Technical Workshop",
    description: "Hands-on learning for engineering students",
    category: "Development"
  },
  {
    source: "src/assets/Events/IEEE_DAY/IEEE_DAY_8.jpg",
    title: "Collaborative Learning",
    description: "Students working together on technical challenges",
    category: "Workspace"
  },
  {
    source: "src/assets/Events/Conference/Conference-7.jpg",
    title: "Panel Discussion",
    description: "Industry experts discuss emerging technologies",
    category: "Events"
  },
  {
    source: "src/assets/Events/weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/CTC/Campus-to-Corporate-10.jpg",
    title: "Mock Interviews",
    description: "Preparing students for job interviews",
    category: "Development"
    
  },
  {
    source: "src/assets/Events/IEEE_DAY/IEEE_DAY_5.jpg",
    title: "Tech Quiz",
    description: "Testing knowledge on latest technologies",
    category: "Events"
    
  },
  {
    source: "src/assets/Events/Conference/Conference-5.jpg",
    title: "Tech Talks",
    description: "Learning from industry leaders and researchers",
    category: "Events"
  },
  {
    source: "src/assets/Events/weekend_events/Poster_2.jpg",
    title: "Coding Challenge",
    description: "Competing in coding challenges and hackathons",
    category: "Development"

  },
  {
    source: "src/assets/Events/CTC/Campus-to-Corporate-12.jpg",
    title: "Resume Building",
    description: "Crafting resumes for job applications",
    category: "Development"
    
  },
  {
    source: "src/assets/Events/IEEE_DAY/IEEE_DAY_9.jpg",
    title: "Tech Exhibition",
    description: "Showcasing student projects and innovations",
    category: "Events"
   
  },
  {
    source: "src/assets/Events/Conference/Conference-6.jpg",
    title: "Networking",

    description: "Building connections with industry professionals",
    category: "Events"
  },
  {
    source: "src/assets/Events/weekend_events/Poster_1.jpg",
    title: "Weekend Events",
    description: "Fun and learning activities for students",
    category:""
  
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  },
  {
    source: "src/assets/Events/Weekend_events/Poster_3.jpg",
    title: "Robotics Competition",
    description: "Showcasing innovation in robotics",
    category: "Hardware"
  }
];

// Featured images (first 4 only)
const featuredImages = allImages.slice(0, 4);

const Gallery = () => {
  // State for lightbox functionality
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  // Categories for filtering - dynamically generated from image data
  const allCategories = ["All", ...new Set(allImages.map(img => img.category))];

  // Filtered images based on active category
  const filteredImages = activeFilter === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeFilter);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  // Open lightbox with specific image
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate through lightbox images
  const navigateLightbox = (direction) => {
    if (direction === "next") {
      setCurrentImage((currentImage + 1) % filteredImages.length);
    } else {
      setCurrentImage((currentImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">WIE Gallery</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Women in Engineering - Showcasing innovation, creativity, and
          technological excellence through visual stories
        </p>
      </div>

      {/* Featured Slider - Only shows first 4 images */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-3">
          Featured Highlights
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Slider {...settings}>
            {featuredImages.map((item, index) => (
              <div key={index} className="relative h-96 md:h-[500px]">
                <img
                  src={item.source}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Gallery Section - Shows all images with filtering */}
      <div>
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3">
            Gallery Collection
          </h2>

          {/* Filter buttons */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid - Shows filtered images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.source}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full mx-auto">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 focus:outline-none"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={filteredImages[currentImage].source}
                alt={filteredImages[currentImage].title}
                className="max-h-[75vh] mx-auto object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute top-1/2 -translate-y-1/2 -left-16 md:-left-20 bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
              >
                ‹
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-20 bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
              >
                ›
              </button>
            </div>

            {/* Caption */}
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">
                {filteredImages[currentImage].title}
              </h3>
              <p className="text-white/80 mt-2">
                {filteredImages[currentImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="mt-20 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
          About WIE Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              The Women in Engineering (WIE) Gallery showcases the outstanding
              contributions of women in various engineering disciplines. Through
              visual storytelling, we celebrate innovation, creativity, and
              technical excellence.
            </p>
            <p className="text-gray-600">
              Our collection features pioneering work across software
              development, hardware engineering, systems design, and more. Each
              image represents a story of persistence, problem-solving, and
              passion for technology.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">
              Join Our Community
            </h3>
            <p className="text-gray-700 mb-4">
              Interested in contributing to our gallery or participating in WIE
              events? Connect with us through:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">📧</span> Email: wie@engineering.org
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span> Website: engineering.org/wie
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> Social: @WIEngineering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;