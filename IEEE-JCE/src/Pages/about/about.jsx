import { FaTrophy, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const CustomCard = ({ title, children, className }) => (
  <div className={`shadow-lg rounded-xl bg-white ${className}`}>
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-xl p-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
    </div>
    <div className="p-6 text-lg font-light opacity-90">{children}</div>
  </div>
);

const CustomButton = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${className}`}
  >
    {text}
  </button>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white p-14 rounded-3xl shadow-2xl"
      >
        <h1 className="text-5xl font-bold text-center text-gradient-to-r from-blue-500 to-blue-700">About IEEE Student Branch</h1>
        <p className="text-gray-600 text-center mt-4 text-lg font-light leading-relaxed">
          Our IEEE Student Branch empowers students to become the next generation of technology leaders through innovation, collaboration, and skill development.
        </p>

        {/* History of IEEE */}
        <CustomCard title="History of IEEE" className="mt-10">
          <p>
            Founded in 1963 through the merger of AIEE and IRE, IEEE has grown to become the world’s largest technical professional organization. With a membership of over 400,000, IEEE leads in advancing technology for the benefit of humanity through research publications, global conferences, and industry standards.
          </p>
        </CustomCard>

        {/* Mission & Vision */}
        <CustomCard title="Mission & Vision" className="mt-10">
          <p>
            We aim to bridge academia with industry by creating opportunities for skill development, leadership, and networking. Our focus is on nurturing the next generation of engineers through workshops, hackathons, and technical sessions.
          </p>
        </CustomCard>

        {/* Achievements */}
        <CustomCard title="Achievements" className="mt-10 bg-gradient-to-r from-yellow-400 to-yellow-600">
          <div className="text-center">
            <FaTrophy className="text-yellow-500 text-6xl mb-4" />
            <p>
              Our IEEE Student Branch has been recognized for its excellence in tech fests, national-level competitions, and contributions to groundbreaking research in various domains of engineering.
            </p>
          </div>
        </CustomCard>

        {/* Contact */}
        <CustomCard title="Contact Us" className="mt-10 bg-gradient-to-r from-red-500 to-red-700">
          <div className="text-center">
            <FaEnvelope className="text-white text-6xl mb-4" />
            <p>
              Email: <a href="mailto:ieee@jce.edu" className="text-blue-400">ieee@jce.edu</a><br />
              Location: IEEE Student Branch, Jain College of Engineering
            </p>
            <CustomButton text="Get in Touch" onClick={() => alert('Contact Form Coming Soon!')} className="mt-6" />
          </div>
        </CustomCard>
      </motion.div>
    </div>
  );
}
