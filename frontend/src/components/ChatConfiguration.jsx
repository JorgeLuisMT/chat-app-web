import React, { useEffect, useState } from "react";
import { FormBg } from "./FormBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { PersonsContainer } from "./FriendsView";

const ChatConfiguration = ({ friends }) => {
  const [friendsOut, setFriendsOut] = useState(friends);

  useEffect(() => {
    console.log(friendsOut);
  }, [friendsOut]);
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
          persons={friends}
          cancel={true}
          administerUsers={setFriendsOut}
        />
      </div>
    </FormBg>
  );
};

export default ChatConfiguration;
