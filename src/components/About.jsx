import React from 'react';
import styled from 'styled-components';
import profilePic from './pfp.jpg';  // Add this line

const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.li`
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ImageSection = styled.div`
  flex: 0 0 300px;
`;

const HeadshotImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutWrapper>
      <ContentSection>
        <Title>About Me</Title>
        <Content>
          Hi! I am Jaazib, a passionate Computer Engineering student at the University of Waterloo, 
          with a keen interest in software development and emerging technologies. Currently, I am a Front End Engineer at SellStatic.
          My academic journey has equipped me with a strong foundation in both hardware 
          and software aspects of computer systems. I'm always eager to learn new 
          technologies and apply my skills to solve real-world problems.
        </Content>
        <Content>
          Thank you so much for taking the time to check out my portifolio, feel free to reach out! And be sure to check out my resume.
        </Content>
        
      </ContentSection>
      <ImageSection>
        <HeadshotImage src={profilePic} alt="Jaazib Tariq" />
      </ImageSection>
    </AboutWrapper>
  );
};

export default About;