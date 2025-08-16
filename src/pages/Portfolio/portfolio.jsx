import React, { useState } from 'react'

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "fullstack",
            image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce",
            description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            category: "frontend",
            image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App",
            description: "A responsive task management application with drag-and-drop functionality, real-time updates, and local storage.",
            technologies: ["React", "Tailwind CSS", "Local Storage"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            category: "frontend",
            image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App",
            description: "A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful UI design.",
            technologies: ["JavaScript", "HTML5", "CSS3", "API"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "Blog Platform",
            category: "fullstack",
            image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Blog+Platform",
            description: "A content management system for blogs with user authentication, rich text editor, and comment system.",
            technologies: ["React", "Express.js", "MySQL", "JWT"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "Portfolio Website",
            category: "frontend",
            image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
            description: "A modern, responsive portfolio website showcasing skills, projects, and contact information.",
            technologies: ["React", "Tailwind CSS", "Responsive Design"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "API Development",
            category: "backend",
            image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=API+Dev",
            description: "RESTful API development with authentication, data validation, and comprehensive documentation.",
            technologies: ["Node.js", "Express.js", "JWT", "Swagger"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'fullstack', name: 'Full Stack' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Portfolio</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents my skills and passion for creating meaningful applications.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                                        <a 
                                            href={project.liveLink}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubLink}
                                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">Interested in Working Together?</h3>
                        <p className="text-xl mb-6">Let's discuss your project and see how I can help bring your ideas to life.</p>
                        <button 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;