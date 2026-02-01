import React from 'react';
import styled, { keyframes } from 'styled-components';
import { projects } from '../../data/siteData';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const staticMove = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.4s ease-out;
  overflow: hidden;
`;

/* Animated Background */
const Background = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.08;
    animation: ${staticMove} 0.5s steps(10) infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 2px,
      rgba(0,0,0,0.2) 2px,
      rgba(0,0,0,0.2) 4px
    );
    pointer-events: none;
  }
`;

const ScanLine = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%);
    animation: ${scanline} 5s linear infinite;
  }
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(10px, 1.5vh, 20px) clamp(12px, 2vw, 30px);
  background: rgba(0,0,0,0.4);
  border-bottom: 3px solid #2A9D8F;
  flex-shrink: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LevelBadge = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 0.8vw, 0.5rem);
  color: #2A9D8F;
  background: rgba(42, 157, 143, 0.2);
  padding: 4px 8px;
  border: 1px solid #2A9D8F;
  border-radius: 2px;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.6rem, 1.5vw, 1rem);
  color: #fff;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
`;

const BackButton = styled.button`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 0.8vw, 0.55rem);
  color: #aaa;
  background: rgba(255,255,255,0.05);
  border: 2px solid #555;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #fff;
    border-color: #2A9D8F;
    background: rgba(42, 157, 143, 0.1);
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: clamp(12px, 2vh, 30px);
  min-height: 0;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: #2A9D8F;
    border-radius: 0;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(12px, 2vh, 25px);
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1600px) {
    max-width: 1300px;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: clamp(15px, 2vh, 35px);
  background: rgba(0,0,0,0.5);
  border: 2px solid #333;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  
  @media (min-width: 1600px) {
    padding: 40px;
  }
  
  /* Arcade cabinet style top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2A9D8F 0%, #264653 50%, #2A9D8F 100%);
  }
  
  /* Corner decoration */
  &::after {
    content: '▶';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #2A9D8F;
    opacity: 0;
    transition: all 0.2s;
  }
  
  &:hover {
    border-color: #2A9D8F;
    background: rgba(42, 157, 143, 0.1);
    transform: translateY(-3px);
    
    &::after {
      opacity: 1;
      right: 12px;
    }
  }
`;

const ProjectNumber = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.5rem;
  color: #2A9D8F;
  opacity: 0.6;
  margin-bottom: 8px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.5rem, 1.2vw, 0.95rem);
  color: #fff;
  margin: 0 0 8px;
  line-height: 1.5;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.5);
  padding-right: 30px;
`;

const ProjectSubtitle = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.35rem, 0.7vw, 0.45rem);
  color: #FFD700;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &::before {
    content: '★';
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

const ProjectDescription = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
  line-height: 1.7;
  color: #aaa;
  margin: 0;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Tag = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.35rem, 0.5vw, 0.5rem);
  color: #2A9D8F;
  background: rgba(42, 157, 143, 0.15);
  padding: clamp(4px, 0.5vh, 6px) clamp(8px, 1vw, 12px);
  border: 1px solid rgba(42, 157, 143, 0.3);
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 25px);
  margin-top: clamp(15px, 2vh, 25px);
  padding: clamp(12px, 2vh, 20px) 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 1600px) {
    max-width: 1300px;
  }
`;

const Stat = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.45rem, 0.8vw, 0.7rem);
  color: #666;
  
  span {
    color: #2A9D8F;
    margin-left: 5px;
  }
`;

const ProjectsScreen = ({ onBack }) => {
  return (
    <Container>
      <Background />
      <ScanLine />
      
      <ContentLayer>
        <Header>
          <TitleWrapper>
            <LevelBadge>LVL 3</LevelBadge>
            <Title>PROJECTS</Title>
          </TitleWrapper>
          <BackButton onClick={onBack}>← BACK</BackButton>
        </Header>
        
        <Content>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ProjectNumber>PROJECT_{String(index + 1).padStart(2, '0')}</ProjectNumber>
                <ProjectTitle>{project.title}</ProjectTitle>
                {project.subtitle && (
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                )}
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.tags && project.tags.length > 0 && (
                  <Tags>
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </Tags>
                )}
              </ProjectCard>
            ))}
          </ProjectGrid>
          
          <Stats>
            <Stat>TOTAL PROJECTS:<span>{projects.length}</span></Stat>
            <Stat>STATUS:<span>BUILDING MORE...</span></Stat>
          </Stats>
        </Content>
      </ContentLayer>
    </Container>
  );
};

export default ProjectsScreen;
