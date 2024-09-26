import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffffff;
`;

const ExperienceItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #ffffff;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 5px;
  color: #3498db;
`;

const DateRange = styled.p`
  font-style: italic;
  margin-bottom: 15px;
  color: #bdc3c7;
`;

const Description = styled.ul`
  padding-left: 20px;
  margin-bottom: 15px;
  color: #ecf0f1;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const SkillItem = styled.li`
  background-color: rgba(52, 152, 219, 0.2);
  color: #3498db;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ExperienceItem = ({ job, company, dateRange, description, skills, companyUrl }) => {
  const handleClick = () => {
    window.open(companyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <ExperienceItemWrapper onClick={handleClick}>
      <JobTitle>{job}</JobTitle>
      <Company>{company}</Company>
      <DateRange>{dateRange}</DateRange>
      <Description>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Description>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </ExperienceItemWrapper>
  );
};

const Experience = () => {
  const experiences = [
    {
      job: "Front End Engineer",
      company: "SellStatic",
      dateRange: "June 2024 – Present",
      description: [
        "Designed and developed a front-end web application using React, TypeScript, JavaScript, and HTML/CSS, ensuring responsive web design.",
        "Collaborated with UI/UX developers and back-end teams to implement new features and integrate ideas.",
        "Utilized Git for version control and team collaboration.",
        "Led a complete UI/UX overhaul, resulting in a 300% increase in customer satisfaction."
      ],
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git", "UI/UX Design"],
      companyUrl: "https://www.sellstatic.com"
    },
    {
      job: "Software Developer",
      company: "MAX - Muslims Achieving Excellence",
      dateRange: "August 2024 - Present",
      description: [
        "Developed a secure frontend for a professional networking web app using React + Vite and Chakra UI.",
        "Optimized application performance by refactoring large pages into modular, reusable components.",
        "Assisted in frontend revamp using React, TypeScript, and Material UI, addressing code organization and UI consistency issues.",
        "Leveraged AWS Lambda and Node.js to enhance backend functionality and improve scalability."
      ],
      skills: ["React", "Vite", "Chakra UI", "TypeScript", "Material UI", "AWS Lambda", "Node.js"],
      companyUrl: "https://onemax.org"
    }
  ];

  return (
    <ExperienceWrapper>
      <Title>Experience</Title>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </ExperienceWrapper>
  );
};

export default Experience;