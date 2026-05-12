import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MenuButton = ({ handleClickMenu }) => {
  return (
    <div onClick={handleClickMenu} className="menu-button-container">
      <FontAwesomeIcon icon={faBars} style={{ fontSize: "25px" }} />
    </div>
  );
};

export default MenuButton;
