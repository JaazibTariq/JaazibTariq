import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Resume from '../Jaazib_Tariq_Resume.pdf'

const Nav = styled.nav`
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(-100%)'};
  box-shadow: ${props => props.visible ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  color: #64ffda;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #64ffda;
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #64ffda;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Navbar = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (activeSection === 'home') {
        setIsVisible(true);
      } else {
        setIsVisible(event.clientY <= 50);
      }
    };

    const handleScroll = () => {
      if (activeSection === 'home') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav visible={isVisible}>
      <NavContainer>
        <Logo onClick={() => scrollToSection('home')}>JT</Logo>
        <NavLinks>
          <NavItem>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <ResumeButton href={Resume} target="_blank" rel="noopener noreferrer">
              Resume
            </ResumeButton>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;