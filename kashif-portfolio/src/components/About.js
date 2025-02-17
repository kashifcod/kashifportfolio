import React from 'react';
import profileImage from '../Images/profile 1.png';

function About() {
    return (
        <section id="about">
            <div className="container mt-5">
                <h2 className="text-center mb-5">About Me</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src={profileImage} className="about-img mt-0" alt="Kashif Ali" />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <h3>Hi, I'm Kashif Ali</h3>
                        <p className="lead">
                            Passionate frontend developer with 5+ years of experience in creating beautiful and functional web
                            applications. Specialized in React ecosystem and modern JavaScript frameworks.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and creating intuitive user experiences. When I'm not
                            coding, you can find me contributing to open-source projects or learning new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;