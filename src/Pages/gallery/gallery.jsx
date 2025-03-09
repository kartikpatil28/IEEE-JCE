import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all images
import WIEWD1 from "../../../IEEE-JCE/src/assets/Events/WIE_WD/WIE_WD_1.jpg";
import WIEWD2 from "../../../IEEE-JCE/src/assets/Events/WIE_WD/WIE_WD_2.jpg";
import WIEWD3 from "../../../IEEE-JCE/src/assets/Events/WIE_WD/WIE_WD_3.jpg";
import WIEWD4 from "../../../IEEE-JCE/src/assets/Events/WIE_WD/WIE_WD_4.jpg";
import WIEWD5 from "../../../IEEE-JCE/src/assets/Events/WIE_WD/WIE_WD_5.jpg";

import CTC1 from "../../../IEEE-JCE/src/assets/Events/CTC/Campus-to-Corporate-14.jpg";
import CTC2 from "../../../IEEE-JCE/src/assets/Events/CTC/Campus-to-Corporate-18.jpg";
import CTC3 from "../../../IEEE-JCE/src/assets/Events/CTC/Campus-to-Corporate-5.jpg";
import CTC4 from "../../../IEEE-JCE/src/assets/Events/CTC/Campus-to-Corporate-10.jpg";
import CTC5 from "../../../IEEE-JCE/src/assets/Events/CTC/Campus-to-Corporate-12.jpg";

import IEEEDAY1 from "../../../IEEE-JCE/src/assets/Events/IEEE_DAY/IEEE_DAY_1.jpg";
import IEEEDAY2 from "../../../IEEE-JCE/src/assets/Events/IEEE_DAY/IEEE_DAY_12.jpg";
import IEEEDAY3 from "../../../IEEE-JCE/src/assets/Events/IEEE_DAY/IEEE_DAY_8.jpg";
import IEEEDAY4 from "../../../IEEE-JCE/src/assets/Events/IEEE_DAY/IEEE_DAY_5.jpg";
import IEEEDAY5 from "../../../IEEE-JCE/src/assets/Events/IEEE_DAY/IEEE_DAY_9.jpg";

import CONF1 from "../../../IEEE-JCE/src/assets/Events/Conference/Conference-1.jpg";
import CONF2 from "../../../IEEE-JCE/src/assets/Events/Conference/Conference-3.jpg";
import CONF3 from "../../../IEEE-JCE/src/assets/Events/Conference/Conference-7.jpg";
import CONF4 from "../../../IEEE-JCE/src/assets/Events/Conference/Conference-5.jpg";
import CONF5 from "../../../IEEE-JCE/src/assets/Events/Conference/Conference-6.jpg";

import WEEKEND1 from "../../../IEEE-JCE/src/assets/Events/weekend_events/Poster_1.jpg";
import WEEKEND2 from "../../../IEEE-JCE/src/assets/Events/weekend_events/Poster_2.jpg";
import WEEKEND3 from "../../../IEEE-JCE/src/assets/Events/weekend_events/Poster_3.jpg";

import CYBERQUEST from "../../../IEEE-JCE/src/assets/Events/cyberquest.jpg";

// All available images with proper organization
const allImages = [
  // WIE Women's Day Events
  {
    source: WIEWD1,
    title: "Women's Day Celebration",
    description: "Celebrating International Women's Day with inspiring talks",
    category: "WIE Events"
  },
  {
    source: WIEWD2,
    title: "Women in Tech Panel",
    description: "Industry leaders sharing their experiences and insights",
    category: "WIE Events"
  },
  {
    source: WIEWD3,
    title: "Technical Workshop",
    description: "Hands-on learning session for women engineers",
    category: "WIE Events"
  },
  {
    source: WIEWD4,
    title: "Networking Session",
    description: "Building connections and fostering collaboration",
    category: "WIE Events"
  },
  {
    source: WIEWD5,
    title: "Innovation Showcase",
    description: "Demonstrating projects and innovations by women engineers",
    category: "WIE Events"
  },

  // Campus to Corporate Events
  {
    source: CTC1,
    title: "Interview Preparation",
    description: "Expert tips on acing technical interviews",
    category: "Career Development"
  },
  {
    source: CTC2,
    title: "Industry Connect",
    description: "Interaction with corporate professionals",
    category: "Career Development"
  },
  {
    source: CTC3,
    title: "Skill Development",
    description: "Enhancing technical and soft skills",
    category: "Career Development"
  },
  {
    source: CTC4,
    title: "Mock Interviews",
    description: "Practice sessions with industry experts",
    category: "Career Development"
  },
  {
    source: CTC5,
    title: "Resume Building",
    description: "Creating impactful professional profiles",
    category: "Career Development"
  },

  // IEEE Day Celebrations
  {
    source: IEEEDAY1,
    title: "IEEE Day Opening",
    description: "Kickoff ceremony of IEEE Day celebrations",
    category: "IEEE Events"
  },
  {
    source: IEEEDAY2,
    title: "Technical Symposium",
    description: "Showcasing latest technological advancements",
    category: "IEEE Events"
  },
  {
    source: IEEEDAY3,
    title: "Team Building",
    description: "Collaborative activities and group projects",
    category: "IEEE Events"
  },
  {
    source: IEEEDAY4,
    title: "Tech Quiz",
    description: "Testing knowledge in various technical domains",
    category: "IEEE Events"
  },
  {
    source: IEEEDAY5,
    title: "Project Exhibition",
    description: "Display of innovative student projects",
    category: "IEEE Events"
  },

  // Conference and Technical Events
  {
    source: CONF1,
    title: "Memory & Storage Summit",
    description: "Latest trends in storage technologies",
    category: "Technical Events"
  },
  {
    source: CONF2,
    title: "Expert Talk",
    description: "Industry insights and future technologies",
    category: "Technical Events"
  },
  {
    source: CONF3,
    title: "Panel Discussion",
    description: "Debating emerging technology trends",
    category: "Technical Events"
  },
  {
    source: CONF4,
    title: "Research Presentation",
    description: "Sharing innovative research findings",
    category: "Technical Events"
  },
  {
    source: CONF5,
    title: "Networking Event",
    description: "Building professional connections",
    category: "Technical Events"
  },

  // Weekend Activities
  {
    source: WEEKEND1,
    title: "Weekend Workshop",
    description: "Practical learning through hands-on sessions",
    category: "Workshops"
  },
  {
    source: WEEKEND2,
    title: "Coding Marathon",
    description: "24-hour coding challenge for innovators",
    category: "Workshops"
  },
  {
    source: WEEKEND3,
    title: "Robotics Workshop",
    description: "Learning robotics fundamentals and applications",
    category: "Workshops"
  },

  // Special Events
  {
    source: CYBERQUEST,
    title: "CyberQuest",
    description: "Exploring cybersecurity challenges and solutions",
    category: "Special Events"
  }
];

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent"></div>
  </div>
);

