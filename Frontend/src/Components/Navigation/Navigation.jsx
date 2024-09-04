import React from "react";
import { Nav, Navbar, NavDropdown, Container, Dropdown } from "react-bootstrap";
import Image from "./logo.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar" bg="dark" variant="dark">
        <div className="container-lg">
          <Navbar.Brand href="./" className="">
            <span className="brand text-warning"> Career </span> Pathfinder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto bg-dark p-3">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/passionId">
                Identify Passion
              </Nav.Link>
              <Nav.Link as={NavLink} to="/careers">
                Discover Job Market
              </Nav.Link>

              <Nav.Link as={NavLink} to="/education">
                Academic Networking
              </Nav.Link>

              <Nav.Link as={NavLink} to="/skill">
                Soft Skill Development
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
