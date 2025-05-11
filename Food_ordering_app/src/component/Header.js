import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import useOnlineStatus from "../Utils/useOnlineStatus.js";
import UserContext from "../Utils/UserContext.js";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../Utils/contants.js";
import { useContext } from "react";

const Header = () => {
  const [loginNameReact, setLoginNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      {/* Logo */}
      <div>
        <img className="h-16 w-16 rounded-full" src={LOGO_URL} alt="Logo" />
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
        </ul>
      </div>

      {/* Cart and Login */}
      <div className="flex items-center gap-4">
        {/* Cart Icon with Count */}
        <Link to="/cart" className="relative">
          <FaShoppingCart data-testid="cart-icon" className="text-white text-3xl" />
          {cart.length > 0 && (
            <span data-testid="cart-count" className="absolute top-0 right-0 text-xs font-bold bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Login Button */}
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
