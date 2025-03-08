import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import logos (ensure the paths are correct)
import ieeeOfficialLogo from "../assets/Logos/wie-logo.png";
import ieeeLogo from "../assets/Logos/NKSS-logo.jpeg";
import jceLogo from "../assets/Logos/JCE.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocietiesOpen, setIsSocietiesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");
  const [activeSociety, setActiveSociety] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSocietiesClick = (path, society) => {
    setActiveSociety(society);
    setIsSocietiesOpen(false);
    setActiveTab(null);
    navigate(path);
  };

  const handleLinkClick = (path) => {
    setActiveTab(path);
    setIsSocietiesOpen(false);
    setActiveSociety(null);
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Execom", path: "/execoms" },
    { name: "Contact", path: "/contact" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <nav 
      className={`w-full shadow-lg px-6 py-3 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md" 
          : "bg-black/90 backdrop-blur-sm"
      } text-white sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Improved Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Logo container with subtle glass effect */}
            <div className="bg-white/5 p-1 lg:p-2 rounded-xl flex items-center shadow-lg border border-white/10">
              <img
                src={ieeeOfficialLogo}
                alt="IEEE Official Logo"
                className="h-8 lg:h-10 object-contain"
              />
              
              {/* Divider */}
              <div className="h-8 lg:h-10 w-px bg-white/20 mx-2"></div>
              
              <img
                src={ieeeLogo}
                alt="IEEE JCE Logo"
                className="h-8 lg:h-10 object-contain"
              />
              
              {/* Divider */}
              <div className="h-8 lg:h-10 w-px bg-white/20 mx-2"></div>
              
              <img
                src={jceLogo}
                alt="JCE Logo"
                className="h-8 lg:h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile View: Hamburger Icon with improved styling */}
        <button
          className="lg:hidden text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>

        {/* Desktop Navigation Links with improved spacing and hover effects */}
        <ul className="hidden lg:flex lg:items-center lg:gap-2 text-base font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative">
              <NavLink
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={({ isActive }) => {
                  if (isActive) setActiveTab(link.path);
                  return `px-4 py-2 rounded-lg transition-all duration-200 relative no-underline flex flex-col items-center ${
                    isActive 
                      ? "text-white font-semibold bg-white/10" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`;
                }}
              >
                {link.name}
                {activeTab === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="w-2/3 h-[2px] bg-white absolute -bottom-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </NavLink>
            </li>
          ))}

          {/* Societies Dropdown with improved styling */}
          <li
            className="relative"
            onMouseEnter={() => setIsSocietiesOpen(true)}
            onMouseLeave={() => setIsSocietiesOpen(false)}
          >
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-200 relative no-underline flex items-center ${
                isSocietiesOpen || activeSociety
                  ? "text-white font-semibold bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => {
                setIsSocietiesOpen(!isSocietiesOpen);
                setActiveTab(null);
              }}
            >
              Societies
              <i className={`fa fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isSocietiesOpen ? "rotate-180" : ""}`}></i>
              {(isSocietiesOpen || activeSociety) && (
                <motion.div
                  layoutId="underline"
                  className="w-2/3 h-[2px] bg-white absolute -bottom-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
            {isSocietiesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 left-0 bg-black/95 backdrop-blur-md rounded-lg shadow-lg py-2 w-52 border border-white/10"
              >
                <button
                  onClick={() => handleSocietiesClick("/societies/aess", "AESS")}
                  className={`block px-4 py-3 w-full text-left ${
                    activeSociety === "AESS"
                      ? "text-white font-semibold bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  } transition-colors`}
                >
                  AESS
                </button>
                <button
                  onClick={() => handleSocietiesClick("/societies/cs", "CS")}
                  className={`block px-4 py-3 w-full text-left ${
                    activeSociety === "CS"
                      ? "text-white font-semibold bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  } transition-colors`}
                >
                  Computer Society (CS)
                </button>
                <button
                  onClick={() => handleSocietiesClick("/societies/wie", "WIE")}
                  className={`block px-4 py-3 w-full text-left ${
                    activeSociety === "WIE"
                      ? "text-white font-semibold bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  } transition-colors`}
                >
                  Women in Engineering (WIE)
                </button>
              </motion.div>
            )}
          </li>
        </ul>

        {/* Improved Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-100 lg:hidden flex justify-end"
              onClick={(e) => {
                if (e.target === e.currentTarget) toggleMenu();
              }}
            >
              {/* Mobile Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-4/5 h-full bg-black/95 rounded-l-2xl shadow-2xl p-6 border-l border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Navigation</h2>
                  <button
                    onClick={toggleMenu}
                    className="text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close Menu"
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                
                {/* Mobile logo display */}
                <div className="mb-8 bg-white/5 p-3 rounded-xl flex items-center justify-center border border-white/10">
                  <img src={ieeeOfficialLogo} alt="IEEE Official Logo" className="h-8 mr-3" />
                  <img src={ieeeLogo} alt="IEEE JCE Logo" className="h-8 mr-3" />
                  <img src={jceLogo} alt="JCE Logo" className="h-8" />
                </div>
                
                <ul className="flex flex-col gap-4 text-lg font-medium">
                  {links.map((link) => (
                    <li key={link.name} className="relative">
                      <NavLink
                        to={link.path}
                        onClick={() => {
                          toggleMenu();
                          handleLinkClick(link.path);
                        }}
                        className={({ isActive }) => {
                          if (isActive) setActiveTab(link.path);
                          return `px-4 py-3 rounded-lg transition-all duration-200 block ${
                            isActive 
                              ? "text-white font-semibold bg-white/10" 
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`;
                        }}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}

                  {/* Societies Dropdown in Mobile Menu */}
                  <li className="relative">
                    <button
                      className={`px-4 py-3 rounded-lg w-full text-left flex items-center justify-between ${
                        isSocietiesOpen ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                      } transition-colors`}
                      onClick={() => setIsSocietiesOpen(!isSocietiesOpen)}
                    >
                      Societies
                      <i className={`fa fa-chevron-down text-sm transition-transform duration-200 ${isSocietiesOpen ? "rotate-180" : ""}`}></i>
                    </button>
                    <AnimatePresence>
                      {isSocietiesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 bg-white/5 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => {
                              handleSocietiesClick("/societies/aess", "AESS");
                              toggleMenu();
                            }}
                            className={`block px-4 py-3 w-full text-left ${
                              activeSociety === "AESS"
                                ? "text-white font-semibold bg-white/10"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                            } transition-colors`}
                          >
                            AESS
                          </button>
                          <button
                            onClick={() => {
                              handleSocietiesClick("/societies/cs", "CS");
                              toggleMenu();
                            }}
                            className={`block px-4 py-3 w-full text-left ${
                              activeSociety === "CS"
                                ? "text-white font-semibold bg-white/10"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                            } transition-colors`}
                          >
                            Computer Society (CS)
                          </button>
                          <button
                            onClick={() => {
                              handleSocietiesClick("/societies/wie", "WIE");
                              toggleMenu();
                            }}
                            className={`block px-4 py-3 w-full text-left ${
                              activeSociety === "WIE"
                                ? "text-white font-semibold bg-white/10"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                            } transition-colors`}
                          >
                            Women in Engineering (WIE)
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
                
                {/* Social links/footer in mobile menu */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">IEEE Student Branch, JCE</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-300 hover:text-white text-xl w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white text-xl w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white text-xl w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;