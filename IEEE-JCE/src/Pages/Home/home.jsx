import React, { useState } from "react";
import group from "../../assets/JCE.png";
import grp from "../../assets/group.jpg";
import wie_logo from "../../assets/wie-logo.png";
import aess_logo from "../../assets/aess-logo.png";
import cas_logo from "../../assets/cas-logo.png";
import cs_logo from "../../assets/cs-logo.jpeg";
import { motion } from "framer-motion";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MotionWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="hover:scale-105 transform transition duration-300"
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  const events = [
    { name: "IEEE Tech Talk", date: "Oct 25, 2024" },
    { name: "Hackathon 2025", date: "Jan 15, 2025" },
    { name: "Workshops on IoT", date: "Nov 10, 2024" },
    { name: "AI Seminar", date: "Dec 5, 2024" },
    { name: "Industry Meet-up", date: "Feb 20, 2025" },
  ];

  const societies = [
    { logo: wie_logo, name: "WIE" },
    { logo: aess_logo, name: "AESS" },
    { logo: cas_logo, name: "CAS" },
    { logo: cs_logo, name: "CS" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-100">
        <img
          src={grp}
          alt="IEEE Event"
          className="absolute w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white"
          >
            JCE IEEE STUDENT BRANCH
          </motion.h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Empowering students through innovation, workshops, and networking.
          </p>
          <a
            href="/about"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-16 px-4">
        {["500+ Members", "50+ Events", "4 Societies", "10+ Mentors"].map(
          (stat, i) => (
            <MotionWrapper key={i} delay={i * 0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600">{stat}</h3>
                <p className="text-gray-600 mt-2">Active Participation</p>
              </div>
            </MotionWrapper>
          )
        )}
      </div>

      {/* Events Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
          {events.slice(0, showMore ? events.length : 3).map((event, i) => (
            <MotionWrapper key={i}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                <p className="text-gray-600 mt-2">Date: {event.date}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 text-blue-600 font-medium hover:underline"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>

      {/* Societies Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900">IEEE Societies</h2>
        <div className="flex flex-wrap justify-center gap-8 py-6 px-4">
          {societies.map((society, i) => (
            <MotionWrapper key={i}>
              <div className="text-center">
                <img
                  src={society.logo}
                  alt={`${society.name} Logo`}
                  className="h-24 w-24 rounded-full shadow-lg mx-auto"
                  loading="lazy"
                />
                <p className="mt-2 text-gray-700 font-medium">{society.name}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* WhatsApp Button with Toggle */}
      <div className="fixed bottom-5 right-5 flex items-center gap-2">
        <button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
          title={showWhatsApp ? "Hide WhatsApp" : "Show WhatsApp"}
        >
          {showWhatsApp ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        </button>
        {showWhatsApp && (
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
            title="Chat with us on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        )}
      </div>

      
    </div>
  );
};

export default Home;