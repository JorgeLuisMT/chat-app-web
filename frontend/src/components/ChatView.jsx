import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMenu from "./ChatMenu";
import "../styles/ChatView.css";

const ChatView = () => {
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  const handleClickChatMenu = () => setIsChatMenuOpen(!isChatMenuOpen);
  return (
    <div className="chat-view-container">
      <ChatHeader handleClickChatMenu={handleClickChatMenu} />
      <ChatMenu
        isChatMenuOpen={isChatMenuOpen}
        handleClickChatMenu={handleClickChatMenu}
      />
    </div>
  );
};

export default ChatView;
