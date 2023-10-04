import React from "react";
import Nav from "./Nav";
import Logout from "../generalcomponent/Logout";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a className="nav__brand" href="/">
          <img src="../src/assets/images/nav_logo.png" alt="logo" />
        </a>
        <Nav />
        <Logout />
      </nav>
    </header>
  );
}
