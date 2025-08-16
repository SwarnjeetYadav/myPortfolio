import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { sendToDiscord } from '../../services/sendToDiscord'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    // Get reCAPTCHA site key from environment variables
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

    // Load reCAPTCHA script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => setRecaptchaLoaded(true);
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [recaptchaSiteKey]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const executeRecaptcha = () => {
        return new Promise((resolve, reject) => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact_form' })
                        .then(token => {
                            resolve(token);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            } else {
                reject(new Error('reCAPTCHA not loaded'));
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!recaptchaLoaded) {
            alert('reCAPTCHA is still loading. Please wait a moment and try again.');
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Execute reCAPTCHA
            const token = await executeRecaptcha();
            setRecaptchaToken(token);
            
            // Send form data with reCAPTCHA token
            await sendToDiscord({ 
                name: formData.name, 
                email: formData.email, 
                subject: formData.subject, 
                message: formData.message,
                recaptchaToken: token 
            });
            
            alert('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setRecaptchaToken('');
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and exciting projects. 
                        Feel free to reach out if you'd like to work together or just want to say hello!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Mail className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">swarnjeet.kr.yadav@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+91 xxxxxxxxxx</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <MapPin className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Location</h4>
                                        <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com/SwarnjeetYadav" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                                <a 
                                    href="www.linkedin.com/in/swarnjeet-yadav-220993244" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a 
                                    href="https://x.com/SwarnjeetY" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                                >
                                    <Twitter size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
                            <p className="text-gray-600 mb-4">
                                I'm currently available for freelance work and full-time opportunities. 
                                I'm particularly interested in:
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Full-stack development projects</li>
                                <li>• React.js and Node.js applications</li>
                                <li>• UI/UX design and development</li>
                                <li>• API development and integration</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="What's this about?"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                ></textarea>
                            </div>

                            {/* reCAPTCHA */}
                            <div className="flex justify-center">
                                <div 
                                    className="g-recaptcha" 
                                    data-sitekey={recaptchaSiteKey}
                                    data-callback="onRecaptchaSuccess"
                                    data-expired-callback="onRecaptchaExpired"
                                ></div>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting || !recaptchaLoaded}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <Send size={20} className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;