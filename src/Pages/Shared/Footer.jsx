import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" border w-11/12 mx-auto mt-20 border-gray-500"></div>
      <div className="md:flex justify-between items-center  py-14 w-11/12 mx-auto space-y-4 md:space-y-0">
        <p className="text-gray-300">
          {" "}
          ©<strong className="text-[#4c91a1] mr-1">MxAziz</strong>
          {new Date().getFullYear()} | All Rights Reserved
        </p>
        <p>
          <em>Made with 🩵❤️ at 4:00 am</em>
        </p>
        {/* social links */}
        <div className="flex gap-2 mr-6">
          <Link to="https://github.com/MxAziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#ffffff] hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaGithub className="text-base" />
            </div>
          </Link>
          <Link to="https://x.com/Mr_MxAziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#ffffff] hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaXTwitter className="text-base" />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/mxaziz/" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#ffffff] hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaLinkedinIn className="text-base" />
            </div>
          </Link>
          <Link to="https://www.facebook.com/mr.mxaziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#ffffff] hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaFacebookF className="text-base" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;