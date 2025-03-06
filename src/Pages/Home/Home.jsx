import React from 'react';
// import Hero from '../../Components/Hero';
import { Element } from "react-scroll";
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Projects from '../../Components/Projects/Projects';
import Contact from './../../Components/Contact/Contact';
import Services from '../../Components/Services/Services';
import ScrollToTop from '../../Components/ScrollToTop';

const Home = () => {
    return (
      <div>
        <Element name="hero">
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
        <Element name="services">
          <Services></Services>
        </Element>
        <Element name="contact">
          <Contact></Contact>
        </Element>

        {/* scroll arrow sign */}
        <div className="">
          <ScrollToTop></ScrollToTop>
        </div>
      </div>
    );
};

export default Home;