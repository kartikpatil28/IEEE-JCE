import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-8 sm:pt-10 pb-4 sm:pb-6 font-poppins">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            className="fill-current text-gray-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.5"
            className="fill-current text-gray-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-gray-800"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-sm">
          {/* Column 1 - Join IEEE */}
          <div className="text-center sm:text-left space-y-3">
            <h5 className="text-white font-semibold text-base sm:text-lg mb-2">Join IEEE</h5>
            <p className="text-sm">
              Unlock opportunities, connect with peers, and access exclusive resources by joining IEEE.
            </p>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 text-sm rounded-full hover:bg-blue-700 transition duration-300"
            >
              Join IEEE Today!
            </a>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="text-center sm:text-left">
            <h5 className="text-white font-semibold text-base sm:text-lg mb-2">Useful Links</h5>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 text-sm">
              <a href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">About Us</a>
              <a href="/events" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">Events</a>
              <a href="/membership" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">Membership</a>
              <a href="https://www.ieee.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">IEEE</a>
              <a href="https://www.ieeer10.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">Region 10</a>
              <a href="https://ieeebangalore.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 py-1">Bangalore Section</a>
            </div>
          </div>

          {/* Column 3 - Societies */}
          <div className="text-center sm:text-left">
            <h5 className="text-white font-semibold text-base sm:text-lg mb-2">Societies</h5>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 text-sm">
              <a href="https://www.computer.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">Computer Society</a>
              <a href="https://wie.ieee.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">Women in Engineering</a>
              <a href="https://ieee-aess.org/" className="text-gray-300 hover:text-blue-400 transition duration-300 no-underline py-1">AESS</a>
            </div>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="text-center sm:text-left">
            <h5 className="text-white font-semibold text-base sm:text-lg mb-2">Contact Us</h5>
            <address className="text-sm not-italic space-y-1">
              <p>599/2 T.S. Nagar Hunchanhatti Road</p>
              <p>Macche Belagavi 590014</p>
              <p>Phone: +91 831 2411192</p>
              <p>Email: info[at]jainbgm.in</p>
            </address>
            {/* Social Media Links */}
            <div className="mt-4 flex justify-center sm:justify-start space-x-6">
              <a
                href="https://wa.me/your-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition duration-300"
              >
                <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/your-instagram-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-instagram text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/your-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/your-x-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-900 transition duration-300"
              >
                <i className="fa-brands fa-x-twitter text-xl sm:text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8 space-y-1">
          <p>&copy; {new Date().getFullYear()} All rights reserved JCE IEEE</p>
          <p>Made with ❤️ by JCE IEEE Web Team 2025</p>
          <p className="text-xs">Address: #599/2 T.S. Nagar Hunchanhatti Road Macche Belagavi 590014</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <i className="fas fa-arrow-up text-sm sm:text-base"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer; 