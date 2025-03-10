import React from 'react';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Why Join <span className="text-blue-300">IEEE?</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Become part of a global community of over 400,000 professionals and students in more than 160 countries. 
            Unlock opportunities to grow, innovate, and lead in your field.
          </p>
          <div className="mt-10">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join IEEE Today
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Benefits of Joining IEEE</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            IEEE provides unparalleled opportunities for students, researchers, and industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Gallery Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Events</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the exciting events and activities organized by IEEE chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {galleryData.map((event) => (
              <div key={event.id} className="group relative overflow-hidden rounded-lg bg-white shadow-md">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:opacity-75 transition-opacity duration-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-900 bg-opacity-80">
                  <div className="p-4 text-center text-white">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="mt-2 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Join Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">How to Join IEEE Through Your Student Branch</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Follow these simple steps to become a member of the IEEE community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {joinSteps.map((step, index) => (
              <div key={index} className="relative pl-16 md:pl-0 md:text-center">
                <div className="absolute left-0 top-0 md:relative md:mx-auto md:mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your IEEE Journey
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Your Membership Coordinator</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-600">👤</span>
                  <p className="text-gray-700"><strong>Name:</strong> Vinayak Agasimani</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-600">✉️</span>
                  <p className="text-gray-700"><strong>Email:</strong>vinayakagasimani1@gmail.com</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-600">📱</span>
                  <p className="text-gray-700"><strong>Phone:</strong>+91 81238 95082</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Membership;