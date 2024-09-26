import React from 'react';
import styled from 'styled-components';

// Styled components
const ProjectsContainer = styled.div`
  width: 100%;
`;

const ProjectsTitle = styled.h2`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Card = styled.div`
  background-color: rgba(10, 25, 47, 0.85);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: #ccd6f6;
  padding-left: 1.5rem;
`;

const TechStack = styled.p`
  color: #64ffda;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

// ProjectCard component
const ProjectCard = ({ title, duration, description, techStack }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Duration>{duration}</Duration>
      <Description>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Description>
      <TechStack>Tech Stack: {techStack}</TechStack>
    </Card>
  );
};

// Projects component
const Projects = () => {
  const projects = [
    {
      title: "Calendar and Notification App",
      duration: "June 2023 – December 2023",
      description: [
        "Collaborated with a team to develop a mobile application for a local community to stay up-to-date with events",
        "Utilized React Native for the front-end of the app, ensuring proper UI/UX design",
        "Worked closely with backend-developers to ensure smooth and efficient design",
        "Utilized Git for version control and collaboration"
      ],
      techStack: "Javascript, Typescript, React Native, React"
    },
    {
      title: "Google x TKS Fall Challenge",
      duration: "Dec 2023",
      description: [
        "Worked alongside Google to find a way to make their business model more effective",
        "In a group, proposed two solutions with prototypes",
        "Google Ads+: An upgraded version of Google Ads which provided users with feedback on how to improve the quality score of their advertisements and provided users with a landing page created by Gemini AI",
        "Google Lite: A mobile app that provides quick-fast 'snippet'-like search results that keeps users immersed in content"
      ],
      techStack: "Figma, Canva, Gemini AI"
    }
    // Add more projects here if needed
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;