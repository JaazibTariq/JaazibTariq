import React from 'react';
import styled, { keyframes } from 'styled-components';
import { personalInfo } from '../../data/siteData';

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

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 50% { border-color: #E63946; }
  51%, 100% { border-color: transparent; }
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
  background: linear-gradient(135deg, #1a1423 0%, #2d1b3d 50%, #1a1423 100%);
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
  padding: clamp(8px, 1.5vh, 20px) clamp(12px, 2vw, 30px);
  background: rgba(0,0,0,0.4);
  border-bottom: 3px solid #E63946;
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
  color: #E63946;
  background: rgba(230, 57, 70, 0.2);
  padding: 4px 8px;
  border: 1px solid #E63946;
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
    border-color: #E63946;
    background: rgba(230, 57, 70, 0.1);
  }
`;

const Content = styled.div`
  flex: 1;
  display: block;
  padding: clamp(10px, 2vh, 30px);
  min-height: 0;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: #E63946;
    border-radius: 0;
  }
`;

const AboutCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgba(0,0,0,0.5);
  border: 2px solid #333;
  padding: clamp(15px, 3vh, 50px);
  padding-top: clamp(35px, 5vh, 65px);
  position: relative;
  margin: 0 auto;
  
  /* Terminal-style top bar */
  &::before {
    content: 'PLAYER_PROFILE.exe';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #E63946;
    color: #fff;
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(0.4rem, 0.6vw, 0.55rem);
    padding: clamp(5px, 1vh, 10px) 15px;
    letter-spacing: 1px;
  }
  
  @media (min-width: 1600px) {
    max-width: 900px;
    padding: 60px;
    padding-top: 75px;
  }
`;

const CardContent = styled.div`
  margin-top: 10px;
`;

const Greeting = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.6rem, 1.5vw, 1.2rem);
  color: #E63946;
  margin: 0 0 clamp(15px, 3vh, 35px);
  line-height: 1.8;
  display: flex;
  align-items: center;
  
  &::after {
    content: '_';
    animation: ${blink} 1s step-end infinite;
    margin-left: 2px;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vh, 25px);
`;

const Paragraph = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.9rem, 1.3vw, 1.35rem);
  line-height: 1.8;
  color: #bbb;
  margin: 0;
  padding-left: clamp(12px, 1.5vw, 20px);
  border-left: 2px solid #444;
`;

const Highlight = styled.span`
  color: #E63946;
  font-weight: bold;
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(10px, 2vw, 20px);
  margin-top: clamp(15px, 2vh, 25px);
  padding-top: clamp(12px, 1.5vh, 20px);
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const StatItem = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 0.6vw, 0.6rem);
  color: #666;
  
  span {
    color: #E63946;
    margin-left: 5px;
  }
`;

const AboutScreen = ({ onBack }) => {
  return (
    <Container>
      <Background />
      <ScanLine />
      
      <ContentLayer>
        <Header>
          <TitleWrapper>
            <LevelBadge>LVL 2</LevelBadge>
            <Title>ABOUT ME</Title>
          </TitleWrapper>
          <BackButton onClick={onBack}>← BACK</BackButton>
        </Header>
        
        <Content>
          <AboutCard>
            <CardContent>
              <Greeting>Hello, World!</Greeting>
              <Bio>
                {personalInfo.bio.map((paragraph, index) => (
                  <Paragraph key={index}>{paragraph}</Paragraph>
                ))}
                <Paragraph>
                  Currently studying <Highlight>Computer Engineering</Highlight> at the{' '}
                  <Highlight>University of Waterloo</Highlight>.
                </Paragraph>
              </Bio>
              
              <StatsRow>
                <StatItem>CLASS:<span>ENGINEER</span></StatItem>
                <StatItem>SCHOOL:<span>UWATERLOO</span></StatItem>
                <StatItem>STATUS:<span>LEARNING</span></StatItem>
              </StatsRow>
            </CardContent>
          </AboutCard>
        </Content>
      </ContentLayer>
    </Container>
  );
};

export default AboutScreen;
