import React, { useState } from "react";
import group from "../../assets/JCE.png";
import grp from "../../assets/group.jpg";
import wie_logo from "../../assets/wie-logo.png";
import aess_logo from "../../assets/aess-logo.png";
import cas_logo from "../../assets/cas-logo.png";
import { motion } from "framer-motion";

const EventCard = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-xl p-6 rounded-xl text-white hover:scale-105 transform transition duration-300"
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-200 mt-2">{description}</p>
  </motion.div>
);

const StatisticCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 * index }}
    className="bg-blue-600 text-white p-6 rounded-lg text-lg font-semibold shadow-md transform transition duration-300 hover:scale-105"
  >
    {stat}
  </motion.div>
);

const TestimonialCard = ({ quote, name }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border-t-4 border-blue-500"
  >
    <p className="italic text-gray-600">"{quote}"</p>
    <h4 className="mt-4 text-lg font-bold text-blue-600">- {name}</h4>
  </motion.div>
);

function Home() {
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const upcomingEvents = [
    { title: "IEEE Tech Talk", description: "Latest trends in technology" },
    { title: "Hackathon 2025", description: "Test your coding skills" },
    { title: "Workshops on IoT", description: "Hands-on IoT training" },
    { title: "AI Seminar", description: "Advancements in AI" },
    { title: "Industry Meet-up", description: "Network with professionals" },
  ];

  const testimonials = [
    {
      quote: "Being part of IEEE has been a transformative experience for me!",
      name: "John Doe",
    },
    {
      quote: "I met some amazing mentors and peers at the events.",
      name: "Jane Smith",
    },
    {
      quote: "The workshops provided invaluable hands-on experience.",
      name: "Alice Johnson",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden rounded-xl">
        <img
          src={grp}
          alt="IEEE Event"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-10 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            JCE IEEE STUDENT BRANCH
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
            Empowering students with technology and innovation through
            workshops, hackathons, and networking opportunities.
          </p>
          <a
            href="/about"
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform transition duration-300"
            aria-label="About Us"
          >
            About Us
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-6 py-16 bg-blue-50 rounded-lg shadow-md mx-6 md:mx-16">
        {["500+ Members", "50+ Events", "4 Societies", "10+ Mentors"].map(
          (stat, index) => (
            <StatisticCard stat={stat} index={index} key={index} />
          )
        )}
      </div>

      {/* Upcoming Events */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
          {upcomingEvents
            .slice(0, showMoreEvents ? upcomingEvents.length : 3)
            .map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
              />
            ))}
        </div>
        <button
          onClick={() => setShowMoreEvents(!showMoreEvents)}
          className="mt-6 text-blue-600 font-medium hover:underline"
        >
          {showMoreEvents ? "See Less" : "See More"}
        </button>
      </div>

      {/* Societies Section */}
      <div className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-600">IEEE Societies</h2>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          {[wie_logo, aess_logo, cas_logo].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Society Logo"
              className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 text-center bg-blue-50">
        <h2 className="text-3xl font-bold text-blue-600">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          {[group, wie_logo, aess_logo, cas_logo].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Gallery Image"
              className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
        <form className="max-w-lg mx-auto mt-8 space-y-6 px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
