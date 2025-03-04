import React, { useState } from "react";
import { motion } from "framer-motion";

// Mock event data (this could be fetched from an API)
const eventData = {
  title: "Hackathon 2025",
  description:
    "Join us for an exciting Hackathon to showcase your skills and compete with the best minds!",
  about:
    "The IEEE Hackathon 2025 brings together engineers, programmers, and innovators to build creative solutions to real-world problems. This event provides an opportunity to network with industry experts, gain hands-on experience, and explore new technologies. Participate in this thrilling competition to enhance your skills and possibly win exciting prizes!",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Hackathon Participants",
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Team Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Coding Session",
    },
  ],
  registrationForm: [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      id: "college",
      label: "College",
      type: "text",
      placeholder: "Enter your college name",
    },
    {
      id: "message",
      label: "Why do you want to participate?",
      type: "textarea",
      placeholder: "Your reason here...",
    },
  ],
};

function EventPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Simulate an API request delay for the registration process
    setTimeout(() => {
      alert("Registration Successful! We will send a confirmation email shortly.");
      setFormData({ name: "", email: "", phone: "", college: "", message: "" });
      setIsSubmitting(false); // Reset submitting state
    }, 1500); // Simulate delay for form submission
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-poppins">
      {/* Event Overview */}
      <div className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold text-white">{eventData.title}</h1>
          <p className="text-xl text-gray-200 mt-4">{eventData.description}</p>
        </motion.div>
      </div>

      {/* Event Details */}
      <div className="px-6 md:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-600"
        >
          About the Event
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto"
        >
          {eventData.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center py-8"
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Event"
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
          />
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-600 text-center"
        >
          Event Gallery 📸
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-6"
        >
          {eventData.gallery.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition-transform hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Registration Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center"
        >
          Register for the Event 🚀
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Dynamic Form Fields */}
              {eventData.registrationForm.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.id}
                    className="block text-lg font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                      rows="4"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full py-3 ${
                    isSubmitting ? "bg-gray-400" : "bg-blue-600"
                  } text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default EventPage;