import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import azizImg from "../assets/images/aziz-ai.jpg"
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
      <div className=" mt-28 lg:flex justify-between w-11/12 md:w-4/5 mx-auto">
        {/* content */}
        <div className="lg:w-2/3 mt-4">
          <p className=" text-base lg:text-2xl">Hi, I am</p>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-gray-100 font-medium mb-2">
            Muhammad Aziz
          </h2>
          <span className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-[#7E8083]">
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
          {/* social links */}
          <div className="flex gap-2 mt-12">
            <a  className='hidden lg:block' >
              <div className="border flex items-center justify-center px-4 py-2 rounded-xl mr-2  cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
                Resume
              </div>
            </a>
            <Link to="https://github.com/MxAziz" target="_blank">
              <div className="border flex items-center justify-center p-2 rounded-full w-11 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaGithub className="text-2xl" />
              </div>
            </Link>
            <Link to="https://x.com/Mr_MxAziz" target="_blank">
              <div className="border flex items-center justify-center p-2 rounded-full w-11 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaXTwitter className="text-2xl" />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/mxaziz/" target="_blank">
              <div className="border flex items-center justify-center p-2 rounded-full w-11 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaLinkedinIn className="text-2xl" />
              </div>
            </Link>
            <Link to="https://www.facebook.com/mr.mxaziz" target="_blank">
              <div className="border flex items-center justify-center p-2 rounded-full w-11 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
                <FaFacebook className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="">
          <img
            className="h-[300px] md:h-[400px] rounded-lg mt-8 lg:mt-0"
            src={azizImg}
            alt="Aziz image"
          />
        </div>
      </div>
    );
};

export default Hero;