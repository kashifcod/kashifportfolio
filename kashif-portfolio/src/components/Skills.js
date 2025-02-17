import React from 'react';

const SkillCard = ({ title, percentage }) => {
    return (
        <div className="col-md-6">
            <div className="skill-card">
                <h4>{title}</h4>
                <div className="skill-bar mt-3">
                    <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        </div>
    );
};

function Skills() {
    return (
        <section id="skills" className="bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Technical Skills</h2>
                <div className="row g-4">
                    <SkillCard title="HTML" percentage={95} />
                    <SkillCard title="CSS" percentage={90} />
                    <SkillCard title="JavaScript" percentage={85} />
                    <SkillCard title="React" percentage={80} />
                </div>
            </div>
        </section>
    );
}

export default Skills;