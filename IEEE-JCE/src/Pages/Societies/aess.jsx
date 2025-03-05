import React from "react";
import "./aess.css";

const AESS = () => {
  return (
    <div className="aess-page">
      <h1 className="aess-heading">Aerospace & Electronic Systems Society (AESS)</h1>
      <p className="aess-description">
        Advancing technology in aerospace and electronic systems for a better future.
      </p>
      <div className="aess-activities">
        <div className="activity-card">
          <h2>Workshops</h2>
          <p>Hands-on workshops on aerospace technologies.</p>
        </div>
        <div className="activity-card">
          <h2>Drone Competitions</h2>
          <p>Annual drone competitions to showcase innovation.</p>
        </div>
        <div className="activity-card">
          <h2>Satellite Projects</h2>
          <p>Collaborative projects to design and launch small satellites.</p>
        </div>
      </div>
    </div>
  );
};

export default AESS;