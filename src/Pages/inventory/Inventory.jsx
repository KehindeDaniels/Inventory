import React from "react";
import { Outlet } from "react-router-dom";
import Overview from "./Overview";

const Inventory = () => {
  return (
    <div className="flex-1 p-10 text-lg">
      {/* Inventory content */}
      <Outlet />
    </div>
  );
};

export default Inventory;
