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
    <footer className="relative bg-gray-900 text-gray-300 py-10 font-poppins">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">

          {/* Column 1 - Company Info */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4 border-b-2 border-gray-500 inline-block">IEEE JCE</h5>
            <ul className="space-y-2">
              <li><a href="/" className="hover-text text-white text-lg no-underline leading-loose transition-all duration-300 ease-in-out hover:text-xl">About</a></li>
              <li><a href="/events" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">Events</a></li>
              <li><a href="/team" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">Execom 2024</a></li>
              <li><a href="/contact" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 - Get Help */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4 border-b-2 border-gray-500 inline-block">Get Help</h5>
            <ul className="space-y-2">
              <li><a href="https://www.ieee.org/" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">IEEE</a></li>
              <li><a href="https://wie.ieee.org/" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">WIE</a></li>
              <li><a href="https://www.ieeer10.org/" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">IEEE Region 10</a></li>
              <li><a href="https://ieeebangalore.org/" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">IEEE Bangalore Section</a></li>
              <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">IEEE Xplore</a></li>
            </ul>
          </div>

          {/* Column 3 - Community */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4 border-b-2 border-gray-500 inline-block">Community</h5>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/ieee_jce?igsh=NWNtcTlmYml1OHMw" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/ieee-jce-3b71022b9/" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">LinkedIn</a></li>
              <li><a href="https://twitter.com/IEEE_JCE" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">Twitter</a></li>
              <li><a href="https://chat.whatsapp.com/Jy9bjM9GZs11bMPZ8trhWO" className="hover-text text-white no-underline leading-loose transition-all duration-300 ease-in-out hover:text-lg">WhatsApp</a></li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4 border-b-2 border-gray-500 inline-block">Follow Us</h5>
            <div className="flex gap-4 mt-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition duration-500 ease-in-out">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-400 transition duration-500 ease-in-out">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-pink-500 transition duration-500 ease-in-out">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-700 transition duration-500 ease-in-out">
                <i className="fab fa-linkedin text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} IEEE | Jain College of Engineering, Belagavi
        </div>
      </div>
    </footer>
  );
};

export default Footer;