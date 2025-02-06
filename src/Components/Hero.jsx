import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import azizImg from "../assets/images/aziz-ai.jpg"


const Hero = () => {
    return (
      <div className=" mt-28 lg:flex justify-between w-4/5 mx-auto">
        {/* content */}
        <div className="lg:w-2/3">
          <p className=" text-base lg:text-2xl">Hi, I am</p>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-gray-100 font-medium mb-2">
            Muhammad Aziz
          </h2>
          <span className=" text-2xl md:text-4xl lg:text-5xl font-semibold text-[#7E8083]">
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Developer",
                "Full Stack Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className=" mt-6 text-lg text-gray-300 ">
            Bringing ideas to life with clean code, intuitive design, and
            seamless user experiences. Let's build something amazing together!
          </p>
        </div>
        {/* image */}
        <div className="">
          <img
            className=" md:h-[400px] rounded-lg mt-8 lg:mt-0"
            src={azizImg}
            alt=""
          />
        </div>
      </div>
    );
};

export default Hero;