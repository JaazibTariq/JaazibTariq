import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactContainer = styled.div`
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const Icon = styled.span`
  color: #64ffda;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ContactText = styled.a`
  color: #8892b0;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const ContactInfo = () => {
  return (
    <ContactContainer>
      <Title>Contact Information</Title>
      <ContactItem>
        <Icon>
          <FaEnvelope />
        </Icon>
        <ContactText href="mailto:your.email@example.com">
          jtariq@uwaterloo.ca
        </ContactText>
      </ContactItem>
      
    </ContactContainer>
  );
};

export default ContactInfo;