import { LOGO_URL } from "../Utils/contants.js";

const Header = () => {
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="c-logo"
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header