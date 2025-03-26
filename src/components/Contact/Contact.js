import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { ScrollRevealContainer, fadeInUp, staggerContainer, slideIn } from '../animations/ScrollReveal';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(-45deg, rgba(1, 191, 113, 0.05) 0%, rgba(1, 191, 113, 0) 100%);
    transform: skewY(-5deg);
    transform-origin: bottom right;
  }
`;

const ContactWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;

const ContactHeader = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #010606;
`;

const ContactSubHeader = styled(motion.p)`
  text-align: center;
  color: #01bf71;
  font-size: 1.2rem;
  margin-bottom: 60px;
  font-weight: 500;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormInput = styled(motion.input)`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #eee;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 2px rgba(1, 191, 113, 0.1);
    transform: translateY(-2px);
  }
`;

const FormTextArea = styled(motion.textarea)`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #eee;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 2px rgba(1, 191, 113, 0.1);
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background: #01bf71;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(1, 191, 113, 0.2);

  &:hover {
    background: #00a864;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(1, 191, 113, 0.3);
  }
`;

const StatusMessage = styled(motion.p)`
  margin-top: 20px;
  text-align: center;
  font-size: 1rem;
  color: ${({ isError }) => (isError ? '#ff6b6b' : '#01bf71')};
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const EmailLink = styled.a`
  color: #01bf71;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
`;

const ContactEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #01bf71;
  font-size: 1.1rem;
  margin-top: 20px;

  svg {
    font-size: 1.4rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #01bf71;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 10px;
  background: rgba(1, 191, 113, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #fff;
    background: #01bf71;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(1, 191, 113, 0.2);
  }
`;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', isError: false });

    try {
      await emailjs.sendForm(
        'service_jxu2936',
        'template_fyfrus8',
        form.current,
        '4X1_gh2KIslVuzp7y'
      );
      
      setStatus({
        message: 'Message sent successfully! I will get back to you soon.',
        isError: false
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        message: 'Oops! Something went wrong. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </ContactHeader>
        <ContactSubHeader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss your project or just say hello!
        </ContactSubHeader>
        
        <ContactInfo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <EmailLink 
            href="mailto:tejaswikumar804@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </EmailLink>
        </ContactInfo>

        <ContactContent>
          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormInput
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <FormInput
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <FormInput
              type="text"
              name="subject"
              placeholder="Subject"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <FormTextArea
              name="message"
              placeholder="Your Message"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {status.message && (
              <StatusMessage
                isError={status.isError}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {status.message}
              </StatusMessage>
            )}
          </ContactForm>
          <ContactInfo
            variants={slideIn("right")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ContactText>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop
              me a message!
            </ContactText>
            <ContactEmail>
              <FaEnvelope />
              tejaswikumar804@gmail.com
            </ContactEmail>
            <SocialLinks>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/Tejas08wi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact; 