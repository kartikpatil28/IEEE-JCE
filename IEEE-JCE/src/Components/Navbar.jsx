import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Logos
const ieeeOfficialLogo = "https://www.wyb.ac.lk/wp-content/uploads/2021/10/IEEE-Logo-1024x576.jpg"; // Official IEEE logo
const ieeeLogo = "src/assets/logos/NKSS-logo.jpeg"; // Your IEEE JCE logo
const jceLogo = "src/assets/logos/JCE.png"; // JCE logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocietiesOpen, setIsSocietiesOpen] = useState(false); // State for Societies dropdown
  const [activeTab, setActiveTab] = useState("/home");
  const [activeSociety, setActiveSociety] = useState(null); // State to track active society
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSocietiesClick = (path, society) => {
    setActiveSociety(society); // Set the active society
    setIsSocietiesOpen(false); // Close the dropdown
    setActiveTab(null); // Clear active tab
    navigate(path); // Navigate to the selected society page
  };

  const handleLinkClick = (path) => {
    setActiveTab(path); // Set the active tab
    setIsSocietiesOpen(false); // Close the societies dropdown
    setActiveSociety(null); // Clear active society
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Execoms", path: "/execoms" },
    { name: "Contact", path: "/contact" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <nav className="w-full shadow-lg px-6 py-3 bg-black/90 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src={ieeeOfficialLogo}
            alt="IEEE Official Logo"
            className="h-12 rounded-lg shadow-md border-2 border-white/10"
          />
          <img
            src={ieeeLogo}
            alt="IEEE JCE Logo"
            className="h-12 rounded-lg shadow-md border-2 border-white/10"
          />
          <img
            src={jceLogo}
            alt="JCE Logo"
            className="h-12 rounded-lg shadow-md border-2 border-white/10"
          />
        </div>

        {/* Mobile View: Hamburger Icon */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex lg:items-center lg:gap-6 text-base font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative">
              <NavLink
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={({ isActive }) => {
                  if (isActive) setActiveTab(link.path);
                  return `px-4 py-2 transition-all duration-200 relative no-underline flex flex-col items-center ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`;
                }}
              >
                {link.name}
                {activeTab === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="w-full h-[2px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </NavLink>
            </li>
          ))}

          {/* Societies Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsSocietiesOpen(true)}
            onMouseLeave={() => setIsSocietiesOpen(false)}
          >
            <button
              className="px-4 py-2 transition-all duration-200 relative no-underline flex items-center text-gray-300 hover:text-white"
              onClick={() => {
                setIsSocietiesOpen(!isSocietiesOpen);
                setActiveTab(null); // Clear active tab when Societies is clicked
              }}
            >
              Societies
              <i className={`fa fa-chevron-down ml-2 text-sm ${isSocietiesOpen ? "rotate-180" : ""}`}></i>
              {(isSocietiesOpen || activeSociety) && (
                <motion.div
                  layoutId="underline"
                  className="w-full h-[2px] bg-white absolute bottom-0"
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
                className="absolute top-10 left-0 bg-black rounded-lg shadow-lg py-2 w-48"
              >
                <button
                  onClick={() => handleSocietiesClick("/societies/aess", "AESS")}
                  className={`block px-4 py-2 w-full text-left ${
                    activeSociety === "AESS"
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  } hover:bg-white/10`}
                >
                  AESS
                </button>
                <button
                  onClick={() => handleSocietiesClick("/societies/cs", "CS")}
                  className={`block px-4 py-2 w-full text-left ${
                    activeSociety === "CS"
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  } hover:bg-white/10`}
                >
                  Computer Society (CS)
                </button>
                <button
                  onClick={() => handleSocietiesClick("/societies/wie", "WIE")}
                  className={`block px-4 py-2 w-full text-left ${
                    activeSociety === "WIE"
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  } hover:bg-white/10`}
                >
                  Women in Engineering (WIE)
                </button>
              </motion.div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-50 lg:hidden flex justify-end" // Fully opaque black background
            >
              {/* Mobile Menu Content */}
              <motion.div
                className="w-3/4 h-full bg-black rounded-l-lg shadow-2xl p-6" // Reduced width, rounded border, and padding
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={toggleMenu}
                    className="text-white text-2xl"
                    aria-label="Close Menu"
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <ul className="flex flex-col gap-6 text-xl font-medium mt-10">
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
                          return `px-4 py-2 transition-all duration-200 relative no-underline flex flex-col items-center ${
                            isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                          }`;
                        }}
                      >
                        {link.name}
                        {activeTab === link.path && (
                          <motion.div
                            layoutId="underline"
                            className="w-full h-[2px] bg-white"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        )}
                      </NavLink>
                    </li>
                  ))}

                  {/* Societies Dropdown in Mobile Menu */}
                  <li className="relative">
                    <button
                      className="px-4 py-2 transition-all duration-200 relative no-underline flex items-center text-gray-300 hover:text-white"
                      onClick={() => setIsSocietiesOpen(!isSocietiesOpen)}
                    >
                      Societies
                      <i className={`fa fa-chevron-down ml-2 text-sm ${isSocietiesOpen ? "rotate-180" : ""}`}></i>
                    </button>
                    {isSocietiesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-black rounded-lg shadow-lg py-2 w-full"
                      >
                        <button
                          onClick={() => {
                            handleSocietiesClick("/societies/aess", "AESS");
                            toggleMenu();
                          }}
                          className={`block px-4 py-2 w-full text-left ${
                            activeSociety === "AESS"
                              ? "text-white font-semibold"
                              : "text-gray-300 hover:text-white"
                          } hover:bg-white/10`}
                        >
                          AESS
                        </button>
                        <button
                          onClick={() => {
                            handleSocietiesClick("/societies/cs", "CS");
                            toggleMenu();
                          }}
                          className={`block px-4 py-2 w-full text-left ${
                            activeSociety === "CS"
                              ? "text-white font-semibold"
                              : "text-gray-300 hover:text-white"
                          } hover:bg-white/10`}
                        >
                          Computer Society (CS)
                        </button>
                        <button
                          onClick={() => {
                            handleSocietiesClick("/societies/wie", "WIE");
                            toggleMenu();
                          }}
                          className={`block px-4 py-2 w-full text-left ${
                            activeSociety === "WIE"
                              ? "text-white font-semibold"
                              : "text-gray-300 hover:text-white"
                          } hover:bg-white/10`}
                        >
                          Women in Engineering (WIE)
                        </button>
                      </motion.div>
                    )}
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;