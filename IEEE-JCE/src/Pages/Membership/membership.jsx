import React from 'react';

const membership = () => {
  // Sample gallery data (replace with your actual data)
  const galleryData = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300?text=Event+1",
      title: "IEEE Hackathon 2023",
      description: "A 24-hour hackathon where students collaborated to build innovative solutions for real-world problems.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300?text=Event+2",
      title: "Tech Talk: AI & Machine Learning",
      description: "An insightful session on the latest trends in AI and machine learning, featuring industry experts.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300?text=Event+3",
      title: "Workshop: IoT for Beginners",
      description: "Hands-on workshop introducing students to the basics of IoT and its applications.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x300?text=Event+4",
      title: "IEEE Women in Engineering",
      description: "A networking event celebrating the achievements of women in engineering and technology.",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-[#00629B] mb-6 text-center">Why Join IEEE?</h1>
        <p className="text-gray-700 mb-8 text-center">
          IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. By joining IEEE, you become part of a global community of over 400,000 professionals and students in more than 160 countries. Whether you're a student, researcher, or industry professional, IEEE provides unparalleled opportunities to grow, innovate, and lead in your field.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-bold text-[#00629B] mt-8 mb-4">Benefits of Joining IEEE</h2>
        <ul className="text-left list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>
            <strong>Access to IEEE Xplore Digital Library:</strong> Get unlimited access to over 5 million documents, including journals, conference papers, and standards.
          </li>
          <li>
            <strong>Professional Development:</strong> Enhance your skills with online courses, certifications, and tutorials through IEEE’s Learning Network.
          </li>
          <li>
            <strong>Career Resources:</strong> Access the IEEE Job Site, career tools, and resources to advance your career.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Connect with professionals and experts in your field through IEEE events, conferences, and local chapters.
          </li>
          <li>
            <strong>Discounts on Conferences and Publications:</strong> Save on registration fees for IEEE conferences and get discounts on IEEE publications.
          </li>
          <li>
            <strong>IEEE Standards Association:</strong> Participate in the development of global standards that shape the future of technology.
          </li>
          <li>
            <strong>IEEE Societies and Technical Councils:</strong> Join specialized communities to collaborate on cutting-edge research and innovations.
          </li>
          <li>
            <strong>Student Benefits:</strong> Access scholarships, grants, competitions, and leadership opportunities through IEEE student branches.
          </li>
        </ul>

        {/* Gallery Section */}
        <h2 className="text-2xl font-bold text-[#00629B] mt-8 mb-6 text-center">Our Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryData.map((event) => (
            <div key={event.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Join Section */}
        <h2 className="text-2xl font-bold text-[#00629B] mt-8 mb-4">How to Join IEEE Through Your Student Branch</h2>
        <ol className="text-left list-decimal list-inside text-gray-700 mb-8 space-y-2">
          <li>Visit the <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IEEE Membership Page</a>.</li>
          <li>Contact your college’s IEEE student branch membership coordinator for guidance.</li>
          <li>Complete the registration form and choose the plan that suits you best.</li>
          <li>Start your IEEE journey and unlock a world of opportunities!</li>
        </ol>

        {/* Contact Section */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold text-[#00629B] mb-4 text-center">Contact Your Membership Coordinator</h2>
          <p className="text-gray-700 text-center"><strong>Name:</strong> [Insert Name]</p>
          <p className="text-gray-700 text-center"><strong>Email:</strong> [Insert Email]</p>
          <p className="text-gray-700 text-center"><strong>Phone:</strong> [Insert Phone Number]</p>
        </div>

        {/* Join Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#00629B] text-white font-semibold rounded-lg hover:bg-[#004D7A] transition duration-300"
          >
            Join IEEE Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default membership;