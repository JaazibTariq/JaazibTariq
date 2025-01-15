import React from 'react';
import styled from 'styled-components';
import CodeClashers from './Code Clashers.webp'

// Styled components
const ProjectsContainer = styled.div`
  width: 100%;
`;

const ProjectsTitle = styled.h2`
  color: #ccd6f6;
  font-size: 3rem;
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
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 8px;
  
 
  
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 16px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const ClickableCard = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// ProjectCard component
const ProjectCard = ({ title, duration, description, techStack, imageUrl, link }) => {
  if (imageUrl) {
    return (
      <Card>
        <CardContainer>
          <LeftSection>
            <Title>{title}</Title>
            <Duration>{duration}</Duration>
            <Description>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </Description>
            <TechStack>Tech Stack: {techStack}</TechStack>
          </LeftSection>
          <RightSection>
            <Image src={imageUrl} alt={`${title} project`} />
          </RightSection>
        </CardContainer>
      </Card>
    );
  } else {
    return (
      <ClickableCard href={link} target="_blank" rel="noopener noreferrer">
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
      </ClickableCard>
    );
  }
};

// Projects component
const Projects = () => {
  const projects = [
    {
      title: "CodeClashers",
      duration: "October 2023 – Present",
      description: [
        "Utilized React to develop a competitive coding platform where 100+ users compete against one another in real time to solve leetcode style problems.",
        "Fine tuned OpenAI’s gpt-4 and integrated it using their API in order to develop a deep comprehensive database of over 1000+ problems.",
        "Utilized Python along with PyMongo to add problems to a MongoDB collection.",
        "Engineered a code compiler utilizing a REST API and Node Js alongside Judge0, which pulls problem data from a MongoDB database.",
        "Configured and deployed Judge0 using Docker to enable a local coding judge API for evaluating code submissions efficiently and securely.",
        "Leveraged AWS Lambda to create a fully serverless backend architecture, powering the entire application logic."

      ],
      techStack: "React, NodeJs, Python, TypeScript, OpenAI, MongoDB, PyMongo, REST API, AWS Lambda, Docker ",
      imageUrl: CodeClashers
    },
    {
      title: "Typing Tussle - Rythym Hacks Winner",
      duration: "August 2023",
      description: [
        "Utilized Python alongside Pygame to create a hackathon winning project at RythymHacks.",
        "Created a turn based game where users had to type a given sentence with accuracy and speed to gain points and deal damage to the enemy."
      ],
      techStack: "Python, Pygame, Git",
      link: "https://example.com/typing-tussle"
    },
    {
      title: "WelcomeWords",
      duration: "August 2023",
      description: [
        " Built an interactive English learning application using Java Swing, featuring randomized quizzes, image-based prompts, and a letter sorting game for an engaging user experience.",
        "Implemented randomized quiz selection, persistent score tracking using file handling, and input validation for a seamless and responsive gameplay experience."
        
      ],
      techStack: "Java, JavaSwing",
      link: "https://example.com/welcomewords"
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
