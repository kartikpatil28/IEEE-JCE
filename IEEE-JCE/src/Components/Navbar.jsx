import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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
    navigate(path); // Navigate to the selected society page
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Execoms", path: "/execoms" },
    { name: "Contact", path: "/contact" },
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
          {/* <h1 className="text-2xl font-bold text-white">IEEE JCE</h1> */}
        </div>

        {/* Mobile View: Hamburger Icon */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:gap-6 text-base font-medium ${
            isMenuOpen
              ? "flex flex-col absolute top-14 left-0 w-full bg-black/90 backdrop-blur-sm px-6 py-4 shadow-lg"
              : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="relative">
              <NavLink
                to={link.path}
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
              className="px-4 py-2 transition-all duration-200 relative no-underline flex flex-col items-center text-gray-300 hover:text-white"
              onClick={() => setIsSocietiesOpen(!isSocietiesOpen)}
            >
              Societies
              {(isSocietiesOpen || activeSociety) && ( // Show underline if dropdown is open or a society is active
                <motion.div
                  layoutId="underline"
                  className="w-full h-[2px] bg-white"
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
                className="absolute top-10 left-0 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 w-48"
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
      </div>
    </nav>
  );
}

export default Navbar;