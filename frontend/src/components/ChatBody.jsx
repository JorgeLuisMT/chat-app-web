import React from "react";
import ChatBodyBg from "./ChatBodyBg";
import { useMessageStyle } from "../hooks/useMessageStyle";

let msgs = [
  {
    msg: "kjndfñkalsdnkñfluvvv hola prbando este word wraper a ver que tal funcionaa",
    sender: "sjdñls",
    id: "1",
  },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "123" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "12" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "13" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "21" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "22" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "14" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "23" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "15" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "24" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "25" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "26" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "16" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "17" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "27" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "18" },
  { msg: "kjndfñkalsdnkñf", sender: "aaaa", id: "28" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "19" },
  { msg: "kjndfñkalsdnkñf", sender: "sjdñls", id: "20" },
];

const Message = ({ msg }) => {
  return (
    <div
      className={`msg-container ${msg.sender === "aaaa" ? "sender" : "receiver"}`}
    >
      <li className={msg.styleMsg}>{msg.msg}</li>
    </div>
  );
};

const ChatBody = () => {
  const { messages } = useMessageStyle({ msgs });

  if (!messages) return;
  return (
    <ChatBodyBg>
      <div className="chat-body-container">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
      </div>
    </ChatBodyBg>
  );
};

export default ChatBody;
