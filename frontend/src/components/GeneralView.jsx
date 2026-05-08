import React, { useState } from "react";
import GeneralHeader from "./GeneralHeader";
import Menu from "./Menu";
import "../styles/GeneralView.css";

const GeneralView = () => {
  const [isGeneralMenuOpen, setIsGeneralMenuOpen] = useState(false);
  const handleClickGeneralMenu = () => setIsGeneralMenuOpen(!isGeneralMenuOpen);
  return (
    <div className="general-view-container">
      <GeneralHeader handleClickGeneralMenu={handleClickGeneralMenu} />
      <Menu
        isGeneralMenuOpen={isGeneralMenuOpen}
        handleClickGeneralMenu={handleClickGeneralMenu}
      />
    </div>
  );
};

export default GeneralView;
