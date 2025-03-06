import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import About from "./Pages/about/about.jsx";
import Events from "./Pages/events/events.jsx";
import Gallery from "./Pages/gallery/gallery.jsx";
import Team from "./Pages/team/team.jsx";
import Contact from "./Pages/contact/contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/footer.jsx";
import Execoms from "./Pages/Execoms/execoms.jsx";
import Societies from "./Pages/societies/Societies.jsx"; // Main Societies page
import AESS from "./Pages/Societies/aess.jsx"
import CS from "./Pages/societies/cs.jsx"; // CS page
import WIE from "./Pages/societies/wie.jsx"; // WIE page
import Membership from "./Pages/Membership/membership.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          {/* Redirect root URL ("/") to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Home Page */}
          <Route path="/home" element={<Home />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/execoms" element={<Execoms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />


          {/* Societies Page and Nested Routes */}
          <Route path="/societies" element={<Societies />}>
            <Route path="aess" element={<AESS />} />
            <Route path="cs" element={<CS />} />
            <Route path="wie" element={<WIE />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;