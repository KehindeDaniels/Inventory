import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed on mobile

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 flex flex-col ${
          isSidebarOpen ? "md:ml-64" : "md:ml-12"
        } transition-margin duration-300 ease-in-out`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
