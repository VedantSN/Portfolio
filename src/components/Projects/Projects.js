import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ScrollRevealContainer, fadeInUp, staggerContainer, slideIn } from '../animations/ScrollReveal';

const ProjectsContainer = styled.div`
  padding: 100px 0;
  background: linear-gradient(180deg, #010606 0%, #001219 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(45deg, rgba(1, 191, 113, 0.05) 0%, rgba(1, 191, 113, 0) 100%);
    transform: skewY(5deg);
    transform-origin: top right;
  }
`;

const ProjectsWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;

const ProjectsHeader = styled(motion.h2)`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectSubHeader = styled(motion.p)`
  color: #01bf71;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 500;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  perspective: 1000px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(1, 191, 113, 0.1) 0%,
      rgba(1, 6, 6, 0.6) 100%
    );
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: rgba(1, 191, 113, 0.1);
  color: #01bf71;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(1, 191, 113, 0.2);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #01bf71;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Skill Development Platform',
      description: 'A comprehensive platform for youth skill development featuring secure authentication, real-time chat, video calling, and an advanced admin portal for managing courses, quizzes, and job postings.',
      image: 'https://cdn.leonardo.ai/users/831c0cd3-3249-4379-81d7-0fc87c10a8a8/generations/65f28868-5862-4afb-8664-4578321acbd6/Leonardo_Phoenix_10_A_futuristic_digital_illustration_of_a_bra_1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'WebRTC'],
      github: 'https://github.com/Tejas08wi/NextStep.git',
      live: '#'
    },
    {
      title: 'Mental Health Platform',
      description: 'A MERN stack mental health platform with AI-powered emotional assessment using Gemini API, featuring user authentication, community interaction, and a resource hub for mental health content.',
      image: 'https://imgs.search.brave.com/KwQwjPOn-5KCZYWoQEcTqbZfhb4WgfgGJGjs0hUi27g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFsa3RvYW5nZWwu/Y29tL2ltYWdlcy9x/dW90ZXMvJUUyJTgw/JTlDQW54aWV0eS1p/cy1hLXRoaW4tc3Ry/ZWFtLW9mLWZlYXIu/cG5n',
      tech: ['React', 'MongoDB', 'Express.js', 'Node.js', 'Gemini API', 'JWT'],
      github: 'https://github.com/Tejas08wi/Mental-Health.git',
      live: '#'
    },
    {
      title: 'Interactive Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components, featuring smooth animations, responsive design, and interactive elements.',
      image: 'https://cdn.leonardo.ai/users/831c0cd3-3249-4379-81d7-0fc87c10a8a8/generations/9fd1d1b3-a818-466a-8e3f-88c94ae6c2b4/Leonardo_Phoenix_10_A_sleek_modern_and_interactive_digital_por_0.jpg',
      tech: ['React', 'Styled Components', 'Framer Motion','emailjs'],
      github: '#',
      live: window.location.origin
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectsHeader variants={fadeInUp}>
          My Projects
        </ProjectsHeader>
        <ProjectSubHeader variants={fadeInUp}>
          Recent Work & Contributions
        </ProjectSubHeader>
        <ProjectGrid variants={staggerContainer}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={slideIn(index % 2 === 0 ? "left" : "right")}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 