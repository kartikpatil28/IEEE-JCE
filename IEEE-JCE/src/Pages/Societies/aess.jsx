import React from 'react';
import { ArrowRight, Rocket, Award, Cpu, Users, Calendar } from 'lucide-react';

const AESS = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Abstract background shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-400 font-medium text-sm mb-2">
                IEEE Technical Society
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aerospace & <span className="text-blue-400">Electronic</span> Systems Society
              </h1>
              <p className="text-xl text-gray-300">
                Advancing the frontier of aerospace technology through innovation, 
                education, and global collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
                  Join AESS <ArrowRight size={16} />
                </button>
                <button className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-md font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute  bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6 scale-95"></div>
              <img
                src="https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Aerospace technology"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Global Members</p>
                    <p className="text-xl font-bold">15,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">About <span className="text-blue-400">AESS</span></h2>
            <p className="text-gray-300 text-lg">
              The IEEE Aerospace and Electronic Systems Society (AESS) is a global community of professionals 
              dedicated to advancing the theory and practice of aerospace and electronic systems. We foster 
              innovation through collaboration, research, and education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Rocket className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Innovation</h3>
              <p className="text-gray-300">
                Fostering cutting-edge research and development in aerospace systems, 
                radar, navigation, and electronic systems.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Users className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Community</h3>
              <p className="text-gray-300">
                Connecting professionals, academics, and students across the world through 
                conferences, publications, and collaborative projects.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Award className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Education & Recognition</h3>
              <p className="text-gray-300">
                Promoting education in the field and recognizing outstanding contributions 
                through prestigious awards and scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our <span className="text-blue-400">Activities</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workshop Card */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-850 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-8">
                <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                  <Cpu className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Technical Workshops</h3>
                <p className="text-gray-300 mb-6">
                  Hands-on workshops on cutting-edge aerospace technologies, led by industry experts and researchers.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Drone Competition Card */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-850 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-8">
                <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                  <Rocket className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Drone Competitions</h3>
                <p className="text-gray-300 mb-6">
                  Annual drone design competitions to showcase innovation and technical skills of students and researchers.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Satellite Projects Card */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-850 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-8">
                <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Satellite Projects</h3>
                <p className="text-gray-300 mb-6">
                  Collaborative projects where teams design, build, and launch small satellites for research missions.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Upcoming <span className="text-blue-400">Events</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-blue-900/30 p-6 flex flex-col justify-center items-center">
                <span className="text-3xl font-bold text-blue-400">21</span>
                <span className="text-xl">March</span>
                <span className="text-gray-400">2025</span>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">IEEE Space Reaserach Paper submission</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>March 21</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Join us for our flagship conference featuring keynote speakers, 
                  technical sessions, and networking opportunities.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-blue-900/30 p-6 flex flex-col justify-center items-center">
                <span className="text-3xl font-bold text-blue-400">22</span>
                <span className="text-xl">May</span>
                <span className="text-gray-400">2025</span>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">Aerospace Systems Workshop</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Hands-on workshop covering the latest developments in aerospace 
                  navigation systems and autonomous flight technology.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-10 md:p-16 rounded-3xl border border-gray-700 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AESS Community</h2>
              <p className="text-gray-300 text-lg mb-8">
                Become part of a global network of aerospace professionals, gain access to exclusive resources, 
                and participate in cutting-edge research and development projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                  Become a Member <ArrowRight size={16} />
                </button>
                <button className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-md font-medium transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AESS;