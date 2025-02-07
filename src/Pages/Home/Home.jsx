import React from 'react';
// import Hero from '../../Components/Hero';
import { Element } from "react-scroll";
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Projects from '../../Components/Projects/Projects';
import Contact from './../../Components/Contact/Contact';

const Home = () => {
    return (
      <div>
        <Element name="hero"  >
          <Hero></Hero>
        </Element>
        <Element name="about">
          <About></About>
        </Element>
        <Element name="skills">
          <Skills></Skills>
        </Element>
        <Element name="projects">
          <Projects></Projects>
        </Element>
        <Element name="contact">
          <Contact></Contact>
        </Element>
      </div>
    );
};

export default Home;