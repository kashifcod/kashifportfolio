import React from 'react';

const TimelineItem = ({ title, company, years, description }) => {
  return (
    <div className="timeline-item">
      <h4>{title}</h4>
      <p className="text-muted mb-2">
        {company} ({years})
      </p>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function Experience() {
  const experienceData = [
    {
      title: 'Frontend Developer',
      company: 'Ornesol Private Limited',
      years: '2024-Present',
      description: [
        'Developing and maintaining enterprise-level web applications',
        'Implementing responsive UI components with React',
        'Optimizing web performance and accessibility',
      ],
    },
    // {
    //   title: 'Junior Frontend Developer',
    //   company: 'Tech Solutions Inc.',
    //   years: '2023-2024',
    //   description: [
    //     'Collaborated on 10+ client projects',
    //     'Implemented REST APIs integration',
    //     'Developed reusable components',
    //   ],
    // },
  ];

  return (
    <section id="experience" className="bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Professional Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;