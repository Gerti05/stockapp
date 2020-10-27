import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function navbar() {
  return (
    <Navbar className="navFont" bg="transparent" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2 className="navLogo">StockEZe</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navLink" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="navLink" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
