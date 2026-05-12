import React from "react";
import Chats from "./Chats";
import NoChats from "./NoChats";

let chats = [
  { chat_name: "chat1", last_msg: "last msglknkk" },
  { chat_name: "chat2", last_msg: "last msg{sdojanm{a{d" },
  { chat_name: "chat3", last_msg: "last msgiadnhhviuands" },
  { chat_name: "chat4", last_msg: "last msgñidsaj" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
  { chat_name: "chat5", last_msg: "last msgñaijefiasdf" },
];

const ChatsView = ({ setForm }) => {
  return (
    <div className="chats-view-container">
      {chats.length === 0 ? (
        <NoChats setForm={setForm} />
      ) : (
        <Chats chats={chats} />
      )}
    </div>
  );
};

export default ChatsView;
