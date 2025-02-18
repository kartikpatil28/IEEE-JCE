import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full shadow-md px-6 py-4 flex justify-between items-center bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full">
        <h1 className="text-4xl font-extrabold text-blue-800">IEEE JCE</h1>

        {/* Mobile View: Hamburger Icon */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex gap-3 text-base font-medium lg:flex-row lg:gap-6 ${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-white px-6 py-4"
              : "hidden lg:flex"
          }`}
        >
          {[
            { name: "Home", path: "/home" },
            { name: "About", path: "/about" },
            { name: "Events", path: "/events" },
            { name: "Gallery", path: "/gallery" },
            { name: "Team", path: "/team" },
            { name: "Execoms", path: "/execoms" },

            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "text-black hover:opacity-100 hover:text-blue-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
