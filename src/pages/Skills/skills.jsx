import React from 'react'

function Skills() {
    const skills = [
        {
            category: "Frontend Development",
            technologies: [
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 85 },
                { name: "HTML5 & CSS3", level: 95 },
                { name: "Tailwind CSS", level: 88 },
                { name: "TypeScript", level: 75 }
            ]
        },
        {
            category: "Backend Development",
            technologies: [
                { name: "Node.js", level: 80 },
                { name: "Express.js", level: 85 },
                { name: "Python", level: 70 },
                { name: "PHP", level: 65 },
                { name: "RESTful APIs", level: 85 }
            ]
        },
        {
            category: "Database & Tools",
            technologies: [
                { name: "MongoDB", level: 75 },
                { name: "MySQL", level: 80 },
                { name: "Git & GitHub", level: 85 },
                { name: "VS Code", level: 90 },
                { name: "Postman", level: 80 }
            ]
        },
        {
            category: "Other Skills",
            technologies: [
                { name: "Responsive Design", level: 90 },
                { name: "UI/UX Design", level: 75 },
                { name: "Agile Methodology", level: 70 },
                { name: "Problem Solving", level: 85 },
                { name: "Team Collaboration", level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Skills</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I've developed a diverse set of skills through my studies and projects. 
                        Here's what I bring to the table:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-4">
                                {skillGroup.technologies.map((tech, techIndex) => (
                                    <div key={techIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">{tech.name}</span>
                                            <span className="text-blue-600 font-semibold">{tech.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{width: `${tech.level}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                    <h3 className="text-3xl font-bold mb-6 text-center">What I'm Learning</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h4 className="font-semibold mb-2">Next.js</h4>
                            <p className="text-blue-100">Advanced React framework for production</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h4 className="font-semibold mb-2">GraphQL</h4>
                            <p className="text-blue-100">Modern API query language</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h4 className="font-semibold mb-2">Cybersecurity</h4>
                            <p className="text-blue-100">Web security and best practices</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;