import React from 'react';
// import Hero from '../../Components/Hero';
import { Element } from "react-scroll";
import Hero from '../../Components/Hero';

const Home = () => {
    return (
      <div>
        <Element name="hero" className=" min-h-screen">
          <Hero></Hero>
        </Element>
        <Element name="about">
          <section className=" min-h-screen">
            <div className="">Muhammad Aziz</div>
          </section>
        </Element>
        <Element name="skills">
          <section className=" min-h-screen">
            <div className="">Muhammad Aziz</div>
          </section>
        </Element>
      </div>
    );
};

export default Home;