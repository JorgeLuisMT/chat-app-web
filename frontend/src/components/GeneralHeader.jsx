import React from "react";
import GeneralOptionsHeader from "./GeneralOptionsHeader";
import ChatsHeader from "./ChatsHeader";
import MenuButton from "./MenuButton";

const GeneralHeader = ({ handleClickGeneralMenu }) => {
  return (
    <div className="general-header-container">
      <MenuButton handleClickMenu={handleClickGeneralMenu} />
      <div className="general-headers-container">
        <GeneralOptionsHeader />
        <ChatsHeader />
      </div>
    </div>
  );
};

export default GeneralHeader;
