import React, { useState } from "react";
import { PersonsContainer } from "./FriendsView";

const AddModal = ({ handleAddModalClick, friends }) => {
  const [friendsAddedToGroup, setFriendsAddedToGroup] = useState([]);

  const handleAdd = () => {
    console.log(friendsAddedToGroup);
  };
  return (
    <div className="add-modal-container">
      <div className="add-modal-bg"></div>
      <div className="add-modal-interaction">
        <form>
          <label htmlFor="chat-name">Chat Name: </label>
          <input type="text" id="chat-name" name="chat-name" />
        </form>
        <PersonsContainer
          title={"Add friends to group"}
          persons={friends}
          administerUsers={setFriendsAddedToGroup}
          addToGroup={true}
        />
        <div className="add-modal-options">
          <div className="modal-options-cancel" onClick={handleAddModalClick}>
            Cancel
          </div>
          <div className="modal-options-add" onClick={handleAdd}>
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
