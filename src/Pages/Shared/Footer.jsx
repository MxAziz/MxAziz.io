import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      <div className="md:flex justify-between items-center border-t-2 mt-8 py-4 border-gray-800 px-8 space-y-4 md:space-y-0">
        <p> © {new Date().getFullYear()} - All rights reserved</p>
        <p>
          <em>made with 🩵 at 4:00 am</em>
        </p>
        {/* social links */}
        <div className="flex gap-2">
          <Link to="https://github.com/MxAziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaGithub className="text-base" />
            </div>
          </Link>
          <Link to="https://x.com/Mr_MxAziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaXTwitter className="text-base" />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/mxaziz/" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaLinkedinIn className="text-base" />
            </div>
          </Link>
          <Link to="https://www.facebook.com/mr.mxaziz" target="_blank">
            <div className="border flex items-center justify-center p-2 rounded-full w-8 cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              <FaFacebook className="text-base" />
            </div>
          </Link>
        </div>
      </div>
    );
};

export default Footer;