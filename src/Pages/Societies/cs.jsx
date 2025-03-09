import React from "react";
import { motion } from "framer-motion";

const ComputerSociety = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section - Black Theme with Larger CS Title */}
      <div className="p-8 bg-gradient-to-r from-gray-900 to-green-900 text-white text-center">
        {/* CS Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://ieeecs-media.computer.org/wp-media/2021/12/16190445/IEEE-CS_LogoTM-orange-354x108.png" 
            alt="IEEE Computer Society Logo" 
            className="h-32 mx-auto border rounded-full"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-2">
          Computer Society
        </h1>
        <h2 className="text-xl mb-6">IEEE JCE Student Branch</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg">
            Fostering technological innovation and excellence in computing. 
            We connect students with cutting-edge developments in software engineering, 
            artificial intelligence, cybersecurity, and other computing disciplines 
            to prepare the next generation of technology leaders.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-green-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
                Vision
              </h2>
              <p className="text-gray-300">
                To establish a vibrant community that empowers students to explore, 
                innovate and excel in computing technologies, while fostering leadership 
                and professional growth that will drive the future of the digital world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-teal-700">
              <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
                Mission
              </h2>
              <p className="text-gray-300">
                To provide students with resources, opportunities, and connections that enhance 
                their technical skills, promote collaborative learning, and create pathways to 
                industry engagement through workshops, hackathons, seminars, and project-based 
                learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
            Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advisor */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
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
                    Dr. Ananya Gupta
                  </h3>
                  <p className="text-green-400 font-semibold mb-3">
                    Faculty Advisor
                  </p>
                  <p className="text-gray-400 text-sm">
                    Associate Professor, Department of Computer Science & Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Email: ananya.gupta@jce.edu
                  </p>
                </div>
              </div>
            </div>

            {/* Chair */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="/api/placeholder/300/300"
                    alt="CS Chair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Riya Joshi
                  </h3>
                  <p className="text-green-400 font-semibold mb-3">
                    CS Chair
                  </p>
                  <p className="text-gray-400 text-sm">
                    Computer Science Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    IEEE Student Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section - Black Theme */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
            Upcoming Events
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon!</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're excited to announce that we are planning several engaging events for our 
              Computer Society members. Stay tuned for workshops, hackathons, and technical 
              sessions that will enhance your skills and knowledge in various computing domains.
            </p>
            <div className="mt-6">
              <button className="bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Classic Theme */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Gallery</h2>
            <div className="w-20 h-0.5 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-10">
              {/* Classic Message */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif text-white mb-4">Coming Soon</h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                  We are in the process of curating a collection of memorable moments from our 
                  upcoming events and activities. Each photograph will tell a story of innovation, 
                  collaboration, and growth.
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div 
                    key={index} 
                    className="aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden relative group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-gray-600 rounded-lg">
                      <div className="text-center p-4">
                        <svg 
                          className="w-8 h-8 text-gray-500 mx-auto mb-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-gray-400 text-sm font-light">Image {index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-12 text-center">
                <blockquote className="text-gray-400 italic font-serif text-lg">
                  "Every moment captured is a story preserved."
                </blockquote>
                <div className="mt-8">
                  <button className="inline-flex items-center px-6 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300">
                    <span className="font-light">Subscribe for Updates</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Black Theme */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Have questions or want to get involved? Reach out to us!
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> cs@jce.edu
          </p>
          <p className="text-gray-300">
            <strong>Instagram:</strong> @ieee_cs_jce
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-green-700 transition">
              f
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-green-700 transition">
              in
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-green-700 transition">
              t
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerSociety; 