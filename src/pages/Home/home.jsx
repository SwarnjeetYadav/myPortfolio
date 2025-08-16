import React, { useState } from 'react'
import { Download } from 'lucide-react';
import profilePhoto from '../../assets/images/swarnjeetPhoto.png';

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/18MIpEErTpF_bVAe-Z_hZJ2OdEOjtF_b3/view?usp=drivesdk'; // Updated path
    link.download = 'https://drive.google.com/file/d/18MIpEErTpF_bVAe-Z_hZJ2OdEOjtF_b3/view?usp=drivesdk';
    link.target = '_blank';
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center w-full">
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 transform transition-transform duration-300 hover:scale-105">
        <img
          src={profilePhoto}
          alt="Swarnjeet's Photo"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/192x192/ADD8E6/000000?text=Photo"; 
          }}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Hi, I'm Swarnjeet Kumar Yadav</h1>
      <p className="text-xl md:text-2xl mb-8 font-light">A passionate BCA Student | Full-Stack Developer specializing in Web Applications, User Experience, and Security.</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleDownloadCV}
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
        >
          <Download size={20} className="mr-2" /> Download CV
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center"
        >
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Home;