import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Make sure to import Link
import logo from "/assets/logo.png";

import {
  faBox,
  faShoppingCart,
  faUsers,
  faCalendarAlt,
  faChevronDown,
  faChevronUp,
  faBell,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (link) => {
    if (openDropdown === link) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(link);
    }
  };

  const navLinks = [
    {
      navName: "Sample log",
      navIcon: faBox,
      link: "/sampleLog",
    },
    {
      navName: "Clients",
      navIcon: faUsers,
      link: "/client",
    },
    {
      navName: "Inventory",
      navIcon: faShoppingCart,
      link: "/inventory",
      nestedLink: [
        { name: "Overview", link: "/inventory/overview" },
        { name: "Items", link: "/inventory/items" },
        { name: "Consumables", link: "/inventory/consumables" },
        { name: "Files", link: "/inventory/files" },
      ],
    },
    {
      navName: "Calendar",
      navIcon: faCalendarAlt,
      link: "/calendar",
    },
    // Support section starts here
    {
      navName: "Notifications",
      navIcon: faBell,
      link: "/notification",
      section: "Support",
    },
    {
      navName: "Settings",
      navIcon: faCog,
      link: "/settings",
      section: "Support",
    },
  ];

  return (
    <>
      <div
        className={`bg-blue-800 text-white w-64 md:w-16 ${
          isSidebarOpen ? "md:w-64" : "md:w-16"
        } space-y-6 py-7 px-2 absolute inset-y-0 left-0 ${
          isSidebarOpen ? "transform-none" : "-translate-x-64 md:translate-x-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex gap-2 items-center px-2 mt-10 justify-center md:justify-start">
          <img src={logo} alt="EnvAccord Logo" className="w-10 h-10" />
          {isSidebarOpen && (
            <h1 className="text-3xl font-bold hidden md:block">EnvAccord</h1>
          )}
        </div>
        <ul className={`flex pl-2 flex-col items-center  justify-center gap-4`}>
          {navLinks.map((link, index) => (
            <React.Fragment key={link.navName}>
              {link.section === "Support" &&
                index === 4 && ( // Only render once before the first "Support" section item
                  <div className="mt-8 mb-2 w-full text-white text-xs uppercase font-bold pl-4">
                    {isSidebarOpen && "Support"}
                  </div>
                )}
              <li
                className={`py-2 px-2 w-full flex justify-start ${
                  isSidebarOpen ? "md:justify-start" : "md:justify-center"
                } items-center cursor-pointer hover:bg-blue-700 hover:rounded-md hover:bg-opacity-50`}
                onClick={() =>
                  link.nestedLink ? toggleDropdown(link.navName) : null
                }
              >
                <FontAwesomeIcon icon={link.navIcon} className="mr-2" />
                {isSidebarOpen && (
                  <Link
                    to={link.link}
                    className="text-white hover:text-opacity-80"
                  >
                    <span>{link.navName}</span>
                  </Link>
                )}
                {link.nestedLink && isSidebarOpen && (
                  <FontAwesomeIcon
                    icon={
                      openDropdown === link.navName
                        ? faChevronUp
                        : faChevronDown
                    }
                    className="ml-2"
                  />
                )}
              </li>
              {link.nestedLink && openDropdown === link.navName && (
                <ul className="pl-8 text-sm">
                  {link.nestedLink.map((sub) => (
                    <li key={sub.name} className="py-1">
                      <Link to={sub.link}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className={`absolute text-xl ${
          isSidebarOpen ? "text-white" : "text-blue-gray"
        } md:text-white top-4 left-6`}
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
