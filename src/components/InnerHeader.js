import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InnerHeader.css";
import $ from "jquery";

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

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
    $("#toggle").toggleClass("active");
    $("#overlay").toggleClass("open");
  };

  return (
    <section>
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

      <Navbar className="pb-4 mobile-navbar-container">
        <Link to="/">
          <Navbar.Brand>
            <span className="font-weight-800 text-dark">the</span>
            <span className="font-weight-600 text-dark"> honest</span>
            <span className="font-weight-400 text-dark"> company</span>
          </Navbar.Brand>
        </Link>
        <div
          id="navbar-nav toggle"
          className="justify-content-end"
          className={`button_container button_container_inner ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <div id="overlay" className={`overlay ${isMenuOpen ? "open" : ""}`}>
          <nav className="overlay-menu">
            <div className="pl-6">
              <span to="/">Home</span>
            </div>
            <ul>
              <li>
                <a href="#" className="font-weight-100">About</a>
              </li>
              <li>
                <a href="#" className="font-weight-100">Services</a>
              </li>
              <li>
                <a href="#" className="font-weight-100">Team</a>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/get-in-touch">
                  <button className="nav-button">get in touch</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Navbar>
    </section>
  );
};

export default InnerHeader;
