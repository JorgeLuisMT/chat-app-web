import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Menu = ({ isGeneralMenuOpen, handleClickGeneralMenu }) => {
  return (
    <nav
      id="menu"
      className={isGeneralMenuOpen ? null : "general-menu-is-closed"}
    >
      <div className="menu-button-container">
        <div className="menu-button">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ fontSize: "30px", color: "#BBD5DA" }}
            onClick={handleClickGeneralMenu}
          />
        </div>
      </div>
      <ul>
        <Link to={"/configuration"}>
          <li>Configuration</li>
        </Link>
        <Link className="logout" to={"/login"}>
          <li>
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
