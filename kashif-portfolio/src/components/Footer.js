import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container text-center">
                <div className="quick-links mt-3">
                    <h5>Quick Links</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="nav-link" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <h5>Social Links</h5>
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
                    <a href="#" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <p className="mb-1">© 2024 Kashif Ali. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;