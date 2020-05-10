import React from "react";
import NavBar from "../elements/NavBar";
import NavBarUL from "../elements/NavBarUL";
import { Link } from "react-router-dom";

const styleObj = {
  fontFamily: "Georgia, Times New Roman, Times, serif",
  color: "white",
};

const Nav = () => {
  return (
    <NavBar>
      <NavBarUL>
        <Link to="/contacts">
          <li style={styleObj}>Contacts</li>
        </Link>
        <Link to="/">
          <li style={styleObj}>Home</li>
        </Link>
      </NavBarUL>
    </NavBar>
  );
};

export default Nav;
