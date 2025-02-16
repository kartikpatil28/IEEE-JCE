import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="f-info">
        <div className="f_content">
          
          {/* Follow Us Section */}
          <div className="f-info-follow footer_div">
            <h5 className="footerh"><b>Follow Us On Social Media</b></h5>
            <div className="f-info-socials">
              <a href="https://www.instagram.com/ieee_jce?igsh=NWNtcTlmYml1OHMw" className="f_a" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ieee-jce-3b71022b9/" className="f_a" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/IEEE_JCE" className="f_a" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a href="https://chat.whatsapp.com/Jy9bjM9GZs11bMPZ8trhWO" className="f_a" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Connect with IEEE Section */}
          <div className="other_link footer_div">
            <h5 className="footerh"><b>Connect with IEEE</b></h5>
            <ul className="footer_list">
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="https://www.ieee.org/" className="f_a" target="_blank" rel="noopener noreferrer">IEEE</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="https://wie.ieee.org/" className="f_a" target="_blank" rel="noopener noreferrer">WIE</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="https://www.ieeer10.org/" className="f_a" target="_blank" rel="noopener noreferrer">IEEE Region 10</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="https://ieeebangalore.org/" className="f_a" target="_blank" rel="noopener noreferrer">IEEE Bangalore Section</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="f_a" target="_blank" rel="noopener noreferrer">IEEE Xplore</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="quick_links footer_div">
            <h5 className="footerh"><b>Quick links</b></h5>
            <ul className="footer_list">
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="/" className="f_a">About</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="/events" className="f_a">Events</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="/team" className="f_a">Execom 2024</a>
              </li>
              <li>
                <img src="/img/forward_icon.png" alt="" className="forward_icon" />
                <a href="/contact" className="f_a">Contact</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="f-info-brand">
          &copy; IEEE | Jain College of Engineering, Belagavi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
