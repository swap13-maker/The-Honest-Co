import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InnerHeader = () => {
  return (
    <header className="container">
      <Navbar className="py-4" expand="lg">
        <Link to="/">
          <Navbar.Brand href="#">
            <span className="font-weight-800 text-black">the</span>
            <span className="font-weight-600 text-black"> honest</span>
            <span className="font-weight-400 text-black"> company</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-black menu-link" href="#">
              about
            </Nav.Link>
            <Nav.Link className="text-black menu-link" href="#">
              services
            </Nav.Link>
            <Nav.Link className="text-black menu-link" href="#">
              team
            </Nav.Link>
            <Nav.Link className="text-black menu-link">
              <Link to="/portfolio">portfolio</Link>
            </Nav.Link>
            <Nav.Link className="text-black menu-link" href="#">
              <Link to="/resources">resources</Link>
            </Nav.Link>
            <Nav.Link className="text-black nav-btn-area" href="#">
              <Link to="/get-in-touch">
                <button className="nav-sticky-button">get in touch</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default InnerHeader;
