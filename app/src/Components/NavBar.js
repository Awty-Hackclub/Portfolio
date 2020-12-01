import React from "react";
import logo from "../img/logo.svg" 

export default function NavBar() {
  return (
    <div className = "NavBarBox">
      <a href = "./">
        <img className="logo" src={logo} alt="logo"></img>
      </a>
      <ul className="Navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#hackathons">Hackathons</a></li>
        <li><a href="#members">Members</a></li>
      </ul>
    </div>
  );
}
