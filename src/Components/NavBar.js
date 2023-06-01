import React, { useState } from "react";
import "./Style/NavBar.css";
import logo from "./Images/logo.jpg";

function NavBar(props) {
  const [searchData, setSearchData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(searchData);
  };
  return (
    <div className="NavContainer">
      <div className="logoContainer">
        <img src={logo} className="logo"></img>
        <div style={{ marginLeft: "40px" }}>Showcase</div>
      </div>
      <div className="searchDiv">
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            placeholder="Search"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
            onEnter
          ></input>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
