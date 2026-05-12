import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NoChats = ({ setForm }) => {
  const handleClick = (e) => {
    e.preventDefault();

    setForm((form) => {
      return { ...form, ["options-header-radio"]: "friends" };
    });
  };
  return (
    <div className="no-chats-container">
      <FontAwesomeIcon icon={faCommentSlash} style={{ fontSize: "50px" }} />
      <small>
        No chats found.{" "}
        <a href="" onClick={handleClick}>
          Add friends to chat
        </a>
      </small>
    </div>
  );
};

export default NoChats;
