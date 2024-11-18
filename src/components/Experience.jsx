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
        "Improved marketing and advertising processes using artificial intelligence, optimizing workflows for efficiency and increasing user adoption.",
        "Reduced Advertisement creation time by 30% by implementing features using React and TypeScript that allows users to modify their marketing campaign colors before creation.",
        "Boosted customer satisfaction by 230% by implementing a complete front end overhaul that introduced a modern UI as well as various help features for users using React and TypeScript.",
        "Coordinated front-end development tasks using Git, ensuring seamless collaboration and maintaining code integrity throughout development."
      ],
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git", "UI/UX Design"],
      companyUrl: "https://www.sellstatic.com"
    },
    {
      job: "Software Developer",
      company: "MAX - Muslims Achieving Excellence",
      dateRange: "August 2024 - Present",
      description: [
        "Built a professional networking web app for Muslim professionals using React, Vite, and Chakra UI, ensuring a responsive and user-friendly interface.",
        "Refactored large pages into modular, reusable components, improving development efficiency, maintainability, and overall application performance.",
        "Revamped the MAX Aspire frontend using React, TypeScript, and Material UI, resolving issues such as disorganized code, conflicting CSS, and inconsistent UI designs.",
        "Improved asset loading speed and resolved functionality gaps by integrating the frontend with the backend API, enhancing user experience and performance.",
        "Implemented Redux across pages to fix the issue of state transfer by storing all state in a single location.",
        "Leveraged AWS Lambda and Node.js for server less backend processing, improving scalability and performance of key application features."
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