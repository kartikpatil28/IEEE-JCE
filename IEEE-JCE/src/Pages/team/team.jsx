import React from "react";
import "./team.css";
import Teamcard from "../../Components/Teamcard";
import austin from "../../assets/Austin.jpg";
import chandan from "../../assets/Chandan.jpg";
import kshiti from "../../assets/Kshiti.jpg";
import shreedhar from "../../assets/Shreedhar.jpg";
import rahul from "../../assets/Rahul.jpg";
import abhishek from "../../assets/Abhishek.jpg";
import neha from "../../assets/Neha.jpg";
import varsha from "../../assets/Varsha.jpg";
import chaitra from "../../assets/Chaitra.jpg";
import pawan from "../../assets/pawan.jpg";
import siddarth from "../../assets/Siddharth.jpg";
import { motion } from "framer-motion";

function Team() {
  const teamMembers = [
    { image: austin, name: "Austin Pacheco", title: "IEEE Chair", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: chandan, name: "Chandan Kangralkar", title: "IEEE Vice Chair", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: kshiti, name: "Kshiti Gaddigoudar", title: "Secretary", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: shreedhar, name: "Shreedhar Teradal", title: "Treasurer", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: rahul, name: "Rahul Halkarni", title: "Media Head", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: abhishek, name: "Abhishek Basinayak", title: "Membership Coordinator", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: neha, name: "Neha Patil", title: "WIE Chair", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: varsha, name: "Varsha V", title: "WIE Vice Chair", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: chaitra, name: "Chaitra Kolli", title: "WIE Secretary", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: pawan, name: "Pavan Wader", title: "WIE Treasurer", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
    { image: siddarth, name: "Siddharth Jambagi", title: "WIE Media Head", linkedin: "https://www.linkedin.com/in/snehal-suryavanshi/", xProfile: "https://x.com/Snehal_A_S" },
  ];

  return (
    <div className="team-page">
      {/* Cool Background */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="team-container"
      >
        <h1 className="main-heading">
          <b>Execom 2023-24</b>
        </h1>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="member-card"
            >
              <Teamcard
                image={member.image}
                name={member.name}
                title={member.title}
                linkedin={member.linkedin}
                xProfile={member.xProfile}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Team;