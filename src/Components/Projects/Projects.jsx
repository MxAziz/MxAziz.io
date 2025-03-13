import React from "react";
import ProjectCard from "./ProjectCard";
import carImg from "../../assets/images/carpickup.png"
import couponImg from "../../assets/images/couponcraze.png"
import gamerImg from "../../assets/images/gamer.png"
import "./WaveAnimation.css"


const projects = [
  {
    title: "CarPickUp",
    description:
      "Car Rental System – User-centric platform for seamless car bookings, user authentication, and efficient inventory management.",
    image: carImg,
    tags: ["MERN", "TailwindCSS", "React-Slick"],
    demo: "https://carpickup0.web.app/",
    github: "https://github.com/MxAziz/CarPickUp-client",
  },
  {
    title: "CouponCraze",
    description:
      "CouponCraze is a coupon-collecting application built using React. It provides a user-friendly interface for exploring, collecting, and managing coupons.",
    image: couponImg,
    tags: ["Firebase", "React Router", "TailwindCSS"],
    demo: "https://discount-pro-ec7f0.web.app/",
    github: "https://github.com/MxAziz/CouponCraze-with-Firebase",
  },
  {
    title: "NextGenReviews",
    description:
      "A modern and interactive game review platform where users can add, edit, and delete game reviews.",
    image: gamerImg,
    tags: ["MERN", "SweetAleart2", "TypeWriter"],
    demo: "https://chill-gamer-10.web.app/",
    github: "https://github.com/MxAziz/NextGenReviews-client",
  },
];

const Projects = () => {
  return (
    // <div className=" lg:w-11/12 mx-auto bg-[#424c61] dark:bg-[#4e585b] mt-12 rounded-t-[50px] md:rounded-t-[100px] lg:rounded-t-[120px] rounded-b-[50px] md:rounded-b-[100px] lg:rounded-b-[120px] pb-14 md:pb-24 lg:pb-28">
    <div className="    ">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-48 fill-[#424c61] dark:fill-[#4e585b]"
        preserveAspectRatio="none"
      >
        <path
          // fill="#424c61"
          fillOpacity="1"
          d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,48C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* Project Section */}
      <div className="bg-[#424c61] dark:bg-[#4e585b] flex flex-col items-center text-white pb-14 md:pb-20 ">
        <h2 className="text-3xl md:text-4xl text-center  text-[#c5c8ce] font-bold pb-14">
          <span className="mr-3">M Y</span> P R O J E C T S
        </h2>
        <div className="lg:px-6">
          {/* Project 1 */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* water wave animation youtube */}
      <section className="bg-[#424c61]  dark:bg-[#4e585b]">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </div>
  );
};

export default Projects;
