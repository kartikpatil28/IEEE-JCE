import React from "react";
import "./cs.css";

const ComputerSociety = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: "Annual Conference 2024",
      description: "Keynote speakers and attendees at the IEEE CS Annual Conference",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Student Hackathon",
      description: "Students collaborating on innovative projects during our annual hackathon",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Technical Workshop",
      description: "Hands-on cybersecurity workshop led by industry experts",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Research Symposium",
      description: "Researchers presenting cutting-edge findings in computing technology",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Awards Ceremony",
      description: "Recognizing outstanding contributions to the field of computer science",
      thumbnail: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Executive Committee Meeting",
      description: "IEEE CS leadership discussing strategic initiatives",
      thumbnail: "/api/placeholder/400/300",
    },
  ];

  // Technical content resources
  const contentResources = [
    {
      id: 1,
      title: "AI Ethics Framework",
      type: "White Paper",
      description: "Guidelines for ethical implementation of AI in various domains",
      tags: ["AI", "Ethics", "Policy"],
    },
    {
      id: 2,
      title: "Cloud Computing Security",
      type: "Technical Report",
      description: "Best practices for securing cloud infrastructure and applications",
      tags: ["Cloud", "Security", "Infrastructure"],
    },
    {
      id: 3,
      title: "Software Engineering Handbook",
      type: "Publication",
      description: "Comprehensive guide to modern software development methodologies",
      tags: ["Software", "Engineering", "Best Practices"],
    },
    {
      id: 4,
      title: "Quantum Computing Foundations",
      type: "Course",
      description: "Introduction to quantum computing principles and applications",
      tags: ["Quantum", "Computing", "Education"],
    },
  ];

  return (
    <div className="cs-container">
      {/* Header Section */}
      <header className="cs-header">
        <div className="cs-logo-container">
          <div className="cs-logo">IEEE CS</div>
        </div>
        <h1 className="cs-title">IEEE Computer Society</h1>
        <p className="cs-tagline">Advancing Computing Technology for a Better Future</p>
      </header>

      {/* Main Content */}
      <main className="cs-main">
        {/* About Section */}
        <section className="cs-about">
          <h2 className="cs-section-title">About IEEE Computer Society</h2>
          <p className="cs-about-text">
            The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. With over 50 years of excellence, we serve professionals, researchers, and students worldwide through publications, conferences, technical standards, and educational programs.
          </p>
        </section>

        {/* Key Initiatives Section */}
        <section className="cs-initiatives">
          <h2 className="cs-section-title">Key Initiatives</h2>
          <div className="cs-cards-grid">
            <div className="cs-card">
              <div className="cs-card-icon">📚</div>
              <h3 className="cs-card-title">Technical Workshops</h3>
              <p className="cs-card-description">
                Industry-leading workshops on emerging technologies, cloud computing, cybersecurity, and software engineering.
              </p>
            </div>
            <div className="cs-card">
              <div className="cs-card-icon">🏆</div>
              <h3 className="cs-card-title">Annual Hackathons</h3>
              <p className="cs-card-description">
                Global competitions showcasing innovation across various domains including IoT, AI, and sustainable computing.
              </p>
            </div>
            <div className="cs-card">
              <div className="cs-card-icon">🔬</div>
              <h3 className="cs-card-title">Research Symposia</h3>
              <p className="cs-card-description">
                Forums for presenting cutting-edge research and fostering collaboration between academia and industry.
              </p>
            </div>
            <div className="cs-card">
              <div className="cs-card-icon">🤖</div>
              <h3 className="cs-card-title">AI & ML Projects</h3>
              <p className="cs-card-description">
                Collaborative initiatives developing innovative AI solutions for real-world challenges across various domains.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Content Resources Section - NEW */}
        <section className="cs-content-resources">
          <h2 className="cs-section-title">Technical Content Resources</h2>
          <div className="cs-content-container">
            {contentResources.map((resource) => (
              <div key={resource.id} className="cs-content-item">
                <div className="cs-content-header">
                  <h3>{resource.title}</h3>
                  <span className="cs-content-type">{resource.type}</span>
                </div>
                <p>{resource.description}</p>
                <div className="cs-content-tags">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="cs-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="cs-access-btn">Access Resource</button>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section - NEW */}
        <section className="cs-gallery">
          <h2 className="cs-section-title">IEEE CS Gallery</h2>
          <div className="cs-gallery-container">
            {galleryImages.map((image) => (
              <div key={image.id} className="cs-gallery-item">
                <div className="cs-gallery-image">
                  <img src={image.thumbnail} alt={image.title} />
                </div>
                <div className="cs-gallery-caption">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="cs-publications">
          <h2 className="cs-section-title">IEEE CS Publications</h2>
          <div className="cs-publications-list">
            <div className="cs-publication-item">
              <h3>IEEE Transactions on Computers</h3>
              <p>Peer-reviewed journal covering computer architecture and hardware.</p>
            </div>
            <div className="cs-publication-item">
              <h3>IEEE Software</h3>
              <p>Building reliable, usable, and innovative software systems.</p>
            </div>
            <div className="cs-publication-item">
              <h3>IEEE Security & Privacy</h3>
              <p>Addressing critical cybersecurity challenges and solutions.</p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="cs-events">
          <h2 className="cs-section-title">Upcoming Events</h2>
          <div className="cs-events-list">
            <div className="cs-event">
              <div className="cs-event-date">Apr 15-18</div>
              <div className="cs-event-details">
                <h3>IEEE International Conference on Software Engineering</h3>
                <p>Virtual & Montreal, Canada</p>
              </div>
            </div>
            <div className="cs-event">
              <div className="cs-event-date">May 22-24</div>
              <div className="cs-event-details">
                <h3>IEEE Symposium on Security and Privacy</h3>
                <p>San Francisco, USA</p>
              </div>
            </div>
            <div className="cs-event">
              <div className="cs-event-date">Jun 10-12</div>
              <div className="cs-event-details">
                <h3>IEEE Cloud Computing Conference</h3>
                <p>Singapore</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="cs-footer">
        <div className="cs-footer-links">
          <div className="cs-footer-col">
            <h3>Membership</h3>
            <ul>
              <li>Join IEEE CS</li>
              <li>Member Benefits</li>
              <li>Volunteer Opportunities</li>
            </ul>
          </div>
          <div className="cs-footer-col">
            <h3>Resources</h3>
            <ul>
              <li>Digital Library</li>
              <li>Webinars</li>
              <li>Career Center</li>
            </ul>
          </div>
          <div className="cs-footer-col">
            <h3>Connect</h3>
            <ul>
              <li>Contact Us</li>
              <li>Technical Communities</li>
              <li>Local Chapters</li>
            </ul>
          </div>
        </div>
        <div className="cs-copyright">
          © 2025 IEEE Computer Society. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ComputerSociety;