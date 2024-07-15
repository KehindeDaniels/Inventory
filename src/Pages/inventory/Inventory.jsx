import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
const Inventory = () => {
  return (
    <div className="flex-1 flex flex-col text-lg ">
      <Header />

      <Outlet />
    </div>
  );
};

export default Inventory;
