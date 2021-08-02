import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./logo.jpg";

function Header() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Healthcare Logo" />
      </Link>
      <div className="header__search">
        <input
          placeholder="Search for products..."
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="link-style" to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <br></br>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link className="link-style" to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <br></br>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="link-style" to="/account">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <br></br>
            <span className="header__optionLineTwo">Account</span>
          </div>
        </Link>

        <Link className="link-style" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
