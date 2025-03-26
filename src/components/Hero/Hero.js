import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1400px;
  width: 100%;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 40px;
  }
`;

const HeroTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;

  @media screen and (max-width: 968px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HeroImage = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 25px;
  object-fit: cover;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border: 4px solid #01bf71;

  @media screen and (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 968px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;

const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: clamp(2.5rem, 8vw, 4rem);
  text-align: left;
  margin-bottom: 24px;

  @media screen and (max-width: 968px) {
    text-align: center;
    margin-bottom: 16px;
  }
`;

const HeroP = styled(motion.p)`
  color: #fff;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: left;
  max-width: 600px;
  margin-bottom: 32px;

  @media screen and (max-width: 968px) {
    text-align: center;
    margin-bottom: 24px;
  }
`;

const SubText = styled(motion.p)`
  color: #01bf71;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: left;
  margin-bottom: 16px;
  font-weight: 500;

  @media screen and (max-width: 968px) {
    text-align: center;
  }
`;

const EducationText = styled(motion.p)`
  color: #01bf71;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  text-align: left;
  margin-bottom: 32px;
  font-weight: 500;
  opacity: 0.9;

  span {
    color: #fff;
    font-weight: 600;
  }

  @media screen and (max-width: 968px) {
    text-align: center;
  }
`;

const HeroButton = styled(motion.button)`
  padding: clamp(12px, 3vw, 16px) clamp(24px, 5vw, 48px);
  border: none;
  border-radius: 50px;
  background: #01bf71;
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #010606;
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    max-width: 250px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
  ),
  linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  z-index: 2;
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroOverlay />
      <HeroContent>
        <HeroTextContent>
          <HeroH1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Tejaswi Kumar
          </HeroH1>
          <SubText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Web Developer | B.Tech Student at KIIT
          </SubText>
          <EducationText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Current CGPA: <span>8.70</span> (up to 5th Semester)
          </EducationText>
          <HeroP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm passionate about creating innovative web solutions and turning ideas into reality through code
          </HeroP>
          <HeroButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            View My Work
          </HeroButton>
        </HeroTextContent>
        <HeroImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroImage 
            src="/images/profile.jpg" 
            alt="Tejaswi Kumar"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </HeroImageWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 