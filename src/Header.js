import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import logo from "./logo.jpg";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

function Header() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const user = netlifyIdentity.currentUser();

  const handleCLick = () => {
    netlifyIdentity.open();
    netlifyIdentity.on("init", (user) => console.log("init", user));
    netlifyIdentity.on("login", (user) => console.log("Welcome", user));
    netlifyIdentity.on("logout", () => console.log("Logged out"));
    netlifyIdentity.on("error", (err) => console.error("Error", err));
    netlifyIdentity.on("open", () => console.log("Widget opened"));
    netlifyIdentity.on("close", () => console.log("Widget closed"));

    netlifyIdentity.off("login"); // to unbind all registered handlers
    netlifyIdentity.off("login", user);
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
        <Link to="/" className="btn btn-primary">
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__nav">
        <Link className="link-style">
          <div onClick={handleCLick} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user && user.user_metadata.full_name}
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