const ImageCard = React.memo(({ item }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-gray-100">
      <img
        src={item.source}
        alt={item.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full mb-4 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {item.category}
          </span>
          <h3 className="text-white font-bold text-2xl mb-3 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  </div>
));

const FilterButton = React.memo(({ category, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
      active
        ? "bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white shadow-lg shadow-indigo-500/25"
        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
    }`}
  >
    {category}
  </button>
));

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [page, setPage] = useState(1);
  const imagesPerPage = 12;

  // Categories for filtering
  const allCategories = React.useMemo(() => 
    ["All", ...new Set(allImages.map(img => img.category))],
    []
  );

  // Filtered and paginated images
  const filteredImages = React.useMemo(() => {
    const filtered = activeFilter === "All" 
      ? allImages 
      : allImages.filter(img => img.category === activeFilter);
    return filtered.slice(0, page * imagesPerPage);
  }, [activeFilter, page]);

  // Enhanced slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    lazyLoad: true,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <div className="max-w-8xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900 bg-clip-text text-transparent mb-6 tracking-tight">
            IEEE Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our journey of innovation, learning, and growth through
            memorable events and activities
          </p>
        </div>

        {/* Featured Slider */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            <span className="border-b-4 border-indigo-500 pb-2">
              Featured Highlights
            </span>
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
            <Slider {...settings}>
              {allImages.slice(0, 5).map((item, index) => (
                <div key={index} className="relative h-[700px]">
                  <img
                    src={item.source}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 max-w-4xl">
                      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full mb-6">
                        {item.category}
                      </span>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="border-b-4 border-indigo-500 pb-2">
                Gallery Collection
              </span>
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {allCategories.map((category) => (
                <FilterButton
                  key={category}
                  category={category}
                  active={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                />
              ))}
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredImages.map((item, index) => (
              <ImageCard key={index} item={item} />
            ))}
          </div>

          {/* Load More Button */}
          {filteredImages.length < (activeFilter === "All" ? allImages.length : allImages.filter(img => img.category === activeFilter).length) && (
            <div className="text-center mt-16">
              <button
                onClick={loadMore}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white rounded-xl font-semibold hover:shadow-lg shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Load More Images</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}
        </div>

        {/* Information Section */}
        <div className="mt-32 bg-white rounded-3xl shadow-xl p-12 md:p-16 backdrop-blur-sm border border-gray-100/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            <span className="border-b-4 border-indigo-500 pb-2">
              About Our Gallery
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our gallery showcases the vibrant activities and achievements of the IEEE Student Branch. 
                Through these images, we capture moments of learning, innovation, and collaboration that 
                define our journey in technical excellence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From technical workshops to cultural events, each image represents our commitment to 
                fostering a dynamic environment where students can grow, learn, and excel in their 
                chosen fields.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50/50 rounded-2xl p-10 shadow-inner">
              <h3 className="text-2xl font-bold text-indigo-800 mb-8">
                Get Involved
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4 text-gray-700 group">
                  <span className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                    📧
                  </span>
                  <span className="text-lg">ieee@jce.ac.in</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-700 group">
                  <span className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                    🌐
                  </span>
                  <span className="text-lg">ieee.jce.ac.in</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-700 group">
                  <span className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                    📱
                  </span>
                  <span className="text-lg">@IEEE_JCE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 