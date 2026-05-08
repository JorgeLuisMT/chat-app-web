import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

let iconStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  fontSize: "13vw",
  transform: "rotate(45deg)",
  color: "#FFA6FB",
  ["z-index"]: "998",
};

export const AuthBg = ({ children }) => {
  return (
    <div className="auth-bg">
      {children}
      <FontAwesomeIcon
        icon={faMobileScreenButton}
        style={{ ...iconStyles, top: "33%" }}
      />
      <FontAwesomeIcon
        icon={faPhone}
        style={{
          ...iconStyles,
          left: "15%",
          top: "50px",
          transform: "rotateY(180deg)",
        }}
      />
      <FontAwesomeIcon
        icon={faLaptop}
        style={{ ...iconStyles, left: "15%", top: "66%" }}
      />
      <FontAwesomeIcon
        icon={faMobileScreenButton}
        style={{
          ...iconStyles,
          left: "30%",
          top: "33%",
        }}
      />
      <FontAwesomeIcon
        icon={faPhone}
        style={{
          ...iconStyles,
          left: "45%",
          top: "50px",
          transform: "rotateY(180deg)",
        }}
      />
      <FontAwesomeIcon
        icon={faLaptop}
        style={{ ...iconStyles, left: "45%", top: "66%" }}
      />
      <FontAwesomeIcon
        icon={faMobileScreenButton}
        style={{
          ...iconStyles,
          left: "60%",
          top: "33%",
        }}
      />
      <FontAwesomeIcon
        icon={faPhone}
        style={{
          ...iconStyles,
          left: "75%",
          top: "50px",
          transform: "rotateY(180deg)",
        }}
      />
      <FontAwesomeIcon
        icon={faLaptop}
        style={{ ...iconStyles, left: "75%", top: "66%" }}
      />
    </div>
  );
};
