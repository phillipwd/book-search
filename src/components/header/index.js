import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="headBox">
      <div className="headBar">
        <h1>Google Books</h1>
        {/* links here */}
        <span>search </span>
        <span>saved</span>
      </div>
    </div>
  );
}

export default Header;
