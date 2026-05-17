import ChatHeader from "./ChatHeader";
import "../styles/ChatView.css";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { LeaveModal } from "./leaveModal";
import { useState } from "react";

const ChatView = () => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  return (
    <div className="chat-view-container">
      <ChatHeader setIsLeaveModalOpen={setIsLeaveModalOpen} />
      <ChatBody />
      <ChatFooter />
      {isLeaveModalOpen && (
        <LeaveModal setIsLeaveModalOpen={setIsLeaveModalOpen} />
      )}
    </div>
  );
};

export default ChatView;
