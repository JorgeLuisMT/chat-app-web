import {
  faArrowRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ChatMenu = ({ isChatMenuOpen, handleClickChatMenu }) => {
  return (
    <nav
      id="chat-menu"
      className={isChatMenuOpen ? null : "chat-menu-is-closed"}
    >
      <div className="menu-button-container">
        <div className="menu-button">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ fontSize: "30px", color: "#BBD5DA" }}
            onClick={handleClickChatMenu}
          />
        </div>
      </div>
      <ul>
        <Link to={"/configuration"}>
          <li>Configuration</li>
        </Link>
        <Link to={"/add_friend"}>Add Friend</Link>
        <Link className="leave" to={"/login"}>
          <li>
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Leave
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default ChatMenu;
