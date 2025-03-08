import React from "react";

const ComputerSocietyStudentChapter = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: "Chapter Workshop 2024",
      description: "Hands-on coding workshop organized by our student chapter",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Student Hackathon",
      description: "Students collaborating on innovative projects during our campus hackathon",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Industry Visit",
      description: "Our members visiting local tech companies to learn about industry practices",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Technical Talk Series",
      description: "Guest lectures from industry professionals and faculty experts",
      thumbnail: "/api/placeholder/400/300",
    }
  ];

  // Technical content resources
  const contentResources = [
    {
      id: 1,
      title: "Getting Started with AI",
      type: "Workshop Materials",
      description: "Resources from our introductory AI workshop series",
      tags: ["AI", "Beginners", "Python"],
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      type: "Tutorial Series",
      description: "Step-by-step guides to building responsive web applications",
      tags: ["Web Dev", "HTML/CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Competitive Programming Guide",
      type: "Resource Pack",
      description: "Preparation materials for coding competitions and challenges",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      id: 4,
      title: "Open Source Contribution Path",
      type: "Guide",
      description: "How to start contributing to open source projects as a student",
      tags: ["Open Source", "Git", "Community"],
    },
  ];

  // Team member positions (placeholder for future elections)
  const teamPositions = [
    {
      id: 1,
      position: "Chairperson",
      responsibilities: "Overall leadership of the student chapter and coordination with faculty advisor",
      requirements: "Strong leadership skills and active chapter membership"
    },
    {
      id: 2,
      position: "Vice-Chairperson",
      responsibilities: "Supporting the Chair and managing committee operations",
      requirements: "Organizational skills and commitment to chapter growth"
    },
    {
      id: 3,
      position: "Secretary",
      responsibilities: "Managing communications, meeting minutes, and member records",
      requirements: "Detail-oriented with excellent documentation skills"
    },
    {
      id: 4,
      position: "Treasurer",
      responsibilities: "Handling chapter finances, fundraising, and budget planning",
      requirements: "Basic financial knowledge and responsibility"
    },
    {
      id: 5,
      position: "Events Coordinator",
      responsibilities: "Planning workshops, technical talks, and social events",
      requirements: "Event planning experience and creativity"
    },
    {
      id: 6,
      position: "Technical Lead",
      responsibilities: "Developing technical content and managing projects",
      requirements: "Technical expertise and teaching ability"
    }
  ];

  // Faculty coordinators and counselors
  const facultyAdvisors = [
    {
      id: 1,
      name: "To Be Announced",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      description: "The Faculty Coordinator serves as the main point of contact between the student chapter and the department, providing guidance on academic integration of chapter activities.",
      status: "To be appointed"
    },
    {
      id: 2,
      name: "To Be Announced",
      role: "Chapter Counselor",
      department: "IEEE Computer Society",
      description: "The Chapter Counselor is an IEEE Computer Society member who provides mentorship and ensures alignment with IEEE's mission and standards.",
      status: "To be appointed"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white text-blue-900 font-bold text-2xl py-2 px-4 rounded-md shadow-md">
              IEEE CS
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-2">IEEE Computer Society Student Chapter</h1>
          <p className="text-xl text-center text-blue-100">Building Tomorrow's Tech Leaders Today</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Vision & Mission Section */}
        <section className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="text-3xl mr-3">🔭</span> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To create a vibrant community of student technologists who will become the next generation of leaders and innovators in computer science and engineering.
              </p>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="text-3xl mr-3">🎯</span> Our Mission
              </h2>
              <p className="text-gray-700 mb-3">As a student chapter, we are dedicated to:</p>
              <ul className="text-gray-700 space-y-2 pl-5 list-disc">
                <li>Bridging the gap between classroom learning and industry applications</li>
                <li>Providing hands-on experience through workshops and projects</li>
                <li>Creating networking opportunities with professionals and peers</li>
                <li>Fostering innovation through hackathons and technical competitions</li>
                <li>Supporting career development of our student members</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Faculty Advisors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Faculty Guidance</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {facultyAdvisors.map((advisor) => (
              <div key={advisor.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">{advisor.role}</h3>
                  <p className="text-blue-100 text-sm mt-1">{advisor.department}</p>
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Status: <span className="text-yellow-600">{advisor.status}</span></h4>
                    <p className="text-gray-600 text-sm">{advisor.description}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      Once appointed, the name and contact information of our {advisor.role.toLowerCase()} will be updated here.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Chapter Leadership</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Elections Coming Soon!</h3>
            <p className="text-gray-700">
              We are currently in the process of establishing our executive committee. Elections for the positions listed below will be held soon. Once elected, the names and contact information of all team members will be updated here.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {teamPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">{position.position}</h3>
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-1">Responsibilities:</h4>
                    <p className="text-gray-600 text-sm">{position.responsibilities}</p>
                  </div>
                  <div className="mb-5">
                    <h4 className="font-bold text-gray-800 mb-1">Requirements:</h4>
                    <p className="text-gray-600 text-sm">{position.requirements}</p>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    I'm Interested
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-2">How to Apply</h3>
            <p className="text-gray-700">
              Interested in running for a position? Attend our information session on April 15th at 5 PM in the Computer Science Building, Room 201. You can also email us at <strong className="text-blue-700">ieeecssc@university.edu</strong> for more details.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Our Student Chapter</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The IEEE Computer Society Student Chapter at our university connects students passionate about computing with resources, opportunities, and a global network of professionals. We organize technical workshops, industry talks, project collaborations, and social events to enhance the student experience beyond the classroom and prepare members for successful careers in technology.
          </p>
        </section>

        {/* Key Initiatives Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-blue-500">💻</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Technical Workshops</h3>
              <p className="text-gray-600">
                Hands-on sessions on web development, AI/ML, cybersecurity, and other in-demand skills.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-yellow-500">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Campus Hackathons</h3>
              <p className="text-gray-600">
                24-hour coding challenges where students collaborate to build innovative solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-green-500">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industry Connections</h3>
              <p className="text-gray-600">
                Company visits, guest lectures, and networking events with industry professionals.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-purple-500">👥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Peer Mentorship</h3>
              <p className="text-gray-600">
                Knowledge sharing between senior and junior students through project collaboration and study groups.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Chapter Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image.thumbnail} 
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contentResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="flex items-center p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-lg text-center p-3 w-24">
                  <div className="text-sm uppercase">Apr</div>
                  <div className="text-2xl">15</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800">Leadership Info Session</h3>
                  <p className="text-gray-600">CS Building, Room 201, 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-lg text-center p-3 w-24">
                  <div className="text-sm uppercase">Apr</div>
                  <div className="text-2xl">22</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800">Web Development Workshop: React Basics</h3>
                  <p className="text-gray-600">Engineering Lab, 6:30 PM</p>
                </div>
              </div>
              <div className="flex items-center p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-lg text-center p-3 w-24">
                  <div className="text-sm uppercase">May</div>
                  <div className="text-2xl">5-6</div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800">Spring Hackathon: Sustainable Tech</h3>
                  <p className="text-gray-600">Student Union, Main Hall</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComputerSocietyStudentChapter;