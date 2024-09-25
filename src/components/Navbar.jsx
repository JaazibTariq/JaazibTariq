import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(-100%)'};
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
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

const Navbar = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;