import React from "react";
// Import images
import wieWD1 from "../../assets/Events/WIE_WD/WIE_WD_1.jpg";
import wieWD2 from "../../assets/Events/WIE_WD/WIE_WD_2.jpg";
import wieWD3 from "../../assets/Events/WIE_WD/WIE_WD_3.jpg";
import wieWD4 from "../../assets/Events/WIE_WD/WIE_WD_4.jpg";
import wieWD5 from "../../assets/Events/WIE_WD/WIE_WD_5.jpg";
import { motion } from "framer-motion";

const WIE = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const galleryImages = [
    { src: wieWD1, alt: "WIE Women's Day Event 1" },
    { src: wieWD2, alt: "WIE Women's Day Event 2" },
    { src: wieWD3, alt: "WIE Women's Day Event 3" },
    { src: wieWD4, alt: "WIE Women's Day Event 4" },
    { src: wieWD5, alt: "WIE Women's Day Event 5" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <motion.div 
        className="p-8 bg-gradient-to-r from-gray-900 to-purple-900 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* WIE Logo */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://wie.ieee.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://wie.ieee.org/wp-content/uploads/2021/01/wie-logo.png" 
              alt="IEEE Women in Engineering Logo" 
              className="h-32 mx-auto border rounded-full shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
            />
          </a>
        </motion.div>
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          {...fadeIn}
        >
          Women in Engineering
        </motion.h1>
        <motion.h2 
          className="text-xl mb-6"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          IEEE JCE Student Branch
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg">
            Empowering women in technology through community, resources, and
            opportunities. We promote diversity and inclusion in STEM fields by
            creating supportive spaces for learning, networking, and
            professional growth.
          </p>
          <a 
            href="https://wie.ieee.org/membership/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            Join IEEE WIE
          </a>
        </motion.div>
      </motion.div>

      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-700 hover:border-purple-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
                Vision
              </h2>
              <p className="text-gray-300">
                To be a leading community that promotes diversity in engineering
                and technology fields, ensuring equal opportunities for all,
                especially women, to pursue and excel in STEM careers.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-700 hover:border-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
                Mission
              </h2>
              <p className="text-gray-300">
                To inspire, engage, encourage, and empower women in engineering
                and technology by creating a supportive network, providing
                educational resources, and promoting professional development
                opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-purple-400 mb-8"
            {...fadeIn}
          >
            Committee
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advisor */}
            <motion.div 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Faculty Advisor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Dr. Krupa Rasane
                  </h3>
                  <p className="text-purple-400 font-semibold mb-3">
                    Faculty Advisor
                  </p>
                  <p className="text-gray-400 text-sm">
                    Professor, Department of Electronics and Communication
                    Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Email: drkruparasane@jce.edu
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chair */}
            <motion.div 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="/api/placeholder/300/300"
                    alt="WIE Chair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Shrusti Utturkar
                  </h3>
                  <p className="text-purple-400 font-semibold mb-3">
                    WIE Chair
                  </p>
                  <p className="text-gray-400 text-sm">
                    Electronics and Communication Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    IEEE Student Member
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-purple-400 mb-8"
            {...fadeIn}
          >
            Events Conducted
          </motion.h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={wieWD1}
                    alt="Women's Day Celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      International Women's Day
                    </h3>
                    <span className="text-sm bg-purple-900 text-purple-200 px-2 py-1 rounded">
                      March 8, 2024
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    The IEEE Women in Engineering (WIE) group celebrated
                    International Women's Day with an inspiring program aimed at
                    empowering women in STEM fields. The event featured keynote
                    speeches from prominent female leaders, panel discussions on
                    overcoming gender barriers, and interactive workshops
                    designed to foster innovation and collaboration.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">50+ Attendees</span>
                    <span>Sir MV Auditorium</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-purple-400 mb-4"
              {...fadeIn}
            >
              Gallery
            </motion.h2>
            <div className="w-20 h-0.5 bg-purple-500 mx-auto"></div>
          </div>

          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-10">
              {/* Classic Message */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif text-white mb-4">Our Moments</h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                  Celebrating women in engineering through our events and initiatives. 
                  Each image represents our commitment to empowering and inspiring the next 
                  generation of women engineers.
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden relative group"
                    {...fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-light">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-12 text-center">
                <blockquote className="text-gray-400 italic font-serif text-lg">
                  "Empowering women to shape the future of technology."
                </blockquote>
                <div className="mt-8">
                  <button className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">
                    <span className="font-light">View More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-purple-400 mb-6"
            {...fadeIn}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-4"
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            Have questions or want to get involved? Reach out to us!
          </motion.p>
          <motion.div 
            className="space-y-2"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:wie@jce.edu" className="hover:text-purple-400 transition-colors duration-300">
                wie@jce.edu
              </a>
            </p>
            <p className="text-gray-300">
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/ieee_wie_jce" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
                @ieee_wie_jce
              </a>
            </p>
            <p className="text-gray-300 mt-4">
              <strong>Official IEEE WIE:</strong>{" "}
              <a href="https://wie.ieee.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                wie.ieee.org
              </a>
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-4 mt-6"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://www.facebook.com/ieeewomen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://www.linkedin.com/company/ieee-women-in-engineering" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://twitter.com/ieeewomen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WIE; 