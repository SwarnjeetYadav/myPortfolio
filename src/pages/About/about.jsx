import React from 'react'

function About() {
    return (
        <section id="about" className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I'm a passionate BCA student with a strong foundation in computer science and a keen interest in full-stack development. 
                            I love creating web applications that are not only functional but also provide an excellent user experience.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            My journey in technology started with curiosity and has evolved into a passion for building innovative solutions. 
                            I believe in writing clean, maintainable code and staying updated with the latest technologies and best practices.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-800">Education</h4>
                                <p className="text-gray-600">BCA Student</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-800">Experience</h4>
                                <p className="text-gray-600">Full-Stack Developer</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-800">Focus</h4>
                                <p className="text-gray-600">Web Applications</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-800">Specialty</h4>
                                <p className="text-gray-600">User Experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Frontend Development</span>
                                    <span className="text-blue-600 font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Backend Development</span>
                                    <span className="text-blue-600 font-semibold">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">Database Management</span>
                                    <span className="text-blue-600 font-semibold">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">UI/UX Design</span>
                                    <span className="text-blue-600 font-semibold">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;