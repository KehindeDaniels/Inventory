import React, { useState } from "react";
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

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div
      className={`flex flex-col h-full bg-blue-700 text-white transition-width duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } ${isMobile ? "fixed w-full" : "relative"}`}
    >
      <div className="flex items-center p-4">
        <img src={logo} alt="EnvAccord Logo" className="w-8 h-8" />
        {!isCollapsed && (
          <span className="ml-4 text-lg font-bold">EnvAccord</span>
        )}
        <button className="ml-auto text-xl" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
        </button>
      </div>
      <nav className="flex-1">
        {navLinks.map((nav, index) => (
          <div key={index} className="p-4">
            <a href={`/${nav.link}`} className="flex items-center">
              <FontAwesomeIcon icon={nav.navIcon} className="text-xl" />
              {!isCollapsed && <span className="ml-4">{nav.navName}</span>}
            </a>
            {nav.nestedLink && !isCollapsed && (
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
        ))}
      </nav>
      <div className="p-4">
        <a href="/notification" className="flex items-center">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          {!isCollapsed && <span className="ml-4">Notifications</span>}
        </a>
        <a href="/settings" className="flex items-center mt-4">
          <FontAwesomeIcon icon={faCog} className="text-xl" />
          {!isCollapsed && <span className="ml-4">Settings</span>}
        </a>
      </div>
      <div className="p-4">
        <div className="text-center">
          <span className="block font-bold">Oluwaseun Ojiri</span>
          <span className="text-sm text-gray-400">Seun@envacord.com</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
