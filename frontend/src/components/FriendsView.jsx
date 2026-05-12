import React from "react";
import "../styles/FriendsView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

let friends = [
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
  { user_name: "ñlsdj", status: "accepted" },
];

let persons = [
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
  { user_name: "ñlsdj" },
];

const PersonContainer = ({ person }) => {
  return (
    <>
      <div className="person-container">
        <div className="person-picture">
          <img src="/src/assets/user_picture.png" alt="user picture" />
        </div>
        <div className="person-info">
          <p>{person.user_name}</p>
          {!person.status ? (
            <button className="add-person-button">Add</button>
          ) : (
            <button className="chat-person-button">
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "25px" }}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const FriendsView = () => {
  return (
    <div className="friends-view-container">
      <div className="friends-label">
        <hr />
        <small>Friends</small>
        <hr />
      </div>
      <div className="friends-container">
        {friends.map((person, i) => (
          <PersonContainer key={i} person={person} />
        ))}
      </div>
      <div className="add-label">
        <hr />
        <small>Add friends</small>
        <hr />
      </div>
      <div className="persons-container">
        {persons.map((person, i) => (
          <PersonContainer key={i} person={person} />
        ))}
      </div>
    </div>
  );
};

export default FriendsView;
