import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';  

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavLinkClick = (sectionId) => {
        closeMenu();
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    KASHIF ALI PORTFOLIO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={() => handleNavLinkClick('home')}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={() => handleNavLinkClick('about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills" onClick={() => handleNavLinkClick('skills')}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={() => handleNavLinkClick('projects')}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience" onClick={() => handleNavLinkClick('experience')}>
                                Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={() => handleNavLinkClick('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ThemeToggle /> 
                </div>
            </div>
        </nav>
    );
}

export default Navigation;