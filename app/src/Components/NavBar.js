import React from "react";
import logo from "../img/logo.svg" 

export default function NavBar() {
  return (
    <ul className="Navbar">
      <img className="logo" src={logo} alt="logo"></img>
      <div className = "NavBarText">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#hackathons">Hackathons</a></li>
        <li><a href="#members">Members</a></li>
      </div>
    </ul>
  );
}
