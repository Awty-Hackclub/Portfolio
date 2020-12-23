import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>
            <a className="AwtyHackclub" href="./">
              <h1 className="AwtyHackclub">Awty Hackclub</h1>
            </a>
          </li>
        </Link>
        <Link to="/support">
          <li>
            <button>Support Us</button>
          </li>
        </Link>
      </ul>
      <hr></hr>
    </div>
  );
}
