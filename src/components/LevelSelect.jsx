import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBriefcase, FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { personalInfo } from '../data/siteData';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
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

/* Animated VHS/Static Background */
const StaticBackground = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, 
      rgba(20,20,30,1) 0%, 
      rgba(30,30,45,1) 50%, 
      rgba(20,20,30,1) 100%
    );
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.15;
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
      rgba(0,0,0,0.3) 2px,
      rgba(0,0,0,0.3) 4px
    );
    pointer-events: none;
  }
`;

/* Horizontal scan bands that move */
const ScanBands = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255,255,255,0.02) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
  }
`;

/* Horizontal distortion lines */
const GlitchLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 3px,
    rgba(100,150,200,0.03) 3px,
    rgba(100,150,200,0.03) 4px
  );
`;

/* Content layer - uses viewport units for consistent sizing */
const ContentLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 5vh 8vw;
  
  /* Smaller laptops/desktops */
  @media (max-width: 1366px) {
    padding: 3vh 5vw;
  }
  
  @media (max-width: 1024px) {
    padding: 2vh 3vw;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

/* The floating menu panel */
const MenuPanel = styled.div`
  background: rgba(235, 230, 220, 0.97);
  border-radius: 12px;
  padding: 2.5vh 3vw;
  box-shadow: 
    0 4px 20px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  /* Smaller laptops */
  @media (max-width: 1366px) {
    padding: 2vh 2.5vw;
  }
  
  @media (max-width: 1024px) {
    padding: 1.5vh 2vw;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 400px;
    height: auto;
    max-height: 100%;
    background: rgb(235, 230, 220);
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: clamp(10px, 2vh, 25px);
  border-bottom: 2px solid rgba(0,0,0,0.1);
  flex-shrink: 0;
`;

const PanelTitle = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.7rem, 1.8vw, 1.4rem);
  color: #222;
  margin: 0;
  letter-spacing: 3px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 25px);
`;

const SocialIcon = styled.a`
  color: #555;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #0166FF;
    transform: translateY(-2px);
  }
`;

/* Menu grid - always 2x2, fills available space */
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: clamp(5px, 1vh, 15px);
  flex: 1;
  min-height: 0;
  padding: clamp(8px, 1.5vh, 20px) 0;
  
  @media (max-width: 500px) {
    gap: 5px;
    padding: 8px 0;
  }
`;

const MenuItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 2vh, 20px);
  padding: clamp(10px, 2vh, 30px);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 10px;
  min-height: 0;
  
  &:hover {
    background: rgba(0, 0, 0, 0.06);
    
    .icon-wrapper {
      animation: ${float} 0.8s ease-in-out infinite;
    }
  }
  
  &:focus {
    outline: 2px dashed #333;
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div.attrs({ className: 'icon-wrapper' })`
  font-size: clamp(1.8rem, 8vh, 5rem);
  color: ${props => props.color || '#333'};
  filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.15));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuLabel = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 1.2vw, 0.8rem);
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.3;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: clamp(8px, 1.5vh, 20px);
  border-top: 1px solid rgba(0,0,0,0.08);
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.3rem, 0.6vw, 0.45rem);
  color: #666;
  letter-spacing: 1px;
  flex-shrink: 0;
`;

const menuItems = [
  { id: 'experience', label: 'Experience', icon: FaBriefcase, color: '#FF6B35' },
  { id: 'about', label: 'About Me', icon: FaUser, color: '#E63946' },
  { id: 'projects', label: 'Projects', icon: FaCode, color: '#2A9D8F' },
  { id: 'contact', label: 'Contact', icon: FaEnvelope, color: '#444' },
];

const LevelSelect = ({ onSelect }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Container>
      {/* Animated background layers */}
      <StaticBackground />
      <ScanBands />
      <GlitchLines />
      
      {/* Content */}
      <ContentLayer>
        <MenuPanel>
          <PanelHeader>
            <PanelTitle>{personalInfo.name.toUpperCase()}</PanelTitle>
            <SocialIcons>
              <SocialIcon 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://x.com/JaazibTar"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
              >
                <FaXTwitter />
              </SocialIcon>
            </SocialIcons>
          </PanelHeader>
          
          <MenuGrid>
            {menuItems.map((item) => (
              <MenuItem key={item.id} onClick={() => onSelect(item.id)}>
                <IconWrapper color={item.color}>
                  <item.icon />
                </IconWrapper>
                <MenuLabel>{item.label}</MenuLabel>
              </MenuItem>
            ))}
          </MenuGrid>
          
          <Footer>
            © {currentYear} {personalInfo.firstName.toUpperCase()}
          </Footer>
        </MenuPanel>
      </ContentLayer>
    </Container>
  );
};

export default LevelSelect;
