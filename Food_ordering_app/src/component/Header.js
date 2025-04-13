import { LOGO_URL } from "../Utils/contants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";

const Header = () => {
  const [loginNameReact, setLoginNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex shadow h-25  ">
      <div>
        <img className="h-25 w-25" src={LOGO_URL} alt="c-logo" />
      </div>
      <div className="flex w-[100%] justify-center items-center ">
        <ul className="flex w-[50%] justify-around ">
          <li>
            Online Status : {onlineStatus ?(
              <span className="material-symbols-outlined align-middle">
              cell_tower
              </span>
            ) : (
              <span className="material-symbols-outlined  align-middle">
              signal_disconnected
              </span>
            )}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact Us</Link>{" "}
          </li>
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
