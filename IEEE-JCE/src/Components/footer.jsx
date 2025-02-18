import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-800 text-white py-8 mt-6 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Follow Us Section */}
          <div>
            <h5 className="font-bold text-white">Follow Us On Social Media</h5>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="https://www.instagram.com/ieee_jce?igsh=NWNtcTlmYml1OHMw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="https://www.linkedin.com/in/ieee-jce-3b71022b9/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a href="https://twitter.com/IEEE_JCE" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="https://chat.whatsapp.com/Jy9bjM9GZs11bMPZ8trhWO" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>
          
          {/* Connect with IEEE Section */}
          <div>
            <h5 className="font-bold text-white">Connect with IEEE</h5>
            <ul className="list-none mt-2 space-y-2">
              <li><a href="https://www.ieee.org/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">IEEE</a></li>
              <li><a href="https://wie.ieee.org/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">WIE</a></li>
              <li><a href="https://www.ieeer10.org/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">IEEE Region 10</a></li>
              <li><a href="https://ieeebangalore.org/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">IEEE Bangalore Section</a></li>
              <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">IEEE Xplore</a></li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h5 className="font-bold text-white">Quick Links</h5>
            <ul className="list-none mt-2 space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white">Execom 2024</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-300 mt-6">
          &copy; {new Date().getFullYear()} IEEE | Jain College of Engineering, Belagavi
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Back to Top"
        >
          &#8679;
        </button>
      )}
    </footer>
  );
};

export default Footer;