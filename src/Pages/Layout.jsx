import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
