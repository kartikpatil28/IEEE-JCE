import React from "react";
import "./cs.css";

const CS = () => {
  return (
    <div className="cs-page">
      <h1 className="cs-heading">Computer Society (CS)</h1>
      <p className="cs-description">
        Advancing computer science and technology for a better future.
      </p>
      <div className="cs-activities">
        <div className="activity-card">
          <h2>Workshops</h2>
          <p>Hands-on workshops on computer technologies.</p>
        </div>
        <div className="activity-card">
          <h2>Hackathons</h2>
          <p>Annual hackathons to showcase innovation.</p>
        </div>
        <div className="activity-card">
          <h2>AI Projects</h2>
          <p>Collaborative projects to design AI solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default CS;