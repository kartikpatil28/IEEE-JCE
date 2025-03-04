import React from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you! Reach out to us for any inquiries or collaborations.</p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Address</h3>
          <p>Jain College of Engineering, Belagavi, Karnataka, India</p>
        </div>
        <div className="info-card">
          <FaPhone className="info-icon" />
          <h3>Phone</h3>
          <p>+91 123 456 7890</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>ieee@jce.edu</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2 className="form-title">Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h2 className="social-title">Follow Us</h2>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="map-container">
        <iframe
          title="Jain College of Engineering Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.1234567890123!2d74.56789123456789!3d15.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjQiTiA3NMKwMzQnMDcuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;