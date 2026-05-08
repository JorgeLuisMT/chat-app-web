import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ChatsHeader = () => {
  return (
    <div className="chats-header-container">
      <form id="general-chats-form">
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input type="search" id="search-chats" name="search-chats" />
      </form>
    </div>
  );
};

export default ChatsHeader;
