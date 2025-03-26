import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { ScrollRevealContainer, fadeInUp, staggerContainer, scaleIn } from '../animations/ScrollReveal';

const AboutContainer = styled.div`
  background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(45deg, rgba(1, 191, 113, 0.05) 0%, rgba(1, 191, 113, 0) 100%);
    transform: skewY(-5deg);
    transform-origin: top left;
  }
`;

const AboutWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;

const AboutHeader = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #010606;
`;

const AboutSubHeader = styled(motion.p)`
  text-align: center;
  color: #01bf71;
  font-size: 1.2rem;
  margin-bottom: 60px;
  font-weight: 500;
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(1, 191, 113, 0.1) 0%, rgba(1, 191, 113, 0) 100%);
    transform: translateY(100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateY(0);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  svg {
    filter: drop-shadow(0 4px 6px rgba(1, 191, 113, 0.2));
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #010606;
  position: relative;
  z-index: 1;
`;

const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React, JavaScript, and modern CSS frameworks.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and RESTful APIs.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing databases using MongoDB, implementing efficient data structures.'
    },
    {
      icon: <FaTools />,
      title: 'Development Tools',
      description: 'Proficient in Git, npm, and various development tools for efficient project management.'
    }
  ];

  return (
    <AboutContainer id="about">
      <AboutWrapper
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutHeader variants={fadeInUp}>
          About Me
        </AboutHeader>
        <AboutSubHeader variants={fadeInUp}>
          Passionate Full Stack Developer & Student
        </AboutSubHeader>
        <ScrollRevealContainer
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SkillsContainer variants={staggerContainer}>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsContainer>
        </ScrollRevealContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About; 