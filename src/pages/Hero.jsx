import React from 'react'
import Home from './Home/home'
import About from './About/about'
import Skills from './Skills/skills'
import Portfolio from './Portfolio/portfolio'
import Contact from './Contact/contact'

function Hero() {
    return (
        <>
            <Home />
            <About />
            <Skills />  
            <Portfolio />
            <Contact />
        </> 
    )
}

export default Hero;