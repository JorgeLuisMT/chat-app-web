import React, { useState } from "react";
import GeneralOptionsHeader from "./GeneralOptionsHeader";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import SearchHeader from "./SearchHeader";

const GeneralHeader = ({ handleChange, form }) => {
  const [isGeneralMenuOpen, setIsGeneralMenuOpen] = useState(false);
  const handleClickGeneralMenu = () => setIsGeneralMenuOpen(!isGeneralMenuOpen);
  return (
    <div className="general-header-container">
      <div>
        <MenuButton handleClickMenu={handleClickGeneralMenu} />
        <div className="general-headers-container">
          <GeneralOptionsHeader handleChange={handleChange} form={form} />
          <SearchHeader handleChange={handleChange} form={form} />
        </div>
      </div>

      <Menu
        isGeneralMenuOpen={isGeneralMenuOpen}
        handleClickGeneralMenu={handleClickGeneralMenu}
      />
    </div>
  );
};

export default GeneralHeader;
