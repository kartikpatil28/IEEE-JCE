import React, { useState } from "react";

const Execoms = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");

  const execoms2025 = [
    {
      position: "Chair",
      name: "Abhishek Devarushi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100077965",
      mobileNo: "8383838383",
      email: "austin@123",
    },
    {
      position: "Vice-Chair",
      name: "Beerappa",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100078004",
      mobileNo: "9812345678",
      email: "priyam@dtu.ac.in",
    },
    {
      position: "Secretary",
      name: "Snehal Suryavanshi",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874444",
      mobileNo: "9876543210",
      email: "rohans@iitk.ac.in",
    },
    {
      position: "Treasurer",
      name: "Darshan Tukkar",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100774717",
      mobileNo: "9123456789",
      email: "snehar@bitmesra.ac.in",
    },
    {
      position: "Media Head",
      name: "Siddharth Jambagi",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99873986",
      mobileNo: "9101234567",
      email: "ankitv@nitt.edu",
    },
    {
      position: "Membership co-ordinator",
      name: "Vinayak A",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874479",
      mobileNo: "9123450987",
      email: "riyag@vit.ac.in",
    },
    {
      position: "Webmaster",
      name: "Kartik Patil",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100307607",
      mobileNo: "9145678901",
      email: "arjuns@annauniv.edu",
    },
    {
      position: "WIE Chair",
      name: "Srushti Utturkar ",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874594",
      mobileNo: "9198765432",
      email: "kavitan@iisc.ac.in",
    },
    {
      position: "WIE Vice Chair",
      name: "Shreya Dappadhuli",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874513",
      mobileNo: "9123456780",
      email: "sameerk@jmi.ac.in",
    },
  
    {
      position: "WIE Secretary",
      name: "Sharada Ugare",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100083041",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
  
    {
      position: "chair",
      name: "Namrata Mohan Patil",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874209",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: "Media Head",
      name: "Samiulla Kustagi",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100768719",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: " AESS Chair",
      name: "Muskan Abdul Latif Dhalayat",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100768726",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: "AESS Vice Chair",
      name: "Radhika Kiran Lohar",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100768599",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: "AESS Secretary",
      name: "Saniya Gijoni",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100768599",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: "AESS Treasurer",
      name: "Preeti Patil",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874579",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
    {
      position: "AESS Web Master",
      name: "Meghana Kubasad",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "99874365",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
  
    {
      position: "Media Head",
      name: "Chetan Baloji",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "100768435",
      mobileNo: "9112345678",
      email: "poojap@iitb.ac.in",
    },
  ];

  const execoms2024 = [
    {
      position: "Chair",
      name: "Mr. Austin",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90780177",
      mobileNo: "9164503749",
      email: "amanm@git.edu",
    },
    {
      position: "Vice-Chair",
      name: "Mr. Chandan Kangralkar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90856235",
      mobileNo: "9812345679",
      email: "nehaa@dtu.ac.in",
    },
    {
      position: "Secretary",
      name: "Kshiti Gaddigoudar",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90782452",
      mobileNo: "9876543211",
      email: "rahulk@iitk.ac.in",
    },
    {
      position: "Treasurer",
      name: "Mr. Shreedhar Teradal",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90785124",
      mobileNo: "9123456788",
      email: "ananyas@bitmesra.ac.in",
    },
    {
      position: "Media Head",
      name: "Mr.Rahul Halkarni",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90876355",
      mobileNo: "9101234568",
      email: "vinayb@nitt.edu",
    },
    {
      position: "Membership co-ordinator",
      name: "Mr. Abhishek Basinayak",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90784214",
      mobileNo: "9123450988",
      email: "aishak@vit.ac.in",
    },
    {
      position: "WIE Chair",
      name: "Neha Patil",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90874522",
      mobileNo: "9145678902",
      email: "devp@annauniv.edu",
    },
    {
      position: "WIE Vice-Chair",
      name: "Varsha V",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90786322",
      mobileNo: "9198765433",
      email: "tanyam@iisc.ac.in",
    },
    {
      position: "WIE Secratery",
      name: "Chaitra Kolli",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90783453",
      mobileNo: "9123456781",
      email: "vikrams@jmi.ac.in",
    },
    {
      position: "WIE Treasurer",
      name: "Pavan Wader",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90784124",
      mobileNo: "9112345679",
      email: "nidhis@iitb.ac.in",
    },
    {
      position: "WIE Media Head",
      name: "Siddharth Jambagi",
      affiliation: "Jain College of Engineering,Belagavi",
      ieeeNumber: "90784124",
      mobileNo: "9112345679",
      email: "nidhis@iitb.ac.in",
    },
  ];

  const members = selectedYear === "2025" ? execoms2025 : execoms2024;

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.position.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          EXECOM {selectedYear}
        </h1>

        {/* Year Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedYear("2025")}
            className={`px-6 py-2 rounded-lg transition-all ${
              selectedYear === "2025"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            2025
          </button>
          <button
            onClick={() => setSelectedYear("2024")}
            className={`px-6 py-2 rounded-lg transition-all ${
              selectedYear === "2024"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            2024
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or position..."
          className="w-full max-w-md mx-auto p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 block mb-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Position</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Affiliation</th>
                <th className="px-6 py-4 text-left">IEEE Number</th>
                <th className="px-6 py-4 text-left">Mobile No.</th>
                <th className="px-6 py-4 text-left">Email ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all even:bg-gray-100"
                >
                  <td className="px-6 py-4 border-b">{member.position}</td>
                  <td className="px-6 py-4 border-b">{member.name}</td>
                  <td className="px-6 py-4 border-b">{member.affiliation}</td>
                  <td className="px-6 py-4 border-b">{member.ieeeNumber}</td>
                  <td className="px-6 py-4 border-b">{member.mobileNo}</td>
                  <td className="px-6 py-4 border-b">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Execoms;