import React from "react";

const WIE = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section - Black Theme with Larger WIE Title */}
      <div className="p-8 bg-gradient-to-r from-gray-900 to-purple-900 text-white text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-2">Women in Engineering</h1>
        <h2 className="text-xl mb-6">IEEE JCE Student Branch</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg">
            Empowering women in technology through community, resources, and opportunities. 
            We promote diversity and inclusion in STEM fields by creating supportive spaces 
            for learning, networking, and professional growth.
          </p>
        </div>
      </div>
      
      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-700">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">Vision</h2>
              <p className="text-gray-300">
                To be a leading community that promotes diversity in engineering and technology fields, 
                ensuring equal opportunities for all, especially women, to pursue and excel in STEM careers.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-700">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">Mission</h2>
              <p className="text-gray-300">
                To inspire, engage, encourage, and empower women in engineering and technology by creating 
                a supportive network, providing educational resources, and promoting professional development 
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Committee Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
            Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advisor */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img src="/api/placeholder/300/300" alt="Faculty Advisor" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">Dr. Jennifer Wilson</h3>
                  <p className="text-purple-400 font-semibold mb-3">Faculty Advisor</p>
                  <p className="text-gray-400 text-sm">
                    Associate Professor, Department of Electrical Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Ph.D. in Electrical Engineering, MIT
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Email: jennifer.wilson@jce.edu
                  </p>
                </div>
              </div>
            </div>
            
            {/* Coordinator */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img src="/api/placeholder/300/300" alt="Student Coordinator" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">Samantha Chen</h3>
                  <p className="text-purple-400 font-semibold mb-3">Student Coordinator</p>
                  <p className="text-gray-400 text-sm">
                    Final Year, Computer Science Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    IEEE Student Member since 2023
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Email: samantha.chen@student.jce.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Committee Members */}
          <h3 className="text-2xl font-bold text-center text-purple-400 mt-12 mb-6">
            Committee Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Member 1 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700">
              <img src="/api/placeholder/150/150" alt="Committee Member" className="w-24 h-24 object-cover rounded-full mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Priya Sharma</h4>
              <p className="text-purple-400">Secretary</p>
            </div>
            
            {/* Member 2 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700">
              <img src="/api/placeholder/150/150" alt="Committee Member" className="w-24 h-24 object-cover rounded-full mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Maria Rodriguez</h4>
              <p className="text-purple-400">Treasurer</p>
            </div>
            
            {/* Member 3 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700">
              <img src="/api/placeholder/150/150" alt="Committee Member" className="w-24 h-24 object-cover rounded-full mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Lisa Wang</h4>
              <p className="text-purple-400">Events Coordinator</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Section - Black Theme */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
            Events Conducted
          </h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src="/api/placeholder/400/300" alt="Workshop Event" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Technical Workshop on IoT</h3>
                    <span className="text-sm bg-purple-900 text-purple-200 px-2 py-1 rounded">Feb 15, 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A hands-on workshop exploring the fundamentals of Internet of Things (IoT) and its applications
                    in solving real-world problems. Participants learned about sensors, microcontrollers, and 
                    cloud connectivity.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">50+ Attendees</span>
                    <span>Main Seminar Hall</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src="/api/placeholder/400/300" alt="Panel Discussion" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Women in Tech Panel Discussion</h3>
                    <span className="text-sm bg-purple-900 text-purple-200 px-2 py-1 rounded">Jan 22, 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    An inspiring panel discussion featuring successful women engineers from top tech companies
                    sharing their experiences, challenges, and advice for aspiring engineers.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">100+ Attendees</span>
                    <span>Virtual and In-person</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src="/api/placeholder/400/300" alt="Coding Competition" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Code Her Way - Hackathon</h3>
                    <span className="text-sm bg-purple-900 text-purple-200 px-2 py-1 rounded">Dec 10, 2024</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A 24-hour hackathon focused on solving problems related to women's health, safety, and
                    empowerment through technology. Teams presented innovative solutions to industry judges.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">15 Teams</span>
                    <span>Computer Science Labs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Section - Black Theme */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
            <div className="bg-gray-800 p-2 rounded shadow border border-gray-700">
              <img src="/api/placeholder/300/300" alt="WIE Event" className="w-full h-40 object-cover rounded" />
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-600 transition">
              View More Photos
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Section - Black Theme */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            Have questions or want to get involved? Reach out to us!
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> wie@jce.edu
          </p>
          <p className="text-gray-300">
            <strong>Instagram:</strong> @ieee_wie_jce
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition">f</button>
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition">in</button>
            <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-purple-700 transition">t</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIE;