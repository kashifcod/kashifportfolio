import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import resume from '../Kashif react.pdf';
function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container">
                    <h1 className="display-1 fw-bold mb-4">Frontend Developer</h1>
                    <p className="lead fs-4">Creating immersive digital experiences with modern web technologies</p>

                    <div className="social-icons">
                        <a href="https://github.com/kashifcod" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/kashifali07/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100008581177306"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://wa.me/message/CBBH7TI6BL2GD1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    <a href="#contact" className="btn btn-primary ms-2 mt-3">
                        Get in touch
                    </a>
                    <a href={resume} className="btn btn-outline-primary ms-2 mt-3" target="_blank" download>
                        Download CV
                    </a>
                </div>
            </section>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default Home;