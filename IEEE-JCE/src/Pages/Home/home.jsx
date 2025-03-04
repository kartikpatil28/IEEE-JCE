import React, { useState } from "react";
import { Link } from "react-router-dom";
import group from "../../assets/JCE.png";
import grp from "../../assets/group.jpg";
import wie_logo from "../../assets/wie-logo.png";
import aess_logo from "../../assets/aess-logo.png";
import cas_logo from "../../assets/cas-logo.png";
import cs_logo from "../../assets/cs-logo.jpeg";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

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
  const [showEventsPanel, setShowEventsPanel] = useState(false);

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

  const facultyAdvisors = [
    { name: "Dr. Krupa Rasane", role: "Faculty Advisor", image: "https://via.placeholder.com/150" },
    { name: "Prof. Deepali Patil", role: "Faculty Advisor", image: "https://via.placeholder.com/150" },
    { name: "Prof. Jayashree Rudagi", role: "Faculty Advisor", image: "https://via.placeholder.com/150" },
    { name: "Prof. Unknown", role: "Faculty Advisor", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800">
        <img
          src={grp}
          alt="IEEE Event"
          className="absolute w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white"
          >
            JCE IEEE STUDENT BRANCH
          </motion.h1>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            Empowering students through innovation, workshops, and networking.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        {["500+ Members", "50+ Events", "4 Societies", "10+ Mentors"].map(
          (stat, i) => (
            <MotionWrapper key={i} delay={i * 0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <h3 className="text-3xl font-bold text-blue-800">{stat}</h3>
                <p className="text-gray-600 mt-2">Active Participation</p>
              </div>
            </MotionWrapper>
          )
        )}
      </div>

      {/* Events Section */}
      <div className="text-center py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
          {events.slice(0, showMore ? events.length : 3).map((event, i) => (
            <MotionWrapper key={i}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800">{event.name}</h3>
                <p className="text-gray-600 mt-2">Date: {event.date}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 text-blue-800 font-medium hover:underline"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>

      {/* Societies Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900">IEEE Societies</h2>
        <div className="flex flex-wrap justify-center gap-8 py-6 px-4">
          {societies.map((society, i) => (
            <MotionWrapper key={i}>
              <div className="text-center">
                <img
                  src={society.logo}
                  alt={`${society.name} Logo`}
                  className="h-24 w-24 rounded-full shadow-lg mx-auto hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <p className="mt-2 text-gray-700 font-medium">{society.name}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Faculty Advisors Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900">Faculty Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6">
          {facultyAdvisors.map((advisor, i) => (
            <MotionWrapper key={i}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-800 mt-4">{advisor.name}</h3>
                <p className="text-gray-600 mt-2">{advisor.role}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Upcoming Events Panel */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-2">
        <button
          onClick={() => setShowEventsPanel(!showEventsPanel)}
          className="bg-blue-800 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-900 transition"
          title={showEventsPanel ? "Hide Events" : "Show Events"}
        >
          <FaBell size={20} />
        </button>
        {showEventsPanel && (
          <div className="bg-white w-64 p-4 rounded-l-lg shadow-lg max-h-[60vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {events.map((event, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="text-sm font-medium text-gray-800">{event.name}</p>
                  <p className="text-xs text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
            <Link
              to="/notifications"
              className="mt-4 inline-block text-blue-800 text-sm font-medium hover:underline"
            >
              View All Notifications
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;