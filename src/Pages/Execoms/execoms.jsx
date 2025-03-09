import React, { useState } from "react";

const Execoms = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [activeTab, setActiveTab] = useState("all");

  const execoms2025 = [
    {
      name: "John Doe",
      position: "Chairperson",
      category: "main",
      affiliation: "Computer Science",
      ieeeNumber: "97654321",
      sem: "6th",
      mobileNo: "+91 9876543210",
      email: "john.doe@example.com"
    },
    // Add more members for 2024-25
  ];

  const execoms2024 = [
    {
      name: "Jane Smith",
      position: "Vice Chairperson",
      category: "main",
      affiliation: "Electronics",
      ieeeNumber: "98765432",
      sem: "8th",
      mobileNo: "+91 9876543211",
      email: "jane.smith@example.com"
    },
    // Add more members for 2023-24
  ];

  const members = selectedYear === "2024-25" ? execoms2025 : execoms2024;

  const filteredMembers = members.filter(
    (member) =>
      (activeTab === "all" || member.category === activeTab) &&
      (member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.position.toLowerCase().includes(search.toLowerCase()))
  );

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "main":
        return "from-blue-600 to-blue-800";
      case "wie":
        return "from-purple-600 to-purple-800";
      case "aess":
        return "from-green-600 to-green-800";
      default:
        return "from-gray-600 to-gray-800";
    }
  };

  const getCategoryBgColor = (category) => {
    switch (category) {
      case "main":
        return "bg-blue-100 text-blue-800";
      case "wie":
        return "bg-purple-100 text-purple-800";
      case "aess":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            EXECOM Leadership {selectedYear}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of IEEE Executive Committee members who lead our chapter with passion and innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters and Search */}
        <div className="mb-12 space-y-6 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Year Toggle */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-lg">
            {["2024-25", "2023-24"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["all", "main", "wie", "aess"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? getCategoryBgColor(tab) + " shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab === "all" ? "All Members" : 
                 tab === "main" ? "Main Committee" :
                 tab === "wie" ? "WIE" : "AESS"}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full lg:w-72 pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(member.category)}`} />
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-lg text-white font-bold bg-gradient-to-br ${getCategoryColor(member.category)}`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {member.name}
                    </h2>
                    <p className="text-sm font-medium text-indigo-600">{member.position}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm">{member.affiliation}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <span className="text-sm">IEEE: {member.ieeeNumber}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm">Semester: {member.sem}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">{member.mobileNo}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No members found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Execoms; 