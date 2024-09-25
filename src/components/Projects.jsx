import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProjectItem = styled.div`
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
`;

const TechStack = styled.p`
  font-style: italic;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectItem>
        <ProjectTitle>Personal Portfolio Website</ProjectTitle>
        <ProjectDescription>
          Designed and developed a responsive personal portfolio website to showcase my projects and skills.
        </ProjectDescription>
        <TechStack>Tech stack: React, Styled Components, CSS</TechStack>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle>Machine Learning Image Classifier</ProjectTitle>
        <ProjectDescription>
          Built a convolutional neural network to classify images of handwritten digits with 98% accuracy.
        </ProjectDescription>
        <TechStack>Tech stack: Python, TensorFlow, Keras</TechStack>
      </ProjectItem>
      {/* Add more project items as needed */}
    </ProjectsWrapper>
  );
};

export default Projects;