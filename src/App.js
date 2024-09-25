import React from 'react';
import './App.css';
import CursorBackground from './CursorBackground';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const MainContainer = styled.div`
  color: white;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  scroll-snap-align: start;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 20px 0;
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkIcon = styled.a`
  font-size: 2rem;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <CursorBackground />
      <MainContainer>
        <Section id="home">
          <Header>Jaazib Tariq</Header>
          <SubHeader>Computer Engineering Student at University of Waterloo</SubHeader>
          <LinksWrapper>
            <LinkIcon href="https://github.com/JaazibTariq" target="_blank">
              <FaGithub />
            </LinkIcon>
            <LinkIcon href="https://linkedin.com/in/JaazibTariq" target="_blank">
              <FaLinkedin />
            </LinkIcon>
          </LinksWrapper>
        </Section>
        
        <Section id="about">
          <About />
        </Section>
        
        <Section id="experience">
          <Experience />
        </Section>
        
        <Section id="projects">
          <Projects />
        </Section>
        
        
      </MainContainer>
    </>
  );
}

export default App;