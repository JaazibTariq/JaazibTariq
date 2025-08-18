import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactInfo from './components/ContactInfo';
import Typewriter from './typewriter';
import profilePic from './components/pfp.jpg';
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
const Section2 = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
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
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

const HomeSection = styled(Section)`
  min-height: auto;
  justify-content: flex-start;
  text-align: left;
  padding-top: 40px;
  padding-bottom: 0;
`;

const Header = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(2.2rem, 6vw, 3.1rem);
  font-weight: 400;
  margin: 0 0 20px;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #c084fc;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 70px;
`;

const LinkIcon = styled.a`
  font-size: 2.5rem;
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #c084fc;
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

// Intro layout (merged Home + About)
const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;
const InlineIcon = styled(LinkIcon)`
  font-size: 2.5rem;
  line-height: 1;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  min-width: 0;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Blurb = styled.p`
  max-width: 640px;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #dbe3ee;
`;

const IntroRight = styled.div`
  display: flex;
  justify-content: center;
`;

const CombinedText = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #dbe3ee;
`;

const ExperienceSection = styled(Section)`
  min-height: auto;
  padding-top: 10px;
  padding-bottom: 40px;
`;

// Removed SocialRow; social icons are now inline next to the title

function App() {

  return (
    <>
      <MainContainer>
        <HomeSection id="home">
          <ContentWrapper>
            <div id="about">
              <IntroGrid>
                <IntroLeft>
                  <TitleRow>
                    <Header>
                      <Typewriter text="Hi, I'm Jaazib" />
                    </Header>
                    <InlineIcon href="https://github.com/JaazibTariq" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </InlineIcon>
                    <InlineIcon href="https://linkedin.com/in/Jaazib" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </InlineIcon>
                  </TitleRow>
                </IntroLeft>
              </IntroGrid>
              <CombinedText>
                I'm a Computer Engineering student at the University of Waterloo who loves building, learning, and creating. Feel free to reach out if you want to work together, or just chat!
              </CombinedText>
            </div>
          </ContentWrapper>
        </HomeSection>
        
        <ExperienceSection id="experience">
          <ContentWrapper>
            <Experience />
          </ContentWrapper>
        </ExperienceSection>

        
        
        <CombinedSection>
          <ContentWrapper>
            <ProjectsWrapper id="projects">
              <Projects />
            </ProjectsWrapper>
           
          </ContentWrapper>
        </CombinedSection>
      </MainContainer>
    </>
  );
}

export default App;