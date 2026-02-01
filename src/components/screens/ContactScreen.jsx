import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
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
  padding: clamp(12px, 2vh, 20px) clamp(15px, 3vw, 30px);
  background: rgba(0,0,0,0.4);
  border-bottom: 3px solid #0166FF;
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
  color: #0166FF;
  background: rgba(1, 102, 255, 0.2);
  padding: 4px 8px;
  border: 1px solid #0166FF;
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
    border-color: #0166FF;
    background: rgba(1, 102, 255, 0.1);
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: clamp(15px, 3vh, 30px);
  min-height: 0;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: #0166FF;
    border-radius: 0;
  }
  
  @media (min-height: 550px) {
    justify-content: center;
  }
`;

const ContactCard = styled.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
  flex-shrink: 0;
  padding: 10px 0;
  
  @media (min-width: 1600px) {
    max-width: 700px;
  }
`;

const Message = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.95rem, 1.4vw, 1.4rem);
  line-height: 1.8;
  color: #bbb;
  margin: 0 0 clamp(20px, 3vh, 40px);
  padding: 0 15px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(10px, 2vh, 20px);
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 1.5vh, 18px);
  padding: clamp(15px, 3vh, 45px);
  background: rgba(0,0,0,0.5);
  border: 2px solid #333;
  text-decoration: none;
  color: #aaa;
  transition: all 0.2s ease;
  position: relative;
  
  /* Top accent line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$accentColor || '#0166FF'};
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  
  &:hover {
    border-color: ${props => props.$accentColor || '#0166FF'};
    background: ${props => `${props.$accentColor}15` || 'rgba(1, 102, 255, 0.1)'};
    color: #fff;
    transform: translateY(-3px);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      animation: ${pulse} 0.5s ease-in-out;
    }
  }
  
  svg {
    font-size: clamp(1.8rem, 4vw, 3rem);
    color: ${props => props.$accentColor || '#0166FF'};
  }
`;

const LinkLabel = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.45rem, 1vw, 0.75rem);
  letter-spacing: 1px;
`;

const EmailLink = styled(ContactLink)`
  grid-column: 1 / -1;
  flex-direction: row;
  gap: 15px;
  padding: clamp(15px, 2vh, 20px);
`;

const EmailText = styled.span`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  color: #0166FF;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(15px, 2vw, 25px);
  margin-top: clamp(15px, 2vh, 25px);
  padding-top: clamp(12px, 1.5vh, 20px);
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const StatusItem = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 0.6vw, 0.6rem);
  color: #666;
  
  span {
    color: #0166FF;
    margin-left: 5px;
  }
`;

const ContactScreen = ({ onBack }) => {
  return (
    <Container>
      <Background />
      <ScanLine />
      
      <ContentLayer>
        <Header>
          <TitleWrapper>
            <LevelBadge>LVL 4</LevelBadge>
            <Title>CONTACT</Title>
          </TitleWrapper>
          <BackButton onClick={onBack}>← BACK</BackButton>
        </Header>
        
        <Content>
          <ContactCard>
            <Message>
              Always looking to meet and talk with new people! Feel free to reach out below.
            </Message>
            
            <ContactGrid>
              <ContactLink 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                $accentColor="#6e5494"
              >
                <FaGithub />
                <LinkLabel>GITHUB</LinkLabel>
              </ContactLink>
              
              <ContactLink 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                $accentColor="#0077B5"
              >
                <FaLinkedin />
                <LinkLabel>LINKEDIN</LinkLabel>
              </ContactLink>
              
              <ContactLink 
                href="https://x.com/JaazibTar"
                target="_blank"
                rel="noopener noreferrer"
                $accentColor="#1DA1F2"
              >
                <FaXTwitter />
                <LinkLabel>X</LinkLabel>
              </ContactLink>
              
              <ContactLink 
                href={`mailto:${personalInfo.email}`}
                $accentColor="#EA4335"
              >
                <FaEnvelope />
                <LinkLabel>EMAIL</LinkLabel>
              </ContactLink>
            </ContactGrid>
            
            <StatusBar>
              <StatusItem>INBOX:<span>OPEN</span></StatusItem>
              <StatusItem>RESPONSE:<span>FAST</span></StatusItem>
            </StatusBar>
          </ContactCard>
        </Content>
      </ContentLayer>
    </Container>
  );
};

export default ContactScreen;
