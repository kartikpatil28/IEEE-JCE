import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import group from "../../assets/Logos/JCE.png";
import grp from "../../assets/group.jpg";
import wie_logo from "../../assets/Logos/wie-logo.png";
import aess_logo from "../../assets/Logos/aess-logo.png";
import cs_logo from "../../assets/Logos/cs-logo.jpeg";
import Team from "../team/team"; // Import the Team component

// Reusable Motion Wrapper Component
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

// Stats Data
const stats = [
  { value: 500, label: "Members", color: "text-blue-400" },
  { value: 50, label: "Events", color: "text-purple-400" },
  { value: 3, label: "Societies", color: "text-green-400" },
  { value: 10, label: "Mentors", color: "text-red-400" },
];

// Events Data
const events = [
  { name: "IEEE Tech Talk", date: "Oct 25, 2024" },
  { name: "Hackathon 2025", date: "Jan 15, 2025" },
  { name: "Workshops on IoT", date: "Nov 10, 2024" },
  { name: "AI Seminar", date: "Dec 5, 2024" },
  { name: "Industry Meet-up", date: "Feb 20, 2025" },
];

// Societies Data
const societies = [
  {
    logo: aess_logo,
    name: "Aerospace & Electronic Systems Society (AESS)",
    description:
      "The IEEE Aerospace and Electronic Systems Society (AESS) focuses on advancing technology in aerospace and electronic systems. Its areas of interest include the design, development, and integration of complex systems for applications in space, air, ocean, and ground environments. These systems often involve navigation, avionics, radar, sonar, telemetry, and command and control systems",
  },
  {
    logo: wie_logo,
    name: "Women in Engineering (WIE)",
    description:
      "IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists. It aims to inspire and support women worldwide in pursuing careers in engineering and technology. WIE actively encourages participation from all individuals, regardless of gender or background, and works to facilitate the recruitment and retention of women in STEM fields",
  },
  {
    logo: cs_logo,
    name: "Computer Society (CS)",
    description:
      "The IEEE Computer Society is a leading professional organization dedicated to advancing computer science and technology. It provides resources for professionals at all career stages, including access to conferences, publications, certifications, and a robust digital library. The society also supports technical communities and offers opportunities for networking and collaboration.",
  },
];

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={grp}
        alt="IEEE Event"
        className="absolute w-full h-full object-cover opacity-20"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Welcome to <span className="text-blue-400">JCE IEEE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Empowering students through innovation, workshops, and networking.
          Join us to explore the world of technology and make a difference.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/about"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Stats Section Component
const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Our <span className="text-blue-500">Achievements</span> &{" "}
          <span className="text-red-500">Statistics</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Our IEEE Student Branch is a thriving community with over{" "}
          <span className="text-blue-500 font-bold">500+</span> members,{" "}
          <span className="text-purple-500 font-bold">50+</span> events, and{" "}
          <span className="text-green-500 font-bold">3+</span> societies driving
          innovation.
        </motion.p>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <h3 className={`text-5xl font-extrabold ${stat.color}`}>
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2} />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-gray-600 text-lg mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Membership Section Component
const MembershipSection = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join <span className="text-blue-400">IEEE</span>?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Becoming an IEEE member connects you to a global network of
            professionals and technology enthusiasts. Gain access to exclusive
            resources, participate in local and international events, and engage
            in professional development activities through{" "}
            <Link
              to="https://ieee-collabratec.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              IEEE Collabratec®
            </Link>
            . Join us to innovate, network, and grow in your field.
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Link
            to="/membership"
            className="bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Events Panel Component
const EventsPanel = ({ showEventsPanel, setShowEventsPanel }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden">
      <button
        onClick={() => setShowEventsPanel(!showEventsPanel)}
        className="w-full bg-blue-600 text-white p-3 rounded-t-lg shadow-lg hover:bg-blue-700 transition"
        aria-label="Toggle Events Panel"
      >
        <FaBell size={20} className="mx-auto" />
      </button>
      {showEventsPanel && (
        <div className="bg-gray-800 w-full p-4 rounded-t-lg shadow-lg max-h-[50vh] overflow-y-auto">
          <h3 className="text-lg font-bold text-white mb-4">Upcoming Events</h3>
          {events.map((event, i) => (
            <div key={i} className="bg-gray-700 p-3 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-white">{event.name}</p>
              <p className="text-xs text-gray-300">{event.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [showEventsPanel, setShowEventsPanel] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <HeroSection />
      <StatsSection />
      <MembershipSection />
      <Team />
      <EventsPanel
        showEventsPanel={showEventsPanel}
        setShowEventsPanel={setShowEventsPanel}
      />
    </div>
  );
};

export default Home;
