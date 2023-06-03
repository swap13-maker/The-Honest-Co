import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Hero.css";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header glass height-85 ${showHeader ? 'sticky' : ''}`}>
      <Navbar
        className="container py-3"
        expand="lg"
        variant="dark"
        sticky=""
      >
        <Navbar.Brand href="#">
          <span className="font-weight-800 text-black">the</span>
          <span className="font-weight-600 text-black"> honest</span>
          <span className="font-weight-400 text-black"> company</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-black" href="#">about</Nav.Link>
            <Nav.Link className="text-black" href="#">services us</Nav.Link>
            <Nav.Link className="text-black" href="#">team</Nav.Link>
            <Nav.Link className="text-black" href="#">portfolio</Nav.Link>
            <Nav.Link className="text-black" href="#">resources</Nav.Link>
            <Nav.Link className="text-black" href="#" className="nav-btn-area">
              <Link to="/get-in-touch"><button className="nav-sticky-button">get in touch</button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;

