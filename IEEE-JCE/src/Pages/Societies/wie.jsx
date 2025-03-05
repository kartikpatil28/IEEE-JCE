import React from "react";

const WIE = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        {/* Left Section: Text Content */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            IEEE Women In Engineering
          </h1>
          <p className="text-lg md:text-xl">
            Connecting, supporting, and inspiring females worldwide, and
            facilitating their recruitment and retention in STEM fields. IEEE WIE
            actively encourages participation from all individuals, regardless of
            gender or background.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-800 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition">
              <i rel="https://wie.ieee.org/">ABOUT IEEE WIE</i>
            </button>
            <button className="bg-white text-blue-800 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition">
              JOIN WIE
            </button>
          </div>
        </div>

        {/* Right Section: Image Placeholder */}
        <div className="mt-8 md:mt-0">
          <div className="w-96 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="p-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About IEEE WIE
          </h2>
          <p className="text-lg text-gray-600">
            IEEE Women in Engineering (WIE) is one of the largest international
            professional organizations dedicated to promoting women engineers and
            scientists. It aims to inspire and support women worldwide in pursuing
            careers in engineering and technology.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Workshop Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Workshops</h3>
              <p className="text-gray-600">
                Hands-on workshops for skill development.
              </p>
            </div>

            {/* Mentorship Program Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Mentorship Programs
              </h3>
              <p className="text-gray-600">
                Mentorship programs to guide aspiring engineers.
              </p>
            </div>

            {/* Networking Events Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Networking Events
              </h3>
              <p className="text-gray-600">
                Events to connect with industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIE;