import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaQuoteLeft } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import aboutImage from "../../assets/group.jpg"; // Replace with your image path
import event1 from "../../assets/group.jpg"; // Replace with your event images
import event2 from "../../assets/group.jpg";
import event3 from "../../assets/group.jpg";
import TimelineSection from "./TimelineSection";


const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-20 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          IEEE JCE Student Branch - A Legacy of Excellence
        </h1>
        <p className="text-lg text-gray-300 mt-3">
          Empowering students through technology, collaboration, and innovation.
        </p>
      </div>

      {/* Split Section: Image on Left, Text on Right */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src={aboutImage}
            alt="IEEE JCE Student Branch"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-6">About IEEE JCE</h2>
          <p className="text-gray-300 mb-4">
            The IEEE JCE Student Branch was established in 2015 with the mission
            to inspire and empower students in the field of technology. Over the
            years, we have grown into a vibrant community of over 500 members,
            fostering innovation, collaboration, and excellence.
          </p>
          <p className="text-gray-300">
            Our initiatives include workshops, hackathons, and research projects
            that provide students with hands-on experience and opportunities to
            connect with industry professionals. We are proud to be part of the
            IEEE North Karnataka Subsection and continue to make a significant
            impact in the region.
          </p>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-800 py-12 my-16 rounded-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6"
          >
            <h3 className="text-5xl font-bold text-blue-500">500+</h3>
            <p className="text-gray-300 mt-2">Active Members</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <h3 className="text-5xl font-bold text-purple-500">50+</h3>
            <p className="text-gray-300 mt-2">Events Conducted</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6"
          >
            <h3 className="text-5xl font-bold text-green-500">10+</h3>
            <p className="text-gray-300 mt-2">Awards Won</p>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="text-center my-16 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Achievements & Impact</h2>
        <p className="text-gray-400 mt-3">
          Showcasing our milestones and contributions.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            >
              <achieve.icon className="text-5xl mx-auto text-blue-500" />
              <h3 className="text-xl font-semibold mt-4">{achieve.title}</h3>
              <p className="text-gray-400 mt-2">{achieve.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-12 my-16 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What People Say About Us</h2>
          <p className="text-gray-400 mt-3">
            Hear from our members and partners.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-gray-900 p-6 rounded-lg text-left shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-blue-500" />
                <p className="text-gray-300 mt-4">{testimonial.quote}</p>
                <p className="text-gray-400 mt-4 font-semibold">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="text-center my-16 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <p className="text-gray-400 mt-3">
          A glimpse of our events and activities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 my-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Join Us Today!</h2>
          <p className="text-gray-200 mt-3">
            Be part of a community that drives innovation and excellence.
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold mt-6 hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Join IEEE JCE
          </a>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineSection />
    </div>
  );
};

const achievements = [
  {
    icon: FaUsers,
    title: "Community Growth",
    description: "Over 500 active members contributing to IEEE initiatives.",
  },
  {
    icon: FaTrophy,
    title: "Award Winning",
    description: "Received multiple IEEE regional awards for excellence.",
  },
  {
    icon: GiAchievement,
    title: "Innovative Projects",
    description: "Conducted 50+ successful research projects and hackathons.",
  },
];

const testimonials = [
  {
    quote:
      "IEEE JCE has been a game-changer for me. The workshops and events have helped me grow both personally and professionally.",
    name: "Austin Pacheco",
  },
  {
    quote:
      "Being part of IEEE JCE has given me the opportunity to work on exciting projects and connect with industry experts.",
    name: "Chandan",
  },
];

const galleryImages = [event1, event2, event3]; // Replace with your event images

export default AboutPage;