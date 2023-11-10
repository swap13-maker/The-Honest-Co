import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InnerHeader.css";

const InnerHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
    if (scrollPos >= -300) {
      setShowHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos, handleScroll]);

  return (
    <header
      className={`header glass mobile-d-none height-85 ${
        showHeader ? "sticky" : ""
      }`}
    >
      <Navbar className="container py-3" expand="lg" variant="dark" sticky="">
        <Link to="/">
          <Navbar.Brand>
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
