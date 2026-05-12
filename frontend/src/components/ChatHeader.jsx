import React, { useState } from "react";
import MenuButton from "./MenuButton";
import ChatMenu from "./ChatMenu";

const ChatHeader = () => {
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  const handleClickChatMenu = () => setIsChatMenuOpen(!isChatMenuOpen);
  return (
    <div className="chat-header-container">
      <div>
        <div className="chat-name">
          <p>Chat</p>
        </div>
        <div>
          <MenuButton handleClickMenu={handleClickChatMenu} />
        </div>
      </div>

      <ChatMenu
        isChatMenuOpen={isChatMenuOpen}
        handleClickChatMenu={handleClickChatMenu}
      />
    </div>
  );
};

export default ChatHeader;
