import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import logos (ensure the paths are correct)
import jceLogo from "../assets/Logos/JCE-logo.png";

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

  const ieeeLinks = [
    { name: "IEEE.org", url: "https://www.ieee.org/" },
    {
      name: "IEEE Xplore Digital Library",
      url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    },
    { name: "IEEE Bangalore Section", url: "https://ieeebangalore.org/" },
    { name: "IEEE NKSS", url: "https://r10.ieee.org/north-karnataka/" },
    { name: "IEEE JCE", url: "https://www.jce.ac.in/ieee-sb/" },
    { name: "vTools", url: "https://vtools.vtools.ieee.org/" },
    { name: "More Sites", url: "https://www.ieee.org/sitemap.html" },
  ];

  const socialLinks = [
    { icon: "instagram", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "twitter", url: "#" },
  ];

  return (
    <>
      {/* IEEE Global Navigation Bar - Hidden on mobile, visible on medium screens and up */}
      <div className="w-full bg-black text-sm border-b border-blue-900 shadow-sm py-2 hidden md:block">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          {/* IEEE Links on left */}
          <ul className="flex flex-wrap space-x-2 md:space-x-5">
            {ieeeLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.name === "More Sites" ? (
                  // Use NavLink for internal navigation to the Important Links page
                  <NavLink
                    to={link.url}
                    className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap no-underline"
                    onClick={() => handleLinkClick(link.url)}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                ) : (
                  // Keep external links as regular anchor tags
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap no-underline"
                  >
                    {link.name === "IEEE Xplore Digital Library" ? (
                      <>
                        IEEE <span className="italic">Xplore</span> Digital
                        Library
                      </>
                    ) : (
                      link.name
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* IEEE Logo on right */}
          <div>
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold text-base hover:text-blue-300 transition-colors flex items-center"
            >
              <img
                src="https://th.bing.com/th/id/OIP.osv4XzTeSthNwsC0hE16_AAAAA?w=420&h=123&rs=1&pid=ImgDetMain"
                className="h-8"
                alt="IEEE Logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full shadow-xl px-4 md:px-6 py-1 ${
          scrolled ? "bg-black/95 backdrop-blur-md" : "bg-black"
        } text-white sticky top-0 z-50 transition-all duration-300 border-b border-white/10`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={jceLogo}
              alt="JCE Logo"
              className="h-24 md:h-16 object-contain filter drop-shadow-md hover:brightness-110 transition-all"
            />
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2 text-base font-medium">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={({ isActive }) => {
                      if (isActive) setActiveTab(link.path);
                      return `px-3 py-2 rounded-lg transition-all duration-300 relative no-underline flex flex-col items-center ${
                        isActive
                          ? "text-white font-semibold bg-blue-900/30 shadow-md"
                          : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                      }`;
                    }}
                  >
                    {link.name}
                    {activeTab === link.path ? (
                      <motion.div
                        layoutId="underline"
                        className="w-2/3 h-[2px] bg-gradient-to-r from-blue-400 to-blue-500 absolute -bottom-1 rounded-full shadow-glow"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    ) : (
                      <span className="w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-500 absolute -bottom-1 rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                    )}
                  </NavLink>
                </li>
              ))}

              {/* Societies Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setIsSocietiesOpen(true)}
                onMouseLeave={() => setIsSocietiesOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-lg transition-all duration-300 relative no-underline flex items-center ${
                    isSocietiesOpen || activeSociety
                      ? "text-white font-semibold bg-blue-900/30 shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                  }`}
                  onClick={() => {
                    setIsSocietiesOpen(!isSocietiesOpen);
                    setActiveTab(null);
                  }}
                >
                  Societies
                  <i
                    className={`fa fa-chevron-down ml-2 text-sm transition-transform duration-300 ${
                      isSocietiesOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                  {isSocietiesOpen || activeSociety ? (
                    <motion.div
                      layoutId="underline"
                      className="w-2/3 h-[2px] bg-gradient-to-r from-blue-400 to-blue-500 absolute -bottom-1 rounded-full shadow-glow"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  ) : (
                    <span className="w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-500 absolute -bottom-1 rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  )}
                </button>
                <AnimatePresence>
                  {isSocietiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-12 left-0 bg-black rounded-lg shadow-xl py-2 w-56 border border-white/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 z-0"></div>
                      <button
                        onClick={() =>
                          handleSocietiesClick("/societies/aess", "AESS")
                        }
                        className={`block px-4 py-3 w-full text-left relative z-10 ${
                          activeSociety === "AESS"
                            ? "text-white font-semibold bg-blue-900/30"
                            : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                        } transition-all duration-200`}
                      >
                        AESS
                      </button>
                      <button
                        onClick={() =>
                          handleSocietiesClick("/societies/cs", "CS")
                        }
                        className={`block px-4 py-3 w-full text-left relative z-10 ${
                          activeSociety === "CS"
                            ? "text-white font-semibold bg-blue-900/30"
                            : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                        } transition-all duration-200`}
                      >
                        Computer Society (CS)
                      </button>
                      <button
                        onClick={() =>
                          handleSocietiesClick("/societies/wie", "WIE")
                        }
                        className={`block px-4 py-3 w-full text-left relative z-10 ${
                          activeSociety === "WIE"
                            ? "text-white font-semibold bg-blue-900/30"
                            : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                        } transition-all duration-200`}
                      >
                        Women in Engineering (WIE)
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            className="lg:hidden text-white bg-gradient-to-br from-white/15 to-white/5 p-2 rounded-lg hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-md border border-white/10"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i
              className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden flex justify-end"
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
                  className="w-4/5 h-full bg-black rounded-l-2xl shadow-2xl p-6 border-l border-white/10 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header with close button */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">IEEE JCE</h2>
                    <button
                      onClick={toggleMenu}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Close Menu"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>

                  {/* Logo display */}
                  <div className="mb-6 bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                    <img src={jceLogo} alt="JCE Logo" className="h-10" />
                  </div>

                  {/* Main navigation links */}
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-blue-300 mb-3 font-semibold">
                      Navigation
                    </h3>
                    <ul className="flex flex-col gap-2 text-base font-medium">
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
                              return `px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                                isActive
                                  ? "text-white font-semibold bg-blue-900/30 shadow-inner border border-white/10"
                                  : "text-gray-300 hover:text-white hover:bg-blue-900/20 border border-transparent"
                              }`;
                            }}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Societies section */}
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-blue-300 mb-3 font-semibold">
                      Societies
                    </h3>
                    <div className="bg-blue-900/20 rounded-lg overflow-hidden border border-white/10 shadow-inner">
                      <button
                        onClick={() => {
                          handleSocietiesClick("/societies/aess", "AESS");
                          toggleMenu();
                        }}
                        className="block px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                      >
                        AESS
                      </button>
                      <button
                        onClick={() => {
                          handleSocietiesClick("/societies/cs", "CS");
                          toggleMenu();
                        }}
                        className="block px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                      >
                        Computer Society (CS)
                      </button>
                      <button
                        onClick={() => {
                          handleSocietiesClick("/societies/wie", "WIE");
                          toggleMenu();
                        }}
                        className="block px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                      >
                        Women in Engineering (WIE)
                      </button>
                    </div>
                  </div>

                  {/* IEEE Links section */}
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-blue-300 mb-3 font-semibold">
                      IEEE Links
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {ieeeLinks.map((link, index) =>
                        link.name === "More Sites" ? (
                          // Use NavLink for internal navigation to the Important Links page
                          <NavLink
                            key={index}
                            to={link.url}
                            onClick={() => {
                              toggleMenu();
                              handleLinkClick(link.url);
                            }}
                            className="text-sm text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-md hover:bg-blue-800/40 transition-colors duration-200 border border-blue-700/30 shadow-sm"
                          >
                            {link.name}
                          </NavLink>
                        ) : (
                          // Keep external links as regular anchor tags
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-md hover:bg-blue-800/40 transition-colors duration-200 border border-blue-700/30 shadow-sm"
                          >
                            {link.name === "IEEE Xplore Digital Library"
                              ? "IEEE Xplore"
                              : link.name}
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* Social links/footer */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-4">
                      IEEE Student Branch, JCE
                    </p>
                    <div className="flex gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="text-gray-300 hover:text-white text-xl w-10 h-10 flex items-center justify-center bg-blue-900/20 rounded-full hover:bg-blue-900/30 transition-all duration-200 shadow-md border border-white/10"
                        >
                          <i className={`fa fa-${link.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
