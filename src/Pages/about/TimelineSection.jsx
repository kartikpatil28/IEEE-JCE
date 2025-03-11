import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaLightbulb, FaHandshake, FaRocket, FaChevronDown, FaUserFriends, FaSatellite } from "react-icons/fa";

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center py-24 px-4" ref={timelineRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-xl -z-10"></div>
      
      {/* Glowing Orbs - Decorative Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-purple-600 opacity-20 blur-xl -z-5"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-red-500 opacity-20 blur-xl -z-5"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />

      {/* Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey
      </motion.h2>

      {/* Vertical Line */}
      <div className="absolute h-full w-1 bg-gray-700 top-0 rounded-full">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-red-500 via-pink-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/20"
        />
      </div>

      {/* Timeline Items */}
      {timelineData.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full flex items-center md:items-start ${isEven ? "flex-row" : "flex-row-reverse"} mb-16 relative`}
          >
            {/* Content Side */}
            <motion.div 
              className={`w-full md:w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                whileHover={{ y: -5 }}
                onClick={() => handleItemClick(index)}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent"
                >
                  {item.date}
                </motion.h3>
                
                <p className="text-gray-300 mt-2 font-medium">{item.description}</p>
                
                <div className="flex items-center justify-end mt-2">
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 hover:text-gray-200 cursor-pointer"
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
                
                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 pt-4 border-t border-gray-700">
                    {item.paragraph}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Center Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  delay: index * 0.2 + 0.3
                }}
                className="w-14 h-14 bg-gradient-to-r from-red-500 to-purple-600 rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg shadow-purple-600/30 cursor-pointer z-10"
                onClick={() => handleItemClick(index)}
              >
                <item.icon className="text-white text-xl" />
              </motion.div>
              
              {/* Line connector for mobile */}
              <div className="h-full w-px bg-gray-700 block md:hidden"></div>
            </div>

            {/* Empty Space Side */}
            <div className="hidden md:block w-5/12"></div>
          </motion.div>
        );
      })}
      
      {/* Final element */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/30 mt-8"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <FaRocket className="text-white text-2xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const timelineData = [
  {
    date: "May 2015",
    description: "IEEE JCE Student Branch was established.",
    paragraph:
      "The branch was founded with the mission to inspire and empower students in the field of technology. It started with a small group of passionate students and has since grown into a thriving community of innovators and future engineers.",
    icon: FaLightbulb,
  },
  {
    date: "January 2020",
    description: "Became part of IEEE North Karnataka Subsection.",
    paragraph:
      "Joining the IEEE North Karnataka Subsection allowed us to collaborate with other student branches and participate in larger regional events, enhancing our reach and impact. This partnership opened doors to new opportunities for knowledge sharing and professional networking.",
    icon: FaHandshake,
  },
  {
    date: "March 2022",
    description: "Formed IEEE Women in Engineering (WIE) Society.",
    paragraph:
      "The establishment of our WIE Society marked a significant milestone in our commitment to supporting gender diversity in engineering. This initiative provides mentorship, networking, and professional development opportunities specifically designed to empower women in technology fields.",
    icon: FaUserFriends,
  },
  {
    date: "October 2023",
    description: "Established IEEE Aerospace & Electronic Systems Society (AESS).",
    paragraph:
      "The launch of our AESS chapter expanded our technical focus into aerospace, electronic, and systems engineering. Through this society, we now offer specialized workshops, industry connections, and research opportunities in fields ranging from satellite systems to autonomous vehicles.",
    icon: FaSatellite,
  },
  {
    date: "Today",
    description: "Continuing our mission to inspire and empower students.",
    paragraph:
      "We continue to organize workshops, hackathons, and research projects, providing students with hands-on experience and opportunities to connect with industry professionals. Our focus remains on bridging the gap between academic knowledge and practical industry skills through our diverse range of IEEE societies.",
    icon: FaRocket,
  },
];

export default TimelineSection;