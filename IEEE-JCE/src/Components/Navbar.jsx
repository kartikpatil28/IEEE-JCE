import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

// Dummy Logos (Replace with your actual logos later)
const ieeeLogo = "src/assets/NKSS-logo.jpeg"; // Replace with IEEE logo
const jceLogo = "src/assets/JCE.png"; // Replace with JCE logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Execoms", path: "/execoms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-lg px-6 py-3 bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={ieeeLogo} alt="IEEE Logo" className="h-10 rounded-lg shadow-md" />
          <img src={jceLogo} alt="JCE Logo" className="h-10 rounded-lg shadow-md" />
          <h1 className="text-2xl font-bold text-white">IEEE JCE</h1>
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
              ? "flex flex-col absolute top-14 left-0 w-full bg-black/80 backdrop-blur-sm px-6 py-4 shadow-lg"
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;