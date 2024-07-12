import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/assets/logo.png";

import {
  faBox,
  faShoppingCart,
  faUsers,
  faCalendarAlt,
  faChevronDown,
  faBell,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navLinks = [
    {
      navName: "Sample log",
      navIcon: faBox,
      link: "sampleLog",
    },
    {
      navName: "Clients",
      navIcon: faUsers,
      link: "client",
    },
    {
      navName: "Inventory",
      navIcon: faShoppingCart,
      link: "/",
      nestedLink: [
        { name: "overview", link: "" },
        { name: "items", link: "items" },
        { name: "consumables", link: "consumables" },
        { name: "files", link: "files" },
      ],
    },
    {
      navName: "Calendar",
      navIcon: faCalendarAlt,
      link: "calender",
    },
    {
      navName: "Notifications",
      navIcon: faBell,
      link: "notification",
    },
    {
      navName: "Settings",
      navIcon: faCog,
      link: "settings",
    },
  ];

  const navElem = navLinks.map((nav, index) => (
    <div key={index} className="p-4">
      <a href={`/${nav.link}`} className="flex items-center">
        <FontAwesomeIcon icon={nav.navIcon} className="text-xl" />
        {isSidebarOpen && <span className="ml-4">{nav.navName}</span>}
      </a>
      {nav.nestedLink && isSidebarOpen && (
        <div className="ml-8">
          {nav.nestedLink.map((nested, nestedIndex) => (
            <a
              key={nestedIndex}
              href={`/${nav.link}/${nested.link}`}
              className="block mt-2"
            >
              {nested.name}
            </a>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <>
      <div
        className={`bg-blue-800 text-white w-64 md:w-16 ${
          isSidebarOpen ? "md:w-64" : "md:w-16"
        } space-y-6 py-7 px-2 absolute inset-y-0 left-0 ${
          isSidebarOpen ? "transform-none" : "-translate-x-64 md:translate-x-0"
        } transition-width duration-300 ease-in-out`}
      >
        <div className="flex gap-2 items-center px-2 mt-10 justify-center md:justify-start">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          {isSidebarOpen && (
            <h1 className="text-3xl font-bold hidden md:block">EnvAccord</h1>
          )}
        </div>
        <ul>{navElem}</ul>
      </div>
      <button
        onClick={toggleSidebar}
        className={`absolute text-xl ${
          isSidebarOpen ? "text-white" : "text-gray-700"
        }  md:text-white  top-4 left-4`}
      >
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </>
  );
};

export default Sidebar;
