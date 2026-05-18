import React, { useContext, useEffect, useState } from "react";
import "../styles/FriendsView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FriendsContext } from "../context/friendsContext";

let persons = [
  { user_name: "ñlsdj", user_id: "ñlkja" },
  { user_name: "ñlsdj", user_id: "ñlkjs" },
  { user_name: "ñlsdj", user_id: "ñlkdj" },
  { user_name: "ñlsdj", user_id: "ñlkfj" },
  { user_name: "ñlsdj", user_id: "ñlkjg" },
  { user_name: "ñlsdj", user_id: "ñlkjh" },
  { user_name: "ñlsdj", user_id: "ñlkjj" },
  { user_name: "ñlsdj", user_id: "ñlkjjj" },
  { user_name: "ñlsdj", user_id: "ñlkjk" },
  { user_name: "ñlsdj", user_id: "ñlkjl" },
];

const PersonButton = ({
  person,
  addToGroup = null,
  cancel = false,
  administerUsers,
}) => {
  const [isCancel, setIsCancel] = useState(cancel);
  const handleButtonChange = () => {
    setIsCancel(!isCancel);
    if (!isCancel) administerUsers((prev) => [...prev, person]);

    if (isCancel)
      administerUsers((prev) =>
        prev.filter((friend) => friend.user_id !== person.user_id),
      );
  };
  return (
    <>
      {!isCancel ? (
        !person.status || addToGroup ? (
          <button
            className="add-person-button"
            data-id={person.user_id}
            onClick={handleButtonChange}
          >
            Add
          </button>
        ) : (
          <button className="chat-person-button" data-id={person.user_id}>
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ fontSize: "25px" }}
            />
          </button>
        )
      ) : (
        <button
          className="cancel-button"
          data-id={person.user_id}
          onClick={handleButtonChange}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "25px" }} />
        </button>
      )}
    </>
  );
};

const PersonContainer = ({
  person,
  addToGroup = null,
  cancel = false,
  administerUsers,
}) => {
  return (
    <>
      <div className="person-container">
        <div className="person-picture">
          <img src="/src/assets/user_picture.png" alt="user picture" />
        </div>
        <div className="person-info">
          <p>{person.user_name}</p>
          <PersonButton
            person={person}
            addToGroup={addToGroup}
            cancel={cancel}
            administerUsers={administerUsers}
          />
        </div>
      </div>
    </>
  );
};

export const PersonsContainer = ({
  title,
  persons,
  addToGroup = null,
  cancel = false,
  administerUsers,
}) => {
  return (
    <>
      <div className="persons-label">
        <hr />
        <small>
          {title.charAt(0).toUpperCase().concat(title.substring(1))}
        </small>
        <hr />
      </div>
      <div className="persons-container">
        {persons.map((person, i) => (
          <PersonContainer
            key={i}
            person={person}
            addToGroup={addToGroup}
            cancel={cancel}
            administerUsers={administerUsers}
          />
        ))}
      </div>
    </>
  );
};

const FriendsView = () => {
  const friends = useContext(FriendsContext);
  const [addToFriends, setAddToFriends] = useState([]);
  useEffect(() => {
    //console.log(addToFriends);
  }, [addToFriends]);
  return (
    <div className="friends-view-container">
      <PersonsContainer title={"friends"} persons={friends} />
      <PersonsContainer
        title={"persons"}
        persons={persons}
        administerUsers={setAddToFriends}
      />
    </div>
  );
};

export default FriendsView;
