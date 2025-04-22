import { LOGO_URL } from "../Utils/contants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";

const Header = () => {
  const [loginNameReact, setLoginNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      {/* Logo */}
      <div>
        <img className="h-16 w-16 rounded-full" src={LOGO_URL} alt="c-logo" />
      </div>

      {/* Navigation */}
      <div className="flex-1 flex justify-center items-center">
        <ul className="flex gap-6 text-lg font-medium">
          <li className="flex items-center gap-1">
            Online Status:{" "}
            {onlineStatus ? (
              <span className="material-symbols-outlined text-green-300 text-2xl">
                cell_tower
              </span>
            ) : (
              <span className="material-symbols-outlined text-red-300">
                signal_disconnected
              </span>
            )}
          </li>
          <li>
            <Link
              className="hover:text-yellow-300 transition duration-200"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-300 transition duration-200"
              to={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-300 transition duration-200"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-200">
            Cart
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div>
        <button
          className="w-[80px] border border-white px-4 py-1 rounded-md hover:bg-white hover:text-indigo-700 transition duration-200 text-center"
          onClick={() =>
            setLoginNameReact(loginNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {loginNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
