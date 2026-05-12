import React from "react";
import ChatsView from "./ChatsView";
import FriendsView from "./FriendsView";

const GeneralBody = ({ form, setForm }) => {
  return (
    <div className="general-body-container">
      {form["options-header-radio"] === "chat" ? (
        <ChatsView setForm={setForm} />
      ) : (
        <FriendsView />
      )}
    </div>
  );
};

export default GeneralBody;
