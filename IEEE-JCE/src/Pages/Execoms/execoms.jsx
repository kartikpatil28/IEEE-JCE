import React, { useState } from 'react';

const Execoms = () => {
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');

  const execoms2025 = [
    { position: 'Chairman', name: 'Prof. Abhishek Deshmukh', affiliation: 'KLS Gogte Institute of Technology, Belagavi', ieeeNumber: '90780176', mobileNo: '9164503748', email: 'abhishekd@git.edu' },
    { position: 'Vice-Chairman', name: 'Dr. Priya Mehta', affiliation: 'Delhi Technological University, Delhi', ieeeNumber: '90856234', mobileNo: '9812345678', email: 'priyam@dtu.ac.in' },
    { position: 'Secretary', name: 'Mr. Rohan Sharma', affiliation: 'Indian Institute of Technology, Kanpur', ieeeNumber: '90782451', mobileNo: '9876543210', email: 'rohans@iitk.ac.in' },
    { position: 'Treasurer', name: 'Ms. Sneha Roy', affiliation: 'Birla Institute of Technology, Mesra', ieeeNumber: '90785123', mobileNo: '9123456789', email: 'snehar@bitmesra.ac.in' },
    { position: 'Technical Head', name: 'Dr. Ankit Verma', affiliation: 'National Institute of Technology, Trichy', ieeeNumber: '90876354', mobileNo: '9101234567', email: 'ankitv@nitt.edu' },
    { position: 'Events Coordinator', name: 'Ms. Riya Gupta', affiliation: 'Vellore Institute of Technology, Vellore', ieeeNumber: '90784213', mobileNo: '9123450987', email: 'riyag@vit.ac.in' },
    { position: 'Publicity Head', name: 'Mr. Arjun Singh', affiliation: 'Anna University, Chennai', ieeeNumber: '90874521', mobileNo: '9145678901', email: 'arjuns@annauniv.edu' },
    { position: 'Membership Development Chair', name: 'Ms. Kavita Nair', affiliation: 'Indian Institute of Science, Bangalore', ieeeNumber: '90786321', mobileNo: '9198765432', email: 'kavitan@iisc.ac.in' },
    { position: 'Webmaster', name: 'Mr. Sameer Khan', affiliation: 'Jamia Millia Islamia, Delhi', ieeeNumber: '90783452', mobileNo: '9123456780', email: 'sameerk@jmi.ac.in' },
    { position: 'Student Activity Coordinator', name: 'Ms. Pooja Patel', affiliation: 'Indian Institute of Technology, Bombay', ieeeNumber: '90784123', mobileNo: '9112345678', email: 'poojap@iitb.ac.in' },
  ];

  const execoms2024 = [
    { position: 'Chairman', name: 'Prof. Aman Mathur', affiliation: 'KLS Gogte Institute of Technology, Belagavi', ieeeNumber: '90780177', mobileNo: '9164503749', email: 'amanm@git.edu' },
    { position: 'Vice-Chairman', name: 'Dr. Neha Aggarwal', affiliation: 'Delhi Technological University, Delhi', ieeeNumber: '90856235', mobileNo: '9812345679', email: 'nehaa@dtu.ac.in' },
    { position: 'Secretary', name: 'Mr. Rahul Kumar', affiliation: 'Indian Institute of Technology, Kanpur', ieeeNumber: '90782452', mobileNo: '9876543211', email: 'rahulk@iitk.ac.in' },
    { position: 'Treasurer', name: 'Ms. Ananya Singh', affiliation: 'Birla Institute of Technology, Mesra', ieeeNumber: '90785124', mobileNo: '9123456788', email: 'ananyas@bitmesra.ac.in' },
    { position: 'Technical Head', name: 'Dr. Vinay Bhat', affiliation: 'National Institute of Technology, Trichy', ieeeNumber: '90876355', mobileNo: '9101234568', email: 'vinayb@nitt.edu' },
    { position: 'Events Coordinator', name: 'Ms. Aisha Khan', affiliation: 'Vellore Institute of Technology, Vellore', ieeeNumber: '90784214', mobileNo: '9123450988', email: 'aishak@vit.ac.in' },
    { position: 'Publicity Head', name: 'Mr. Dev Patel', affiliation: 'Anna University, Chennai', ieeeNumber: '90874522', mobileNo: '9145678902', email: 'devp@annauniv.edu' },
    { position: 'Membership Development Chair', name: 'Ms. Tanya Mehra', affiliation: 'Indian Institute of Science, Bangalore', ieeeNumber: '90786322', mobileNo: '9198765433', email: 'tanyam@iisc.ac.in' },
    { position: 'Webmaster', name: 'Mr. Vikram Singh', affiliation: 'Jamia Millia Islamia, Delhi', ieeeNumber: '90783453', mobileNo: '9123456781', email: 'vikrams@jmi.ac.in' },
    { position: 'Student Activity Coordinator', name: 'Ms. Nidhi Sharma', affiliation: 'Indian Institute of Technology, Bombay', ieeeNumber: '90784124', mobileNo: '9112345679', email: 'nidhis@iitb.ac.in' },
  ];

  const members = selectedYear === '2025' ? execoms2025 : execoms2024;

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(search.toLowerCase()) || 
    member.position.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">EXECOM {selectedYear}</h1>
      <div className="flex mb-4">
        <button onClick={() => setSelectedYear('2025')} className={`px-4 py-2 ${selectedYear === '2025' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>2025</button>
        <button onClick={() => setSelectedYear('2024')} className={`px-4 py-2 ${selectedYear === '2024' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>2024</button>
      </div>
      <input 
        type="text" 
        placeholder="Search..." 
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Affiliation</th>
            <th className="px-4 py-2">IEEE Number</th>
            <th className="px-4 py-2">Mobile No.</th>
            <th className="px-4 py-2">Email ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={index} className="bg-gray-100 even:bg-gray-200">
              <td className="border px-4 py-2">{member.position}</td>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.affiliation}</td>
              <td className="border px-4 py-2">{member.ieeeNumber}</td>
              <td className="border px-4 py-2">{member.mobileNo}</td>
              <td className="border px-4 py-2">{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Execoms;
