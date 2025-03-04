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
    <footer className="relative bg-gray-900 text-gray-300 pt-10 pb-6 font-poppins">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12"
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

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">

          {/* Column 1 - Get Help */}
          <div className="text-center md:text-left">
            <h5 className="text-white font-semibold mb-4">Get Help</h5>
            <ul className="space-y-2">
              <li><a href="https://www.ieee.org/" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">IEEE</a></li>
              <li><a href="https://wie.ieee.org/" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">WIE</a></li>
              <li><a href="https://www.ieeer10.org/" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">IEEE Region 10</a></li>
              <li><a href="https://ieeebangalore.org/" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">IEEE Bangalore Section</a></li>
              <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">IEEE Xplore</a></li>
            </ul>
          </div>

          {/* Column 2 - Social Media */}
          <div className="text-center">
            <h5 className="text-white font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 transition duration-300 ease-in-out">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                <i className="fab fa-linkedin text-white"></i>
              </a>
            </div>
          </div>

          {/* Column 3 - Community */}
          <div className="text-center md:text-right">
            <h5 className="text-white font-semibold mb-4">Community</h5>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/ieee_jce?igsh=NWNtcTlmYml1OHMw" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/ieee-jce-3b71022b9/" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">LinkedIn</a></li>
              <li><a href="https://twitter.com/IEEE_JCE" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">Twitter</a></li>
              <li><a href="https://chat.whatsapp.com/Jy9bjM9GZs11bMPZ8trhWO" className="hover-text text-white no-underline transition-all duration-300 ease-in-out hover:text-blue-400">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} IEEE | Jain College of Engineering, Belagavi
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;