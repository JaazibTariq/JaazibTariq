import React, { useState, useEffect } from 'react';
import './App.css';
import CursorBackground from './CursorBackground';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactInfo from './components/ContactInfo';

const MainContainer = styled.div`
  color: white;
  min-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  scroll-snap-align: start;
  box-sizing: border-box;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const HomeSection = styled(Section)`
  justify-content: center;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 20px;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #3498db;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`;

const LinkIcon = styled.a`
  font-size: 2.5rem;
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #3498db;
    transform: translateY(-5px);
  }
`;

const CombinedSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  box-sizing: border-box;
  position: relative;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <CursorBackground />
      <MainContainer>
        <HomeSection id="home">
          <ContentWrapper>
            <Header>Jaazib Tariq</Header>
            <SubHeader>Software Developer & Computer Engineering Student at The University of Waterloo</SubHeader>
            <LinksWrapper>
              <LinkIcon href="https://github.com/JaazibTariq" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </LinkIcon>
              <LinkIcon href="https://linkedin.com/in/JaazibTariq" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkIcon>
            </LinksWrapper>
          </ContentWrapper>
        </HomeSection>
        
        <Section id="about">
          <ContentWrapper>
            <About />
          </ContentWrapper>
        </Section>
        
        <Section id="experience">
          <ContentWrapper>
            <Experience />
          </ContentWrapper>
        </Section>
        
        <CombinedSection>
          <ContentWrapper>
            <ProjectsWrapper id="projects">
              <Projects />
            </ProjectsWrapper>
            <ContactInfo />
          </ContentWrapper>
        </CombinedSection>
      </MainContainer>
    </>
  );
}

export default App;