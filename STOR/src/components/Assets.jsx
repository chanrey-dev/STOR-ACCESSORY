import React from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { BiObjectsVerticalBottom, BiGridAlt } from "react-icons/bi";

const Assets = () => {
  return (
    <div className="w-1/5 h-screen bg-slate-50 px-4 pt-5">
      <ul className="p-3">
        <li>
          <a href="/" className="text-blue-500 font-medium flex items-center">
            <div className="pr-2 text-2xl">
              <BiObjectsVerticalBottom />
            </div>
            Dashboard
          </a>
        </li>
      </ul>
      <ul className="p-3">
        <li>
          <a
            href="categories"
            className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
          >
            <div className="pr-2 text-2xl">
              <BiGridAlt />
            </div>
            Categories
          </a>
        </li>
      </ul>
      <ul className="p-3">
        <li>
          <a
            href=""
            className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
          >
            <div className="pr-2 text-2xl">
              <BiBarChartAlt />
            </div>
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Assets;
