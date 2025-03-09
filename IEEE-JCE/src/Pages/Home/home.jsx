import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaBell, FaCalendarAlt, FaUsers, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import group from "../../assets/Logos/JCE.png";
import grp from "../../assets/group.jpg";
import wie_logo from "../../assets/Logos/wie-logo.png";
import aess_logo from "../../assets/Logos/aess-logo.png";
import cs_logo from "../../assets/Logos/cs-logo.jpeg";
import Team from "../team/team";
import TestimonialsSection from "../Home/testimonials";

// Motion wrapper for consistent animations
const MotionWrapper = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`transition duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

// Stats data with icons
const stats = [
  { value: 500, label: "Members", color: "text-blue-500", icon: <FaUsers className="mb-2 mx-auto text-blue-500" size={28} /> },
  { value: 50, label: "Events", color: "text-blue-500", icon: <FaCalendarAlt className="mb-2 mx-auto text-blue-500" size={28} /> },
  { value: 3, label: "Societies", color: "text-blue-500", icon: <FaUsers className="mb-2 mx-auto text-blue-500" size={28} /> },
  { value: 10, label: "Mentors", color: "text-blue-500", icon: <FaGraduationCap className="mb-2 mx-auto text-blue-500" size={28} /> },
];

// Upcoming events
const events = [
  { name: "IEEE Tech Talk", date: "Oct 25, 2024", description: "Latest advancements in AI and machine learning" },
  { name: "Hackathon 2025", date: "Jan 15, 2025", description: "48-hour coding competition with exciting prizes" },
  { name: "Workshops on IoT", date: "Nov 10, 2024", description: "Hands-on experience with IoT devices and platforms" },
  { name: "AI Seminar", date: "Dec 5, 2024", description: "Industry experts sharing insights on artificial intelligence" },
];

// Societies data
const societies = [
  {
    logo: aess_logo,
    name: "Aerospace & Electronic Systems Society",
    shortName: "AESS",
    description: "Advancing technology in aerospace, navigation, avionics, radar, and electronic systems."
  },
  {
    logo: wie_logo,
    name: "Women in Engineering",
    shortName: "WIE",
    description: "Promoting women engineers and scientists in STEM fields worldwide."
  },
  {
    logo: cs_logo,
    name: "Computer Society",
    shortName: "CS",
    description: "Advancing computer science and technology through professional development and networking."
  },
];

// Gallery images
const galleryImages = [
  { id: 1, src: "src/assets/Events/CTC/Campus-to-Corporate-14.jpg", alt: "Campus to Corporate" },
  { id: 2, src: "src/assets/Events/CTC/Campus-to-Corporate-1.jpg", alt: "Campus to Corporate" },
  { id: 3, src: "src/assets/Events/weekend_events/Poster_1.jpg", alt: "Campus to Corporate" },
  { id: 4, src: "src/assets/Events/weekend_events/Poster_23.jpg", alt: "Poster making" },
  { id: 5, src: "src/assets/Events/IEEE_DAY/IEEE_DAY_1.jpg", alt: "IEEE DAY" },
  { id: 6, src: "src/assets/Events/IEEE_DAY/IEEE_DAY_14.jpg", alt: "IEEE DAY" },
  { id: 7, src: "src/assets/Events/AESS-poster.jpg", alt: "AESS Poster" },
  { id: 8, src: "src/assets/Events/cyberquest.jpg", alt: "Cyber Quest" },
];

// SectionTitle component for consistent headings
const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={grp}
        alt="IEEE Event"
        className="absolute w-full h-full object-cover"
        style={{ filter: "brightness(0.3)" }}
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          JCE <span className="text-blue-400">IEEE</span> Student Branch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-10"
        >
          Empowering students through innovation, technology, and professional growth
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Learn More
          </Link>
          <Link
            to="/membership"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Join IEEE
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title={<>About <span className="text-blue-500">IEEE</span> Student Branch</>}
          subtitle="Building a community of future innovators and technology leaders through knowledge sharing and professional development."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionWrapper delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={grp} 
                alt="IEEE Student Branch" 
                className="w-full h-auto"
              />
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                The IEEE Student Branch at JCE is dedicated to fostering technological innovation and excellence by providing students with opportunities for networking, learning, and professional growth in various fields of engineering and technology.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Technical workshops and hands-on sessions</span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Industry connections and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Leadership and personal development</span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">Access to IEEE resources and publications</span>
                </li>
              </ul>
              
              <Link
                to="/about"
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={<>Our <span className="text-blue-500">Impact</span> in Numbers</>}
          subtitle="Growing stronger every year with dedicated members and impactful initiatives"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <MotionWrapper key={i} delay={i * 0.1} className="hover:transform hover:scale-105">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                {stat.icon}
                <h3 className="text-4xl font-bold text-gray-800 mb-1">
                  {inView ? (
                    <CountUp start={0} end={stat.value} duration={2} />
                  ) : (
                    0
                  )}
                  <span className="text-blue-500">+</span>
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

// Societies Section
const SocietiesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={<>Our <span className="text-blue-500">IEEE</span> Societies</>}
          subtitle="Join specialized communities within IEEE to enhance your knowledge and skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {societies.map((society, i) => (
            <MotionWrapper key={i} delay={i * 0.1} className="hover:transform hover:scale-105">
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col">
                <div className="p-6 bg-gray-50 flex justify-center items-center h-48">
                  <img 
                    src={society.logo} 
                    alt={society.name} 
                    className="max-h-32 max-w-full"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {society.name} <span className="text-blue-500">({society.shortName})</span>
                  </h3>
                  <p className="text-gray-600 mb-4">{society.description}</p>
                  <Link
                    to={`/societies/${society.shortName.toLowerCase()}`}
                    className="text-blue-500 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

// Events Section
const EventsSection = () => {
  return (
    <section className="py-16 px-6 bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={<>Upcoming <span className="text-blue-300">Events</span></>}
          subtitle="Join us for these exciting events and expand your knowledge and network"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <MotionWrapper key={i} delay={i * 0.1} className="hover:transform hover:translate-y-1">
              <div className="bg-blue-700 rounded-xl p-6 shadow-lg h-full flex flex-col">
                <div className="text-blue-300 text-sm font-medium mb-3">{event.date}</div>
                <h3 className="text-xl font-bold mb-3">{event.name}</h3>
                <p className="text-blue-100 mb-4 flex-grow">{event.description}</p>
                <Link
                  to="/events"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition duration-300 mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={<>Our <span className="text-blue-400">Gallery</span></>}
          subtitle="Relive our best moments and activities through these images"
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(0, 8).map((image, i) => (
            <MotionWrapper key={i} delay={i * 0.05} className="hover:transform hover:scale-105">
              <div className="overflow-hidden rounded-lg shadow-lg h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

// Join IEEE Section
const JoinSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Join IEEE Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-blue-100 text-lg mb-6"
              >
                Become a part of the world's largest technical professional organization 
                for the advancement of technology. Gain access to technical resources, 
                career opportunities, and a global network of professionals.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-blue-100 mb-6 space-y-2"
              >
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Access to IEEE's digital library with research papers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Networking with industry professionals
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional development opportunities
                </li>
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-1/3 flex justify-center"
            >
              <Link
                to="/membership"
                className="bg-white text-blue-800 px-8 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-gray-100 transition duration-300 inline-block text-center"
              >
                Become a Member
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [showEventsPanel, setShowEventsPanel] = useState(false);

  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SocietiesSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <JoinSection />
      <Team />
      
      {/* Mobile Events Panel */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setShowEventsPanel(!showEventsPanel)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Toggle Events Panel"
        >
          <FaBell size={20} />
        </button>
        
        {showEventsPanel && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl w-72 overflow-hidden">
            <div className="bg-blue-600 p-3">
              <h3 className="text-lg font-bold text-white">Upcoming Events</h3>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {events.map((event, i) => (
                <div key={i} className="p-3 border-b border-gray-200 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              ))}
              <Link 
                to="/events"
                className="block p-3 text-center text-blue-600 font-medium hover:bg-gray-50"
              >
                View All Events
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;