import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All available images with proper organization
const allImages = [
  // WIE Women's Day Events
  {
    source: new URL("../../assets/Events/WIE_WD/WIE_WD_1.jpg", import.meta.url)
      .href,
    title: "Women's Day Celebration",
    description: "Celebrating International Women's Day with inspiring talks",
    category: "WIE Events",
  },
  {
    source: new URL("../../assets/Events/WIE_WD/WIE_WD_2.jpg", import.meta.url)
      .href,
    title: "Women in Tech Panel",
    description: "Industry leaders sharing their experiences and insights",
    category: "WIE Events",
  },
  {
    source: new URL("../../assets/Events/WIE_WD/WIE_WD_3.jpg", import.meta.url)
      .href,
    title: "Technical Workshop",
    description: "Hands-on learning session for women engineers",
    category: "WIE Events",
  },
  {
    source: new URL("../../assets/Events/WIE_WD/WIE_WD_4.jpg", import.meta.url)
      .href,
    title: "Networking Session",
    description: "Building connections and fostering collaboration",
    category: "WIE Events",
  },
  {
    source: new URL("../../assets/Events/WIE_WD/WIE_WD_5.jpg", import.meta.url)
      .href,
    title: "Innovation Showcase",
    description: "Demonstrating projects and innovations by women engineers",
    category: "WIE Events",
  },

  // Campus to Corporate Events
  {
    source: new URL(
      "../../assets/Events/CTC/Campus-to-Corporate-14.jpg",
      import.meta.url
    ).href,
    title: "Interview Preparation",
    description: "Expert tips on acing technical interviews",
    category: "Career Development",
  },
  {
    source: new URL(
      "../../assets/Events/CTC/Campus-to-Corporate-18.jpg",
      import.meta.url
    ).href,
    title: "Industry Connect",
    description: "Interaction with corporate professionals",
    category: "Career Development",
  },
  {
    source: new URL(
      "../../assets/Events/CTC/Campus-to-Corporate-5.jpg",
      import.meta.url
    ).href,
    title: "Skill Development",
    description: "Enhancing technical and soft skills",
    category: "Career Development",
  },
  {
    source: new URL(
      "../../assets/Events/CTC/Campus-to-Corporate-10.jpg",
      import.meta.url
    ).href,
    title: "Mock Interviews",
    description: "Practice sessions with industry experts",
    category: "Career Development",
  },
  {
    source: new URL(
      "../../assets/Events/CTC/Campus-to-Corporate-12.jpg",
      import.meta.url
    ).href,
    title: "Resume Building",
    description: "Creating impactful professional profiles",
    category: "Career Development",
  },
  {
    source: new URL(
      "../../assets/Aero_Talk/Career_Dr_Sushant.jpg",
      import.meta.url
    ).href,
    title: "Resume Building",
    description: "Creating impactful professional profiles",
    category: "Career Development",
  },

  // IEEE Day Celebrations
  {
    source: new URL(
      "../../assets/Events/IEEE_DAY/IEEE_DAY_1.jpg",
      import.meta.url
    ).href,
    title: "IEEE Day Opening",
    description: "Kickoff ceremony of IEEE Day celebrations",
    category: "IEEE Events",
  },
  {
    source: new URL(
      "../../assets/Events/IEEE_DAY/IEEE_DAY_12.jpg",
      import.meta.url
    ).href,
    title: "Technical Symposium",
    description: "Showcasing latest technological advancements",
    category: "IEEE Events",
  },

  // Conference and Technical Events
  {
    source: new URL(
      "../../assets/Events/Conference/Conference-1.jpg",
      import.meta.url
    ).href,
    title: "Memory & Storage Summit",
    description: "Latest trends in storage technologies",
    category: "Technical Events",
  },
  {
    source: new URL(
      "../../assets/Events/Conference/Conference-3.jpg",
      import.meta.url
    ).href,
    title: "Expert Talk",
    description: "Industry insights and future technologies",
    category: "Technical Events",
  },

  {
    source: new URL(
      "../../assets/Events/Conference/Conference-5.jpg",
      import.meta.url
    ).href,
    title: "Research Presentation",
    description: "Sharing innovative research findings",
    category: "Technical Events",
  },
  {
    source: new URL(
      "../../assets/Events/Conference/Conference-6.jpg",
      import.meta.url
    ).href,
    title: "Networking Event",
    description: "Building professional connections",
    category: "Technical Events",
  },

  // Weekend Activities
  {
    source: new URL(
      "../../assets/Events/Weekend_events/Poster_1.jpg",
      import.meta.url
    ).href,
    title: "Weekend Workshop",
    description: "Practical learning through hands-on sessions",
    category: "Workshops",
  },
  {
    source: new URL(
      "../../assets/Events/Weekend_events/Poster_2.jpg",
      import.meta.url
    ).href,
    title: "Coding Marathon",
    description: "24-hour coding challenge for innovators",
    category: "Workshops",
  },
  {
    source: new URL(
      "../../assets/Events/Weekend_events/Poster_3.jpg",
      import.meta.url
    ).href,
    title: "Robotics Workshop",
    description: "Learning robotics fundamentals and applications",
    category: "Workshops",
  },

  // Special Events
  {
    source: new URL("../../assets/Events/cyberquest.jpg", import.meta.url).href,
    title: "CyberQuest",
    description: "Exploring cybersecurity challenges and solutions",
    category: "Special Events",
  },

 
];

// Rest of the component remains the same...
// Featured images (first 4 only)
const featuredImages = allImages.slice(0, 4);

const Gallery = () => {
  // State for lightbox functionality
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  // Categories for filtering - dynamically generated from image data
  const allCategories = [
    "All",
    ...new Set(allImages.map((img) => img.category)),
  ];

  // Filtered images based on active category
  const filteredImages =
    activeFilter === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
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
      setCurrentImage(
        (currentImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">
          IEEE Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing our journey of innovation, learning, and growth through
          memorable events and activities
        </p>
      </div>

      {/* Featured Slider */}
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

      {/* Gallery Section */}
      <div>
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3">
            Gallery Collection
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
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

        {/* Gallery grid */}
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
          About Our Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our gallery showcases the vibrant activities and achievements of
              the IEEE Student Branch. Through these images, we capture moments
              of learning, innovation, and collaboration that define our journey
              in technical excellence.
            </p>
            <p className="text-gray-600">
              From technical workshops to cultural events, each image represents
              our commitment to fostering a dynamic environment where students
              can grow, learn, and excel in their chosen fields.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">
              Get Involved
            </h3>
            <p className="text-gray-700 mb-4">
              Want to be part of our upcoming events? Connect with us through:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">📧</span> Email: ieee@jce.ac.in
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span> Website: ieee.jce.ac.in
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> Social: @IEEE_JCE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
