import React, { useContext, useState } from "react";
import { FormBg } from "./FormBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { PersonsContainer } from "./FriendsView";
import { FriendsContext } from "../context/friendsContext";

const ChatConfiguration = () => {
  const friends = useContext(FriendsContext);
  const [friendsInChat, setFriendsInChat] = useState(friends);
  return (
    <FormBg>
      <div className="chat-config-container">
        <form className="chat-config-form">
          <div className="img-container">
            <img src="/src/assets/user_picture.png" alt="user picture" />
            <div className="img-cover"></div>
            <div className="img-edit">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "25px" }} />
            </div>
          </div>
          <label htmlFor="chatname">Chatname:</label>
          <div className="chatname-field">
            <input
              type="text"
              value="dymmy text"
              name="chat-name"
              id="chatname"
            />
            <label htmlFor="chatname">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "1rem" }} />
            </label>
          </div>
        </form>
        <PersonsContainer
          title="Group members"
          persons={friendsInChat}
          cancel={true}
          administerUsers={setFriendsInChat}
        />
        <div className="chat-config-options">
          <div className="config-options-cancel">Cancel</div>
          <div className="config-options-update">Update</div>
        </div>
      </div>
    </FormBg>
  );
};

export default ChatConfiguration;
