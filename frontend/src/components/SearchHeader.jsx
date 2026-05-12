import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchHeader = ({ handleChange, form }) => {
  return (
    <form className="search-header-container">
      <div className="search-icon-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="search-header-input-container">
        <input
          type="search"
          id="search-header"
          name={`search-${form["options-header-radio"] === "chat" ? "chats" : "friends"}`}
          value={
            form["options-header-radio"] === "chat"
              ? form["search-chats"]
              : form["search-friends"]
          }
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchHeader;
