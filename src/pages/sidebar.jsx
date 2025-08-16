import React, { useState, useEffect } from 'react'
import { Home, User, Lightbulb, Briefcase, Mail, Github, Linkedin, Download, Menu, X } from 'lucide-react';

const Sidebar = () => {
    const sections = [
        { id: 'home', name: 'Home', icon: Home },
        { id: 'about', name: 'About', icon: User },
        { id: 'skills', name: 'Skills', icon: Lightbulb },
        { id: 'portfolio', name: 'Portfolio', icon: Briefcase },
        { id: 'contact', name: 'Contact', icon: Mail },
    ];
    
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        } else {
            // If section doesn't exist, try to navigate to the page
            window.location.href = `/${id === 'home' ? '' : id}`;
        }
    };

    // Detect which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            
            // Check each section to see which one is currently in view
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);
      
    return (
        <div className='sidebar'>
            {/* Desktop Sidebar */}
            <nav className="hidden md:flex flex-col fixed top-0 left-0 w-20 h-screen bg-white shadow-md py-8 items-center z-50">
                <ul className="flex flex-col space-y-6">
                    {sections.map((section) => (
                        <li key={section.id} className="w-full">
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`flex flex-col items-center p-3 rounded-lg w-full transition-colors duration-200
                                    ${activeSection === section.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}
                                title={section.name}
                            >
                                <section.icon size={20} className="mb-1" />
                                <span className="text-xs">{section.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Swarnjeet Yadav</h1>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle navigation"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Mobile Menu */}
            <div
                className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className="flex justify-end p-4 border-b">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>
                <ul className="flex flex-col space-y-2 p-4">
                    {sections.map((section) => (
                        <li key={section.id} className="w-full">
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200
                                    ${activeSection === section.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}
                            >
                                <section.icon size={20} className="mr-3" />
                                <span className="font-medium">{section.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;