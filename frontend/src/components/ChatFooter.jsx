import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChatFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="chat-footer-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="type something" name="chat-input" />
      <button type="submit">
        <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "1rem" }} />
      </button>
    </form>
  );
};

export default ChatFooter;
