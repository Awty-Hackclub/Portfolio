import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="/">[LOGO]</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="Nav">
          <Nav.Link>Introduction</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Members</Nav.Link>
          <Nav.Link>Sponsorship</Nav.Link>
          <Nav.Link>Our Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
