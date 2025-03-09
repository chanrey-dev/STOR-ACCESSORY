import React from "react";
import { FaBars } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="w-full h-[70px] bg-slate-100 flex items-center px-8 md:px-16">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border flex justify-center items-center bg-pink-300 text-white md:hidden cursor-pointer">
            <FaBars className="text-2xl" />
          </div>
          <h1 className="text-2xl font-bold md:text-3xl px-5">Dashboard</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center">
          <h1 className="text-xl font-medium text-white">SG</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
