import React from 'react';
import styled from 'styled-components';

// Styled components
const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectsTitle = styled.h2`
  color: #e9d5ff;
  font-family: 'Bangers', cursive;
  font-size: 2.4rem;
  margin: 0 0 0.75rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardLink = styled.a`
  text-decoration: none;
  display: block;
`;

const Card = styled.div`
  background: rgba(28, 0, 50, 0.65);
  border: 1px solid rgba(192,132,252,0.28);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(192,132,252,0.5);
    background: rgba(28, 0, 50, 0.72);
  }
`;

const Title = styled.h3`
  color: #c084fc;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.3rem;
  margin: 0;
`;

const OneLiner = styled.p`
  color: #e9d5ff;
  font-size: 0.95rem;
  margin: 0.15rem 0 0;
  opacity: 0.92;
`;

const Arrow = styled.span`
  margin-left: auto;
  color: #c084fc;
`;

// simplified; grid tiles

// ProjectCard component
const ProjectCard = ({ title, oneLine, link }) => (
  <CardLink href={link} target="_blank" rel="noopener noreferrer">
    <Card>
      <Title>{title}</Title>
      <OneLiner>{oneLine}</OneLiner>
    </Card>
  </CardLink>
);

// Projects component
const Projects = () => {
  const projects = [
    {
      title: 'CodeClashers',
      oneLine: 'Competitive coding platform with real‑time matches and an AI-curated problem bank.',
      link: 'https://github.com/JaazibTariq'
    },
    {
      title: 'Capital Quest',
      oneLine: 'A 3d game where you learn about finance, investing, the stock market, and real estate.',
      link: 'https://devpost.com/software/idk-mng58v'
    },
    {
      title: 'Mesh AI',
      oneLine: 'AI-powered connection tool for software engineers looking to collaborate.',
      link: 'https://github.com/jaedonvisva/mesh'
    },
    {
      title: 'Typing Tussle — Rhythm Hacks Winner',
      oneLine: 'Turn-based typing battler built with Python and Pygame.',
      link: 'https://devpost.com/software/3-1-ratio'
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
