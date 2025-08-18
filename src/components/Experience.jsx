import React from 'react';
import styled from 'styled-components';
import sellstaticLogo from './sellstaticLogo.jpg'
import superLogo from './superlogo.png'
const ExperienceWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: 'Bangers', cursive;
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 18px;
  color: #e9d5ff;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Row = styled.a`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 12px;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.25s ease, transform 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(192, 132, 252, 0.15);
    transform: translateY(-2px);
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background: #ffffff;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Company = styled.div`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
`;

const JobTitle = styled.div`
  color: #c4b5fd;
  font-size: 1rem;
`;

const DateRange = styled.div`
  color: #c4b5fd;
  font-size: 0.95rem;
  white-space: nowrap;
`;

const Experience = () => {
  const experiences = [
    {
      company: 'Super.com',
      job: 'Software Engineering Intern',
      dateRange: 'Mar 2025 – Present',
      link: 'https://www.super.com',
      logo: superLogo
    },
    {
      company: 'SellStatic',
      job: 'Senior Software Engineer',
      dateRange: 'Jun 2024 – Present',
      link: 'https://www.sellstatic.com',
      logo: sellstaticLogo
    },
    {
      company: 'MAX – Muslims Achieving Excellence',
      job: 'Frontend Engineering Intern',
      dateRange: 'Aug 2024 – Dec 2024',
      link: 'https://onemax.org',
      logo: 'https://logo.clearbit.com/onemax.org'
    }
  ];

  return (
    <ExperienceWrapper>
      <Title>Experience</Title>
      <List>
        {experiences.map((exp, index) => (
          <Row key={index} href={exp.link} target="_blank" rel="noopener noreferrer">
            <Logo src={exp.logo} alt={`${exp.company} logo`} />
            <Main>
              <Company>{exp.company}</Company>
              <JobTitle>{exp.job}</JobTitle>
            </Main>
            <DateRange>{exp.dateRange}</DateRange>
          </Row>
        ))}
      </List>
    </ExperienceWrapper>
  );
};

export default Experience;