import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
const Inventory = () => {
  return (
    <div className="flex-1text-lg">
      <Header />
      <Outlet />
    </div>
  );
};

export default Inventory;
