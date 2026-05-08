import React from "react";
import MenuButton from "./MenuButton";

const ChatHeader = ({ handleClickChatMenu }) => {
  return (
    <div className="chat-header-container">
      <div className="chat-name">Chat</div>
      <MenuButton handleClickMenu={handleClickChatMenu} />
    </div>
  );
};

export default ChatHeader;
