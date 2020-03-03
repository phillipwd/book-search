import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="headBox">
      <div className="headBar">
        <h1>Google Books</h1>
        {/* links here */}
        <Link to="/">search</Link>
        <Link to="/saved">saved</Link>
      </div>
    </div>
  );
}

export default Header;
