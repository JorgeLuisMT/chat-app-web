import ChatHeader from "./ChatHeader";
import "../styles/ChatView.css";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatView = () => {
  return (
    <div className="chat-view-container">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatView;
