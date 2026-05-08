import React from "react";

function GeneralOptionsHeader() {
  return (
    <div className="options-header-container">
      <form id="general-options-form">
        <label htmlFor="chats">Chats</label>
        <input type="radio" id="chats" name="chats" />
        <label htmlFor="friends">Friends</label>
        <input type="radio" id="friends" name="friends" />
      </form>
    </div>
  );
}

export default GeneralOptionsHeader;
