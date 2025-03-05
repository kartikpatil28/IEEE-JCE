import React from "react";
import Teamcard from "../../Components/Teamcard";
import { motion } from "framer-motion";
import austin from "../../assets/Photos/Austin.jpg";
import chandan from "../../assets/Photos/Chandan.jpg";
import kshiti from "../../assets/Photos/Kshiti.jpg";
import shreedhar from "../../assets/Photos/Shreedhar.jpg";
import rahul from "../../assets/Photos/Rahul.jpg";
import abhishek from "../../assets/Photos/Abhishek.jpg";
import neha from "../../assets/Photos/Neha.jpg";
import varsha from "../../assets/Photos/Varsha.jpg";
import chaitra from "../../assets/Photos/Chaitra.jpg";
import pawan from "../../assets/Photos/pawan.jpg";
import siddarth from "../../assets/Photos/Siddharth.jpg";
// import branchCounsellorImage from "../../assets/Photos/BranchCounsellor.jpg"; 

function Team() {
  const teamMembers = [
    { image: austin, name: "Austin Pacheco", title: "IEEE Chair" },
    { image: chandan, name: "Chandan Kangralkar", title: "IEEE Vice Chair" },
    { image: kshiti, name: "Kshiti Gaddigoudar", title: "Secretary" },
    { image: shreedhar, name: "Shreedhar Teradal", title: "Treasurer" },
    { image: rahul, name: "Rahul Halkarni", title: "Media Head" },
    { image: abhishek, name: "Abhishek Basinayak", title: "Membership Coordinator" },
    { image: neha, name: "Neha Patil", title: "WIE Chair" },
    { image: varsha, name: "Varsha V", title: "WIE Vice Chair" },
    { image: chaitra, name: "Chaitra Kolli", title: "WIE Secretary" },
    { image: pawan, name: "Pavan Wader", title: "WIE Treasurer" },
    { image: siddarth, name: "Siddharth Jambagi", title: "WIE Media Head" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center py-16">
      {/* Branch Counsellor Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Branch <span className="text-blue-500">Counsellor</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 max-w-md mx-auto transform transition-all duration-300 hover:shadow-xl"
        >
          {/* <img
            src={branchCounsellorImage}
            alt="Branch Counsellor"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          /> */}
          <h3 className="text-2xl font-bold text-white">Dr. Krupa rasane</h3>
          <p className="text-gray-300 mt-2">
            As the Branch Counsellor, Dr.Krupa Rasane provides guidance and support
            to the IEEE student branch, helping students achieve their goals in
            technology and innovation.
          </p>
        </motion.div>
      </div>

      {/* Execom 2023-24 Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12"
      >
        Execom <span className="text-blue-500">2023-24</span>
      </motion.h1>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
          >
            <Teamcard
              image={member.image}
              name={member.name}
              title={member.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;