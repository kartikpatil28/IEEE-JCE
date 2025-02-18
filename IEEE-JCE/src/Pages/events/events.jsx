import React, { useState } from "react";

// Mock event data (this could be fetched from an API)
const eventData = {
  title: "Hackathon 2025",
  description:
    "Join us for an exciting Hackathon to showcase your skills and compete with the best minds!",
  about:
    "The IEEE Hackathon 2025 brings together engineers, programmers, and innovators to build creative solutions to real-world problems. This event provides an opportunity to network with industry experts, gain hands-on experience, and explore new technologies. Participate in this thrilling competition to enhance your skills and possibly win exciting prizes!",
  gallery: [
    { src: "/assets/gallery1.jpg", alt: "Gallery Image 1" },
    { src: "/assets/gallery2.jpg", alt: "Gallery Image 2" },
    { src: "/assets/gallery3.jpg", alt: "Gallery Image 3" },
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
    <div className="bg-white text-black font-poppins">
      {/* Event Overview */}
      <div className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-600">{eventData.title}</h1>
        <p className="text-xl text-gray-700 mt-4">{eventData.description}</p>
      </div>

      {/* Event Details */}
      <div className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-500">About the Event</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          {eventData.about}
        </p>

        <div className="flex justify-center py-6">
          <img
            src="/assets/event-image.jpg"
            alt="Event"
            className="rounded-lg shadow-lg w-3/4 md:w-1/2"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-500 text-center">
          Event Gallery 📸
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-6">
          {eventData.gallery.map((image, index) => (
            <div key={index} className="w-full sm:w-64 md:w-48 lg:w-64 xl:w-48">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Registration Section */}
      <div className="py-12 bg-blue-100">
        <h2 className="text-2xl font-bold text-blue-600 text-center">
          Register for the Event 🚀
        </h2>
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Dynamic Form Fields */}
              {eventData.registrationForm.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.id}
                    className="text-lg font-medium text-gray-700"
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
                  className={`w-full py-2 ${
                    isSubmitting ? "bg-gray-400" : "bg-blue-600"
                  } text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
