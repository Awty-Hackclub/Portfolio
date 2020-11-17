import React from "react";
import logo from "../img/logo.svg" 

export default function NavBar() {
  return (
    <ul className="Navbar">
      <img className="logo" src={logo} alt="logo"></img>
      <div className="Navbar">
        <li><a href="">Introduction</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Members</a></li>
        <li><a href="">Our Projects</a></li>
      </div>
    </ul>
  );
}
