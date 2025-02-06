import React from 'react';

const About = () => {
    return (
      <div className=" mt-8 md:mt-16 lg:mt-[130px] text-center">
        <h3 className=" text-3xl  mt-12 text-[#7E8083] font-bold">
          A B O U T <span className="ml-3">M E</span>
        </h3>
        {/* <p className=" w-11/12 lg:w-3/5 mx-auto text-lg text-gray-50 mt-8">
          I am <em className=" font-semibold">Muhammad Aziz</em>, a dedicated
          Frontend Developer who loves bringing ideas to life through clean code
          and elegant design. Whether it's building a sleek UI or optimizing
          performance, I strive to deliver the best web experiences. Always
          exploring new technologies to stay ahead in the evolving tech world.
        </p> */}
        <p className=" w-11/12 lg:w-2/3 mx-auto text-lg text-gray-50 mt-8">
          Hello, I’m <em className=" font-semibold">Muhammad Aziz</em>, a
          passionate Frontend Developer dedicated to crafting seamless and
          interactive web experiences. My journey into programming started with
          curiosity and has evolved into a deep passion for building dynamic,
          user-friendly applications. From designing intuitive UI components to
          optimizing performance, I enjoy every aspect of frontend development.{" "}
          <br /> <br /> I specialize in React, Tailwind CSS, and modern web
          technologies, constantly exploring new frameworks and best practices
          to stay ahead in the ever-evolving tech landscape. Writing clean,
          maintainable code and solving complex problems excite me the most.{" "}
          <br />
          <br /> Beyond coding, I have a keen interest in game development,
          open-source contributions, and tech blogging. When I’m not in front of
          a screen, you’ll probably find me exploring Linux, reading about new
          technologies, or enjoying some gaming sessions. <br />
          <br /> I believe in continuous learning, creativity, and delivering
          high-quality web solutions that enhance user experience. Let’s build
          something amazing together! 🚀
        </p>
      </div>
    );
};

export default About;