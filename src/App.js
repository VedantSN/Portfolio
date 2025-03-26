import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  body {
    overflow-x: hidden;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  html {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  section {
    padding: 80px 0;
    
    @media screen and (max-width: 768px) {
      padding: 60px 0;
    }

    @media screen and (max-width: 480px) {
      padding: 40px 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
      padding: 0 30px;
    }

    @media screen and (max-width: 480px) {
      padding: 0 20px;
    }
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
