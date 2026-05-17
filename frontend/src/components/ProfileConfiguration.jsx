import React from "react";
import { FormBg } from "./formBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const ProfileConfiguration = () => {
  return (
    <FormBg>
      <div className="profile-config-container">
        <form className="profile-config-form">
          <div className="img-container">
            <img src="/src/assets/user_picture.png" alt="user picture" />
            <div className="img-cover"></div>
            <div className="img-edit">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "25px" }} />
            </div>
          </div>

          <label htmlFor="username">Username:</label>
          <div className="username-field">
            <input
              type="text"
              value="dummy text"
              name="user-name"
              id="username"
            />
            <label htmlFor="username">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "1rem" }} />
            </label>
          </div>

          <label htmlFor="useremail">Email:</label>
          <div className="useremail-field">
            <input
              type="text"
              value="dummy text"
              name="user-email"
              id="useremail"
            />
            <label htmlFor="useremail">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "1rem" }} />
            </label>
          </div>

          <label htmlFor="password">Password:</label>
          <div className="password-field">
            <input
              type="text"
              value="dummy text"
              name="user-password"
              id="password"
            />
            <label htmlFor="password">
              <FontAwesomeIcon icon={faPencil} style={{ fontSize: "1rem" }} />
            </label>
          </div>
          <input type="submit" value="Update" />
        </form>
      </div>
    </FormBg>
  );
};

export default ProfileConfiguration;
