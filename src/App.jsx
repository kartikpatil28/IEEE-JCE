import { useState, useEffect } from "react";
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
import Societies from "./Pages/societies/Societies.jsx";
import AESS from "./Pages/Societies/aess.jsx";
import CS from "./Pages/societies/cs.jsx";
import WIE from "./Pages/societies/wie.jsx";
import Membership from "./Pages/Membership/membership.jsx";
import Loading from "./Pages/Home/Loading.jsx"; // Import the new Loading component
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate preloading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds of loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <BrowserRouter>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/team" element={<Team />} />
              <Route path="/execoms" element={<Execoms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/societies" element={<Societies />}>
                <Route path="aess" element={<AESS />} />
                <Route path="cs" element={<CS />} />
                <Route path="wie" element={<WIE />} />
              </Route>
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;