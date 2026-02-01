import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { personalInfo } from '../data/siteData';

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  min-height: 0;
`;

const Logo = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(1.2rem, 4vw, 2.5rem);
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 
    2px 2px 0 #333,
    4px 4px 0 #222;
  letter-spacing: 4px;
  line-height: 1.5;
  
  @media (max-height: 500px) {
    font-size: clamp(1rem, 3vw, 1.8rem);
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.div`
  font-family: 'Times New Roman', serif;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  color: #888;
  margin-bottom: 40px;
  letter-spacing: 2px;
  text-align: center;
  
  @media (max-height: 500px) {
    margin-bottom: 20px;
    font-size: 0.75rem;
  }
`;

const PressStart = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.5rem, 1.5vw, 0.85rem);
  color: #c0c0c0;
  animation: ${blink} 1.2s step-end infinite;
  cursor: pointer;
  padding: 15px 30px;
  transition: all 0.2s;
  
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
  }
  
  @media (max-height: 500px) {
    padding: 10px 20px;
    font-size: 0.5rem;
  }
`;

const FooterRow = styled.div`
  flex-shrink: 0;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.4rem, 0.8vw, 0.55rem);
  color: #555;
  letter-spacing: 2px;
  
  @media (max-height: 500px) {
    padding: 10px 0;
    font-size: 0.4rem;
    gap: 10px;
  }
  
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Separator = styled.span`
  color: #444;
  
  @media (max-width: 400px) {
    display: none;
  }
`;

const Credit = styled.span`
  color: #444;
  font-size: clamp(0.35rem, 0.7vw, 0.5rem);
  
  @media (max-height: 500px) {
    font-size: 0.35rem;
  }
`;

const StartScreen = ({ onStart }) => {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (ready && (e.key === 'Enter' || e.key === ' ')) {
        onStart();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [ready, onStart]);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <Container>
      <LogoSection>
        <Logo>{personalInfo.name.toUpperCase()}</Logo>
        <Subtitle>{personalInfo.title}</Subtitle>
        
        {ready && (
          <PressStart onClick={onStart}>
            PRESS START
          </PressStart>
        )}
      </LogoSection>
      
      <FooterRow>
        <span>© {currentYear} {personalInfo.firstName.toUpperCase()}</span>
        <Separator>•</Separator>
        <Credit>Inspired by AWGE</Credit>
      </FooterRow>
    </Container>
  );
};

export default StartScreen;
