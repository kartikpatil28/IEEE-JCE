import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock API function to fetch event data
const fetchEventData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // Past events data
        pastEvents: [
          {
            title: "Web Development Workshop",
            date: "January 15, 2025",
            description: "Hands-on workshop covering HTML, CSS, and JavaScript fundamentals",
            image: "/api/placeholder/600/400",
            highlights: ["100+ participants", "Industry mentors", "Project showcase"]
          },
          {
            title: "IoT Seminar",
            date: "December 10, 2024",
            description: "Expert-led seminar on Internet of Things technologies and applications",
            image: "/api/placeholder/600/400",
            highlights: ["Live demonstrations", "Q&A session", "Networking"]
          },
          {
            title: "Code Jam 2024",
            date: "November 5, 2024",
            description: "Competitive programming contest with over 100 participants",
            image: "/api/placeholder/600/400",
            highlights: ["5 challenging rounds", "Cash prizes", "Recruitment opportunities"]
          },
        ],
        // Upcoming events data
        upcomingEvents: [
          {
            title: "Hackathon 2025",
            date: "April 20-21, 2025",
            description: "48-hour hackathon challenging teams to build innovative solutions",
            image: "/api/placeholder/600/400",
            theme: "Sustainable Technology",
            countdown: "43"
          },
          {
            title: "AI/ML Workshop Series",
            date: "May 5-15, 2025",
            description: "Three-part workshop series on artificial intelligence and machine learning",
            image: "/api/placeholder/600/400",
            theme: "Future of AI",
            countdown: "58"
          },
          {
            title: "Technical Paper Presentation",
            date: "June 10, 2025",
            description: "Platform for students to present their research papers and innovations",
            image: "/api/placeholder/600/400",
            theme: "Emerging Technologies",
            countdown: "94"
          },
        ],
      });
    }, 1000); // Simulate API delay
  });
};

function EventsPage() {
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  
  // Fetch event data on component mount
  useEffect(() => {
    const loadEventData = async () => {
      const data = await fetchEventData();
      setEventData(data);
      setIsLoading(false);
    };
    loadEventData();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isLoading && activeTab === "upcoming") {
      const interval = setInterval(() => {
        setCurrentEventIndex((prev) => 
          prev === eventData.upcomingEvents.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoading, activeTab, eventData]);

  if (isLoading) {
    return (
      <div className="flex h-screen bg-black">
        <div className="m-auto flex flex-col items-center">
          <div className="relative w-24 h-24">
            <div className="absolute w-full h-full border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-indigo-500 rounded-full animate-spin"></div>
          </div>
          <div className="mt-6 text-xl text-white font-light tracking-widest animate-pulse">
            LOADING EVENTS
          </div>
        </div>
      </div>
    );
  }

  const currentEvents = activeTab === "upcoming" ? eventData.upcomingEvents : eventData.pastEvents;
  const currentEvent = currentEvents[currentEventIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Events Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full p-1 bg-gray-800">
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentEventIndex(0);
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
                </button>
              ))}
            </div>
          </div>
          
          {/* Event Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentEventIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Event Image */}
                <div className="relative overflow-hidden rounded-2xl h-64 lg:h-96">
                  <img 
                    src={currentEvent.image} 
                    alt={currentEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Event Details */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-3 text-blue-400">
                    {currentEvent.title}
                  </h2>
                  
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {currentEvent.date}
                    
                    {activeTab === "upcoming" && (
                      <span className="ml-4 flex items-center">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {currentEvent.countdown} days left
                      </span>
                    )}
                  </div>
                  
                  {activeTab === "upcoming" && (
                    <div className="mb-4 inline-block bg-gradient-to-r from-blue-800 to-purple-800 px-3 py-1 rounded-md text-sm">
                      Theme: {currentEvent.theme}
                    </div>
                  )}
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {currentEvent.description}
                  </p>
                  
                  {activeTab === "past" && (
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-blue-500">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentEvent.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-gray-800 px-3 py-1 rounded-md text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {currentEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentEventIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentEventIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to event ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Event List View */}
          <div className="mt-16">
            <h3 className="text-xl font-medium mb-6 text-gray-200">All {activeTab === "upcoming" ? "Upcoming" : "Past"} Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden cursor-pointer transition-all border border-transparent hover:border-blue-500 ${
                    idx === currentEventIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setCurrentEventIndex(idx)}
                >
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-sm text-blue-400">{event.date}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;