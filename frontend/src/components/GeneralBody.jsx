import React from "react";
import ChatsView from "./ChatsView";
import FriendsView from "./FriendsView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const GeneralBody = ({ form, setForm, handleAddModalClick, friends }) => {
  return (
    <div className="general-body-container">
      {form["options-header-radio"] === "chat" ? (
        <ChatsView setForm={setForm} />
      ) : (
        <FriendsView friends={friends} />
      )}
      <div className="add-chat" onClick={handleAddModalClick}>
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "25px" }} />
      </div>
    </div>
  );
};

export default GeneralBody;
