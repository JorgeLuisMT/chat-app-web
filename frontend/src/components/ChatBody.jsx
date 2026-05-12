import React from "react";
import ChatBodyBg from "./ChatBodyBg";

let msgs = [
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls" },
];

const Message = ({ msg }) => {
  return (
    <div className={`msg-container ${msg.sender ? "sender" : null}`}>
      <li>{msg.msg}</li>
    </div>
  );
};

const ChatBody = () => {
  return (
    <ChatBodyBg>
      <div className="chat-body-container">
        {msgs.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
      </div>
    </ChatBodyBg>
  );
};

export default ChatBody;
