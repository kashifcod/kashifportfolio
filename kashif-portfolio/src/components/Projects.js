import React from 'react';
import ecomerceImage from '../Images/e comerce website.jpg';
import taskManagementImage from '../Images/Task Management App.png';
import erpImage from '../Images/erp.PNG';
import portfolioImage from '../Images/Capture.PNG';

const ProjectCard = ({ title, image, description, tech, link }) => {
    return (
        <div className="col-md-6">
            <div className="project-card">
                <img src={image} className="project-img img-fluid" alt={title} />
                <div className="p-4 d-flex flex-column align-items-center">
                    <h4>{title}</h4>
                    <p className="text-muted">{tech}</p>
                    <p>{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Visit Project
                    </a>
                </div>
            </div>
        </div>
    );
};

function Projects() {
    const projectsData = [
        {
            title: 'E-commerce Platform',
            image: ecomerceImage,
            description: 'E-commerce solution with real-time inventory management.',
            tech: 'JavaScript, Reactjs',
            link: '',
        },
        {
            title: 'Task Management App',
            image: taskManagementImage,
            description: 'Real-time collaborative task management application with user authentication.',
            tech: 'JavaScript, Reactjs',
            link: '#',
        },
        {
            title: 'Enterprise resource planning (ERP)',
            image: erpImage,
            description: 'This ERP is a Software that is used in schools, colleges .',
            tech: 'Reactjs',
            link: 'http://188.245.127.106:8080/dashboard',
        },
        {
            title: 'Portfolio Website',
            image: portfolioImage,
            description: 'Responsive portfolio website with dark mode and smooth animations.',
            tech: 'HTML, CSS, JavaScript, Reactjs , Bootstrap',
            link: '#',
        },
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="text-center mb-5">Featured Projects</h2>
                <div className="row g-4">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;