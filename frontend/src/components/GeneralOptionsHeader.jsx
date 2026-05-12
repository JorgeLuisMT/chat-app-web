import React from "react";

function GeneralOptionsHeader({ handleChange, form }) {
  return (
    <form className="options-header-container">
      <div>
        <input
          type="radio"
          id="chat"
          name="options-header-radio"
          checked={form["options-header-radio"] === "chat"}
          value="chat"
          onChange={handleChange}
        />
        <label htmlFor="chat">Chats</label>
      </div>
      <div>
        <input
          type="radio"
          id="friends"
          name="options-header-radio"
          checked={form["options-header-radio"] === "friends"}
          value="friends"
          onChange={handleChange}
        />
        <label htmlFor="friends">Friends</label>
      </div>
    </form>
  );
}

export default GeneralOptionsHeader;
