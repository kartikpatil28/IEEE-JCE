import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TestimonialsSection from './components/Testimonials/Testimonials';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <TestimonialsSection />
        </main>
      </div>
    </Router>
  );
}

export default App; 