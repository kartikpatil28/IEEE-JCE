import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa"; // Icons for timeline items

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded item

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center py-16" ref={timelineRef}>
      {/* Vertical Line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute w-1 bg-gradient-to-b from-red-500 to-purple-500 top-0"
      />

      {/* Timeline Items */}
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="w-full flex items-center gap-8 pb-12 cursor-pointer"
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} // Toggle expanded state
        >
          {/* Text on the Left */}
          <div className="w-1/2 text-right">
            <h3 className="text-2xl font-semibold">{item.date}</h3>
            <p className="text-gray-300 mt-2">{item.description}</p>
            {/* Additional Paragraph (Visible when expanded) */}
            {expandedIndex === index && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 mt-4"
              >
                {item.paragraph}
              </motion.p>
            )}
          </div>

          {/* Timestamp Circle with Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-full border-4 border-gray-900 flex-shrink-0 flex items-center justify-center"
          >
            <item.icon className="text-white text-xl" />
          </motion.div>

          {/* Empty Space on the Right */}
          <div className="w-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
};

const timelineData = [
  {
    date: "January 2015",
    description: "IEEE JCE Student Branch was established.",
    paragraph:
      "The branch was founded with the mission to inspire and empower students in the field of technology. It started with a small group of passionate students and has since grown into a thriving community.",
    icon: FaLightbulb, // Icon for this item
  },
  {
    date: "January 2020",
    description: "Became part of IEEE North Karnataka Subsection.",
    paragraph:
      "Joining the IEEE North Karnataka Subsection allowed us to collaborate with other student branches and participate in larger regional events, enhancing our reach and impact.",
    icon: FaHandshake, // Icon for this item
  },
  {
    date: "Today",
    description: "Continuing our mission to inspire and empower students.",
    paragraph:
      "We continue to organize workshops, hackathons, and research projects, providing students with hands-on experience and opportunities to connect with industry professionals.",
    icon: FaRocket, // Icon for this item
  },
];

export default TimelineSection;