import React from "react";

const Chat = ({ chat }) => {
  return (
    <div className="chat-container">
      <div className="user-picture-container">
        <img src="/src/assets/user_picture.png" alt="user-picture" />
      </div>
      <div className="chat-info-container">
        <p>{chat.chat_name}</p>
        <small>{chat.last_msg}</small>
      </div>
    </div>
  );
};

const Chats = ({ chats }) => {
  return (
    <div className="chats-container">
      {chats.map((chat, i) => (
        <Chat key={i} chat={chat} />
      ))}
    </div>
  );
};

export default Chats;
