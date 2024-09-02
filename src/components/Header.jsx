import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src="/public/netflixLogo.png" alt="Netflix Logo" width="150" />
        </Link>
        <div className="actions d-flex gap-2">
          <select className="custom-select">
            <option value="en">English</option>
            <option value="tr">Turkish</option>
          </select>
          <button className="custom-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
