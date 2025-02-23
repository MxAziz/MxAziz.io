import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import "../App.css"

const MainLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-[#2E3440] dark:bg-[#384143] text-white ">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
