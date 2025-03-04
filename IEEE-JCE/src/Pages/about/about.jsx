import { FaTrophy, FaEnvelope, FaUsers, FaLightbulb, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SectionCard = ({ title, imageSrc, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden p-8 my-10 border border-white/10 hover:border-white/20 transition-all"
  >
    {imageSrc && (
      <div className="relative w-full h-64">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    )}
    <div className="mt-6 text-center">
      <h2 className="text-4xl font-semibold text-white">{title}</h2>
      <p className="text-lg text-gray-200 mt-4">{children}</p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="IEEE Student Branch"
          className="absolute w-full h-full object-cover brightness-50"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About IEEE Student Branch
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto opacity-90">
            Empowering students through innovation, collaboration, and
            cutting-edge technology.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* History Section */}
        <SectionCard
          title="History of IEEE"
          imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          Founded in 1963, IEEE emerged from the merger of AIEE and IRE, evolving
          into the world’s largest technical professional organization. Today, it
          stands at the forefront of technological advancement, with over 400,000
          members worldwide. Our student branch was established in 2005 and has
          since been a hub for innovation and technical excellence.
        </SectionCard>

        {/* Mission & Vision Section */}
        <SectionCard
          title="Mission & Vision"
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-blue-400 text-6xl mb-4" />
            <p>
              Our mission is to foster a community of innovators and problem-solvers
              who leverage technology to address global challenges. We aim to bridge
              the gap between academia and industry by providing students with
              opportunities to develop skills, lead initiatives, and network with
              experts through workshops, hackathons, and innovation-driven events.
            </p>
          </div>
        </SectionCard>

        {/* Achievements Section */}
        <SectionCard
          title="Achievements"
          imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <div className="flex flex-col items-center text-center">
            <FaTrophy className="text-yellow-400 text-6xl mb-4" />
            <p>
              Our IEEE Student Branch has been recognized at national-level competitions,
              tech fests, and cutting-edge research contributions. We’ve won the
              "Best Student Branch Award" three times in the last five years and have
              published over 50 research papers in IEEE journals.
            </p>
          </div>
        </SectionCard>

        {/* Events Section */}
        <SectionCard
          title="Events & Activities"
          imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <div className="flex flex-col items-center text-center">
            <FaCalendarAlt className="text-purple-400 text-6xl mb-4" />
            <p>
              We host a variety of events, including:
              <ul className="list-disc list-inside mt-2 text-left">
                <li>Annual Hackathon</li>
                <li>Tech Talks by Industry Leaders</li>
                <li>Workshops on AI, IoT, and Robotics</li>
                <li>Networking Sessions with Alumni</li>
              </ul>
            </p>
          </div>
        </SectionCard>

        {/* Contact Section */}
        <SectionCard
          title="Contact Us"
          imageSrc="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-white text-6xl mb-4" />
            <p className="text-lg">
              Email: <a href="mailto:ieee@jce.edu" className="text-blue-300 hover:underline">ieee@jce.edu</a>
              <br />
              Location: IEEE Student Branch, Jain College of Engineering
            </p>
            <button
              onClick={() => alert("Contact Form Coming Soon!")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}