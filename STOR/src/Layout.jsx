import React from "react";
import TopBar from "./components/TopBar";
import Assets from "./components/Assets";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex">
        <Assets />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
