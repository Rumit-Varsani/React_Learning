import { LOGO_URL } from "../Utils/contants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";
const Header = () => {
  const [loginNameReact, setLoginNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="c-logo" />
      </div>
      <div className="nav-item">
        <ul className="flex"> 
          <li>Online Status : {onlineStatus? "Green" : "Red"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li> <Link to={"/contact"}>Contact Us</Link> </li>
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
