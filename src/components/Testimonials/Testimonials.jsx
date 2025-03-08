import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Testimonial Component
const Testimonial = ({ name, affiliation, text, imgSrc }) => {
  return (
    <motion.div 
      className="my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-2xl border border-gray-800 hover:border-0 transition-all duration-500 relative group overflow-hidden backdrop-blur-sm">
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{
               background: "linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
               mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
               maskComposite: "exclude",
               WebkitMaskComposite: "xor",
               maskClip: "padding-box, border-box",
               padding: "2px",
               pointerEvents: "none"
             }}>
        </div>
        
        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
          </svg>
        </div>
        
        <p className="text-gray-300 mb-6 text-lg relative z-10 leading-relaxed">{text}</p>
        <div className="flex items-center relative z-10">
          <div className="relative">
            <img 
              src={imgSrc || "/api/placeholder/60/60"} 
              alt={name} 
              className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-black"></div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{name}</h4>
            <p className="text-blue-400 text-sm font-medium">{affiliation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonials data - Left column
const testimonials = [
  {
    name: "Rahul Sharma",
    affiliation: "Computer Science",
    text: "I really like how IEEE workshops connect theory to practical applications. The Arduino session helped me understand embedded systems in a way lectures never could.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Priya Patel",
    affiliation: "Electronics Engineering",
    text: "Being part of WIE has been transformative. I've found mentors who have guided my research interests and supported my growth in a male-dominated field.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Arjun Singh",
    affiliation: "Aerospace Engineering",
    text: "The most useful IEEE resource for me has been the technical library access. It's hands down the best benefit for research students like me.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Neha Gupta",
    affiliation: "CS Graduate",
    text: "IEEE's professional network helped me land my first internship. The industry connections through the chapter are invaluable for career growth.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Karthik Reddy",
    affiliation: "AI Researcher",
    text: "The IEEE workshops on machine learning were exactly what I needed to bridge the gap between theory and implementation. Now I'm leading our college's AI team.",
    imgSrc: "/api/placeholder/60/60"
  },
];

// Testimonials data - Right column
const moreTestimonials = [
  {
    name: "Ananya Desai",
    affiliation: "IoT Developer",
    text: "The technical workshops in IEEE are incredibly practical. I learned more about IoT implementation in one session than in an entire semester.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Vikram Mehta",
    affiliation: "Robotics",
    text: "Being part of IEEE's robotics projects has been amazing. The hands-on experience and mentorship have accelerated my learning tremendously.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Shreya Joshi",
    affiliation: "Data Science",
    text: "IEEE's resources and workshops helped me stay updated with the latest in data science. The networking opportunities are incredible.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Rajat Kumar",
    affiliation: "Cybersecurity",
    text: "The cybersecurity workshops organized by IEEE were eye-opening. They provided practical insights that are invaluable in the industry.",
    imgSrc: "/api/placeholder/60/60"
  },
  {
    name: "Aisha Khan",
    affiliation: "Embedded Systems",
    text: "IEEE's embedded systems projects gave me hands-on experience with industry-standard tools and practices. It's been instrumental in my career.",
    imgSrc: "/api/placeholder/60/60"
  },
];

// Scrolling Testimonials Section
const TestimonialsSection = () => {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  
  useEffect(() => {
    if (column2Ref.current) {
      column2Ref.current.scrollTop = column2Ref.current.scrollHeight / 2;
    }
    
    const scrollSpeed = 0.2;
    let animationFrameId;
    let scrollPos1 = 0;
    let scrollPos2 = 0;
    
    const animateScroll = () => {
      if (column1Ref.current && column2Ref.current) {
        const resetPoint1 = column1Ref.current.scrollHeight / 2;
        const resetPoint2 = column2Ref.current.scrollHeight / 2;
        
        scrollPos1 += scrollSpeed;
        scrollPos2 += scrollSpeed;
        
        column1Ref.current.scrollTop = scrollPos1;
        column2Ref.current.scrollTop = resetPoint2 - scrollPos2;
        
        if (scrollPos1 >= resetPoint1) {
          scrollPos1 = 0;
          column1Ref.current.scrollTop = 0;
        }
        
        if (scrollPos2 >= resetPoint2) {
          scrollPos2 = 0;
          column2Ref.current.scrollTop = resetPoint2;
        }
      }
      
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    
    animateScroll();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Hear what our community has to say about their IEEE experience
          </motion.p>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* First Column - Scrolling Down */}
          <div 
            ref={column1Ref} 
            className="h-[700px] overflow-hidden relative"
          >
            {/* Enhanced gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            
            {/* Testimonials */}
            <div className="px-4">
              <AnimatePresence>
                {testimonials.map((item, index) => (
                  <Testimonial 
                    key={`col1-${index}`}
                    name={item.name}
                    affiliation={item.affiliation}
                    text={item.text}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </AnimatePresence>
              <AnimatePresence>
                {testimonials.map((item, index) => (
                  <Testimonial 
                    key={`col1-dup-${index}`}
                    name={item.name}
                    affiliation={item.affiliation}
                    text={item.text}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Second Column - Scrolling Up */}
          <div 
            ref={column2Ref} 
            className="h-[700px] overflow-hidden relative"
          >
            {/* Enhanced gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            
            {/* Testimonials */}
            <div className="px-4">
              <AnimatePresence>
                {moreTestimonials.map((item, index) => (
                  <Testimonial 
                    key={`col2-${index}`}
                    name={item.name}
                    affiliation={item.affiliation}
                    text={item.text}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </AnimatePresence>
              <AnimatePresence>
                {moreTestimonials.map((item, index) => (
                  <Testimonial 
                    key={`col2-dup-${index}`}
                    name={item.name}
                    affiliation={item.affiliation}
                    text={item.text}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/join"
            className="inline-flex items-center px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 no-underline group"
          >
            Join IEEE Today
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 