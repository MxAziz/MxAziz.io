import React from 'react';
// import Hero from '../../Components/Hero';
import { Element } from "react-scroll";
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Skills from '../../Components/Skills';

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
      </div>
    );
};

export default Home;