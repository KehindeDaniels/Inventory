import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="header bg-gray-100 flex justify-between items-center px-16 py-4">
      <div
        className={`search-bar ${isSearchOpen ? "block" : "hidden"} md:block`}
      >
        <button className="search-icon md:hidden" onClick={toggleSearch}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <input
          type="search"
          placeholder="Search product, supplier, order"
          className="search-input p-2 rounded-lg w-full md:w-auto"
        />
      </div>
      <button className="search-toggle md:hidden" onClick={toggleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className="user-info flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="user-image h-8 w-8 rounded-full mr-2"
        />
        <span className="user-name hidden md:block">
          Okizode Oseokhune - Admin
        </span>
      </div>
    </div>
  );
};

export default Header;
