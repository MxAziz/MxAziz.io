import React from "react";
import ProjectCard from "./ProjectCard";
import carImg from "../../assets/images/carpickup.png"
import couponImg from "../../assets/images/couponcraze.png"
import gamerImg from "../../assets/images/gamer.png"


const projects = [
  {
    title: "CarPickUp",
    description: "A personal portfolio website built with React & TailwindCSS.",
    image: carImg,
    tags: ["React", "TailwindCSS", "JavaScript"],
    demo: "https://carpickup0.web.app/",
    github: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "An online shopping website with product filtering & cart.",
    image: couponImg,
    tags: ["MERN", "Redux", "Stripe"],
    demo: "https://discount-pro-ec7f0.web.app/",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    title: "NextGenReviews",
    description:
      "A modern and interactive game review platform where users can add, edit, and delete game reviews.",
    image: gamerImg,
    tags: ["MERN", "Redux", "Stripe"],
    demo: "https://chill-gamer-10.web.app/",
    github: "https://github.com/MxAziz/NextGenReviews-client",
  },
];

const Projects = () => {
  return (
    <div className=" bg-[#424c61] mt-12 rounded-t-[120px]  pb-32">
      {/* SVG Background */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-[300px]"
      >
        <path
          fill="#2E3440"
          fillOpacity="1"
          d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,48C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}

      {/* Project Section */}
      <div className=" flex flex-col items-center text-white ">
        <h2 className="text-3xl md:text-4xl text-center  text-[#c5c8ce] font-bold py-20">
          <span className="mr-3">M Y</span> P R O J E C T S
        </h2>
        <div className=" gap-8 px-6">
          {/* Project 1 */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Project 2 */}
          {/* <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-300">
              This is a short description of project two.
            </p>
          </div> */}

          {/* Project 3 */}
          {/* <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-300">
              This is a short description of project three.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
