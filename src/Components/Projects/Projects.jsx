import React from "react";

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
        <h2 className="text-3xl md:text-4xl text-center  text-[#d4d6da] font-bold py-20">
          <span className="mr-3">M Y</span> P R O J E C T S
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Project 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-300">
              This is a short description of project one.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-300">
              This is a short description of project two.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-300">
              This is a short description of project three.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
