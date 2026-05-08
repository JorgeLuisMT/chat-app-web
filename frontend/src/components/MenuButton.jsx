import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MenuButton = ({ handleClickMenu }) => {
  return (
    <div onClick={handleClickMenu}>
      <FontAwesomeIcon icon={faBars} style={{ fontSize: "50px" }} />
    </div>
  );
};

export default MenuButton;
