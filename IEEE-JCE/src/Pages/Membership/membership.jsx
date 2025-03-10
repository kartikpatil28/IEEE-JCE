import React from 'react';
import { motion } from 'framer-motion';

const Membership = () => {
  // Sample gallery data (replace with your actual data)
  const galleryData = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "IEEE Hackathon 2023",
      description: "A 24-hour hackathon where students collaborated to build innovative solutions for real-world problems.",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Tech Talk: AI & Machine Learning",
      description: "An insightful session on the latest trends in AI and machine learning, featuring industry experts.",
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Workshop: IoT for Beginners",
      description: "Hands-on workshop introducing students to the basics of IoT and its applications.",
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "IEEE Women in Engineering",
      description: "A networking event celebrating the achievements of women in engineering and technology.",
    },
  ];

  const benefits = [
    {
      title: "Access to IEEE Xplore Digital Library",
      description: "Get unlimited access to over 5 million documents, including journals, conference papers, and standards.",
      icon: "📚"
    },
    {
      title: "Professional Development",
      description: "Enhance your skills with online courses, certifications, and tutorials through IEEE's Learning Network.",
      icon: "🚀"
    },
    {
      title: "Career Resources",
      description: "Access the IEEE Job Site, career tools, and resources to advance your career.",
      icon: "💼"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and experts in your field through IEEE events, conferences, and local chapters.",
      icon: "🌐"
    },
    {
      title: "Discounts on Conferences and Publications",
      description: "Save on registration fees for IEEE conferences and get discounts on IEEE publications.",
      icon: "💰"
    },
    {
      title: "IEEE Standards Association",
      description: "Participate in the development of global standards that shape the future of technology.",
      icon: "📋"
    },
    {
      title: "IEEE Societies and Technical Councils",
      description: "Join specialized communities to collaborate on cutting-edge research and innovations.",
      icon: "👥"
    },
    {
      title: "Student Benefits",
      description: "Access scholarships, grants, competitions, and leadership opportunities through IEEE student branches.",
      icon: "🎓"
    }
  ];

  const joinSteps = [
    "Visit the IEEE Membership Page",
    "Contact your college's IEEE student branch membership coordinator for guidance",
    "Complete the registration form and select the IEEE society you wish to join to kickstart your journey!",
    "Start your IEEE journey and unlock a world of opportunities!"
  ];

  // Animation variants for consistent animations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-purple-900/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center text-center">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200"
          >
            Why Join <span className="text-purple-300">IEEE?</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-lg sm:text-xl max-w-3xl text-blue-100 px-4"
          >
            Become part of a global community of over 400,000 professionals and students in more than 160 countries. 
            Unlock opportunities to grow, innovate, and lead in your field.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-indigo-900 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Join IEEE Today
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            {...fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600"
          >
            Benefits of Joining IEEE
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            IEEE provides unparalleled opportunities for students, researchers, and industry professionals.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-4 sm:p-6 flex-1">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Events Gallery Section */}
      <div className="bg-gradient-to-b from-white to-indigo-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600"
            >
              Our Events
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
            >
              Discover the exciting events and activities organized by IEEE chapters.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {galleryData.map((event, index) => (
              <motion.div 
                key={event.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:opacity-75 transition-opacity duration-300">
                  <div className="h-40 sm:h-48 w-full flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl">📸</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-indigo-900/90 to-purple-900/50">
                  <div className="p-4 sm:p-6 text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-100">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How to Join Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200"
            >
              How to Join IEEE Through Your Student Branch
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-blue-100 max-w-3xl mx-auto px-4"
            >
              Follow these simple steps to become a member of the IEEE community.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
          >
            {joinSteps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative pl-12 sm:pl-16 md:pl-0 md:text-center group"
              >
                <div className="absolute left-0 top-0 md:relative md:mx-auto md:mb-4 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold text-lg sm:text-xl transform group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-base sm:text-lg text-blue-100 group-hover:text-white transition-colors duration-300">{step}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-indigo-900 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your IEEE Journey
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-indigo-100"
          >
            <div className="p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                Contact Your Membership Coordinator
              </h2>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center justify-center space-x-3 bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <span className="text-xl sm:text-2xl">👤</span>
                  <p className="text-sm sm:text-base text-gray-700"><strong>Name:</strong> Vinayak Agasimani</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center justify-center space-x-3 bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <span className="text-xl sm:text-2xl">✉️</span>
                  <p className="text-sm sm:text-base text-gray-700"><strong>Email:</strong> vinayakagasimani1@gmail.com</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center justify-center space-x-3 bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <span className="text-xl sm:text-2xl">📱</span>
                  <p className="text-sm sm:text-base text-gray-700"><strong>Phone:</strong>+91 81238 95082</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Membership;