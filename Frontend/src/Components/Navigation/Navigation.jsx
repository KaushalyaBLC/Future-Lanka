import React from "react";
import { Nav, Navbar, NavDropdown, Container, Dropdown } from "react-bootstrap";
import Image from "./logo.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar" bg="dark" variant="dark">
        <div className="container-md">
        <Navbar.Brand href="./" className="">
          <img src={Image} height="50vh" />{" "}
          <span className="brand"> Future Lanka </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bg-dark p-3">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/passion">
              Identify Passion
            </Nav.Link>
            <NavDropdown title="Discover Careers" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/career">
                Discover Careers
              </NavDropdown.Item>
              <Dropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/career/explore">
                Explore Industries & Careers
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/career/podcast">
                National Career Guidance Podcast
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Academic Networking" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/hsnetworking">
                Academic Networking
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hsnetworking/stateuni">
                State Universities
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hsnetworking/nonstateuni">
                Private and Non State Universities
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hsnetworking/vocational">
                Vocational Institutions
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hsnetworking/professional">
                Professional Institute
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hsnetworking/special">
                Special Scholarship & Exclusive Rewards
              </NavDropdown.Item>
            </NavDropdown>

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
