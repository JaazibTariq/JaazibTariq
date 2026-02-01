import React from 'react';
import styled, { keyframes } from 'styled-components';
import { experiences } from '../../data/siteData';

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
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
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
  border-bottom: 3px solid #FF6B35;
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
  color: #FF6B35;
  background: rgba(255, 107, 53, 0.2);
  padding: 4px 8px;
  border: 1px solid #FF6B35;
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
    border-color: #FF6B35;
    background: rgba(255, 107, 53, 0.1);
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
    background: #FF6B35;
    border-radius: 0;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vh, 25px);
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1600px) {
    max-width: 1000px;
    gap: 30px;
  }
`;

const ExperienceCard = styled.a`
  display: block;
  padding: clamp(15px, 2.5vh, 35px);
  background: rgba(0,0,0,0.5);
  border: 2px solid #333;
  border-left: 4px solid #FF6B35;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  
  /* Pixel corner decorations */
  &::before {
    content: '>';
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
    color: #FF6B35;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  &:hover {
    border-color: #FF6B35;
    background: rgba(255, 107, 53, 0.1);
    transform: translateX(5px);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 1600px) {
    padding: 40px;
    border-left-width: 5px;
  }
`;

const CardContent = styled.div`
  padding-left: 20px;
`;

const Company = styled.h3`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.5rem, 1.2vw, 1rem);
  color: #fff;
  margin: 0 0 10px;
  line-height: 1.5;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.5);
`;

const Role = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.9rem, 1.5vw, 1.4rem);
  color: #FF6B35;
  margin: 0 0 8px;
`;

const DateRange = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.35rem, 0.8vw, 0.6rem);
  color: #666;
  letter-spacing: 1px;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 20px);
  margin-top: clamp(15px, 2vh, 20px);
  padding-top: clamp(10px, 1.5vh, 15px);
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Stat = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.45rem, 0.8vw, 0.7rem);
  color: #666;
  
  span {
    color: #FF6B35;
    margin-left: 5px;
  }
`;

const ExperienceScreen = ({ onBack }) => {
  return (
    <Container>
      <Background />
      <ScanLine />
      
      <ContentLayer>
        <Header>
          <TitleWrapper>
            <LevelBadge>LVL 1</LevelBadge>
            <Title>EXPERIENCE</Title>
          </TitleWrapper>
          <BackButton onClick={onBack}>← BACK</BackButton>
        </Header>
        
        <Content>
          <ExperienceList>
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={exp.id} 
                href={exp.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CardContent>
                  <Company>{exp.company}</Company>
                  <Role>{exp.role}</Role>
                  <DateRange>{exp.dateRange}</DateRange>
                </CardContent>
              </ExperienceCard>
            ))}
          </ExperienceList>
          
          <Stats>
            <Stat>JOBS COMPLETED:<span>{experiences.length}</span></Stat>
            <Stat>STATUS:<span>ACTIVE</span></Stat>
          </Stats>
        </Content>
      </ContentLayer>
    </Container>
  );
};

export default ExperienceScreen;
