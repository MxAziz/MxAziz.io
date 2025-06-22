import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
      <div className=" pt-8 md:pt-16 pb-14 md:pb-24 lg:pb-28 mt-28 md:mt-36 text-center bg-[#424c61] dark:bg-[#4e585b] rounded-[50px] md:rounded-[100px] lg:rounded-[120px]">
        <h3 className=" text-3xl md:text-4xl  pt-12 text-[#c4c7cd] font-bold">
          A B O U T <span className="ml-3">M E</span>
        </h3>

        <div className="">
          <p className=" w-11/12 lg:w-2/3 mx-auto text-base md:text-lg text-gray-00 mt-10 select-none">
            Hello, I’m <em className=" font-semibold">Muhammad Aziz</em>,I am a
            first-year student at Pabna University of Science and Technology
            (PUST), pursuing a degree in
            <em className=" font-semibold">
              Information and Communication Engineering (ICE)
            </em>
            . a passionate Frontend Developer dedicated to crafting seamless and
            interactive web experiences. My journey into programming started
            with curiosity and has evolved into a deep passion for building
            dynamic, user-friendly applications. From designing intuitive UI
            components to optimizing performance, I enjoy every aspect of
            frontend development. <br />

            <br /> I specialize in React, Tailwind
            CSS, and modern web technologies, constantly exploring new
            frameworks and best practices to stay ahead in the ever-evolving
            tech landscape. Writing clean, maintainable code and solving complex
            problems excite me the most. <br />

            <br /> I believe in continuous learning, creativity, and delivering
            high-quality web solutions that enhance user experience. Let’s build
            something amazing together! 🚀
          </p>
          {/* education and experience sidebar */}
          <div className="">
            <div className="mt-16 flex flex-col md:flex-row gap-10 justify-center items-start md:items-center">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-[#2E3440] dark:bg-[#384143] p-6 rounded-2xl shadow-lg max-w-md w-full "
              >
                <h4 className="text-2xl font-bold text-[#dce3e3] mb-3">
                  🎓 Education
                </h4>
                <p className="text-gray-300 text-base">
                  Pabna University of Science and Technology (PUST) <br />
                  B.Sc. in Information and Communication Engineering (ICE)
                  <br />
                  <span className="text-sm text-gray-400">2024 - Present</span>
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="bg-[#2E3440] dark:bg-[#384143] p-6 rounded-2xl shadow-lg max-w-md w-full"
              >
                <h4 className="text-2xl font-bold text-[#dce3e3] mb-3">
                  💼 Experience
                </h4>
                <p className="text-gray-300 text-base">
                  Frontend Developer at __________________ <br />
                  Internship | February 2025 - Present
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;