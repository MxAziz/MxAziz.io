import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import azizImg from "../assets/images/aziz-ai.jpg"


const Hero = () => {
    return (
      <div className=" mt-28 lg:flex justify-between w-4/5 mx-auto">
        {/* content */}
        <div className="">
          <p className=" text-2xl">Hi, I am</p>
          <h2 className=" text-5xl font-medium mb-2">Muhammad Aziz</h2>
          <span className="text-5xl text-[#7E8083]">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer", "Full Stack Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        {/* image */}
        <div className="">
          <img className=" h-[400px] rounded-lg" src={azizImg} alt="" />
        </div>
      </div>
    );
};

export default Hero;