import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

let styles = {
  position: "absolute",
  top: 0,
  left: 0,
  color: "#ff61f8",
  fontSize: "50px",
  "z-index": "997",
};

const ChatBodyBg = ({ children }) => {
  return (
    <div className="chat-body-bg">
      {children}
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "-25px", top: "50px" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "-25px", top: "50%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "20%", top: "25%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "20%", top: "75%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "50%", top: "50px" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "50%", top: "50%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "75%", top: "25%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "75%", top: "75%" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "calc(100% - 25px)", top: "25px" }}
      />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ ...styles, left: "calc(100% - 25px)", top: "50%" }}
      />
    </div>
  );
};

export default ChatBodyBg;
