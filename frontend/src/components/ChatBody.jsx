import React, { useEffect, useState } from "react";
import ChatBodyBg from "./ChatBodyBg";

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

const useMessageStyle = ({ msgs } = []) => {
  const [messages, setMessages] = useState(msgs);

  let newMessages = [...messages];
  let previousMsg;
  let currentMsg;
  let styledMsg;
  let cont = 0;

  const hanldeMessages = () => {
    for (let i = 0; i < newMessages.length; i++) {
      currentMsg = newMessages[i];
      if (!previousMsg) {
        styledMsg = { ...currentMsg, styleMsg: "normal-msg" };
        previousMsg = currentMsg;
        newMessages[i] = styledMsg;
        //console.log(newMessages);
        cont++;
        continue;
      }
      if (
        previousMsg &&
        previousMsg.sender === currentMsg.sender &&
        cont === 1
      ) {
        styledMsg = { ...previousMsg, styleMsg: "top-msg" };
        newMessages[i - 1] = styledMsg;
        previousMsg = currentMsg;
        styledMsg = { ...currentMsg, styleMsg: "bottom-msg" };
        newMessages[i] = styledMsg;
        //console.log(newMessages);
        cont++;
        continue;
      }
      if (
        previousMsg &&
        previousMsg.sender === currentMsg.sender &&
        cont === 2
      ) {
        styledMsg = { ...previousMsg, styleMsg: "normal-msg" };
        newMessages[i - 1] = styledMsg;
        previousMsg = currentMsg;
        styledMsg = { ...currentMsg, styleMsg: "bottom-msg" };
        newMessages[i] = styledMsg;
        //(console.log(newMessages);
        continue;
      }
      if (previousMsg && previousMsg.sender !== currentMsg.sender) {
        //console.log("hola");
        styledMsg = { ...currentMsg, styleMsg: "normal-msg" };
        newMessages[i] = styledMsg;
        previousMsg = currentMsg;
        cont = 1;
      }
    }
    console.log(newMessages);
    setMessages(newMessages);
  };

  return { messages, hanldeMessages };
};

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
  const { messages, hanldeMessages } = useMessageStyle({ msgs });

  useEffect(() => {
    hanldeMessages();
  }, []);

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
