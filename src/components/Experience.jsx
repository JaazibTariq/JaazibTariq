import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffffff;
`;

const ExperienceItem = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
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

const Experience = () => {
  return (
    <ExperienceWrapper>
      <Title>Experience</Title>
      <ExperienceItem>
        <JobTitle>Front End Engineer</JobTitle>
        <Company>SellStatic</Company>
        <DateRange>June 2024 – Present</DateRange>
        <Description>
          <li>Designed and developed a front-end web application using React, TypeScript, JavaScript, and HTML/CSS, ensuring responsive web design.</li>
          <li>Collaborated with UI/UX developers and back-end teams to implement new features and integrate ideas.</li>
          <li>Utilized Git for version control and team collaboration.</li>
          <li>Led a complete UI/UX overhaul, resulting in a 300% increase in customer satisfaction.</li>
        </Description>
        <SkillsList>
          <SkillItem>React</SkillItem>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>HTML/CSS</SkillItem>
          <SkillItem>Git</SkillItem>
          <SkillItem>UI/UX Design</SkillItem>
        </SkillsList>
      </ExperienceItem>
      <ExperienceItem>
        <JobTitle>Software Developer</JobTitle>
        <Company>MAX - Muslims Achieving Excellence</Company>
        <DateRange>August 2024 - Present</DateRange>
        <Description>
          <li>Developed a secure frontend for a professional networking web app using React + Vite and Chakra UI.</li>
          <li>Optimized application performance by refactoring large pages into modular, reusable components.</li>
          <li>Assisted in frontend revamp using React, TypeScript, and Material UI, addressing code organization and UI consistency issues.</li>
          <li>Leveraged AWS Lambda and Node.js to enhance backend functionality and improve scalability.</li>
        </Description>
        <SkillsList>
          <SkillItem>React</SkillItem>
          <SkillItem>Vite</SkillItem>
          <SkillItem>Chakra UI</SkillItem>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>Material UI</SkillItem>
          <SkillItem>AWS Lambda</SkillItem>
          <SkillItem>Node.js</SkillItem>
        </SkillsList>
      </ExperienceItem>
    </ExperienceWrapper>
  );
};

export default Experience;