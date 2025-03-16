import { LOGO_URL } from "../Utils/contants.js";
import { useState } from "react";
const Header = () => {
  const [loginNameReact, setLoginNameReact] = useState("Login");
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="c-logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                loginNameReact === "Login"
                  ? setLoginNameReact("Logout")
                  : setLoginNameReact("Login");
              }}
            >
              {loginNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
