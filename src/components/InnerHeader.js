import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InnerHeader.css";
import { Link as ScrollLink } from "react-scroll";
import { useLocation,useNavigate } from 'react-router-dom';
import $ from "jquery";

const InnerHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  const handleHome = () => {
    navigate("/")
  }
  const handleAboutClick = () => {
    setMenuOpen(!isMenuOpen);
    navigate('/?scrollTo=Ourstory');
  }
  const handleServicesClick = () => {
    setMenuOpen(!isMenuOpen)
    navigate('/?scrollTo=Services')
  }
  const handleServicesClickMob = () =>{
    setMenuOpen(!isMenuOpen);
    navigate('/?scrollTo=ServicesMob')
  }
  
  

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
            <ScrollLink to="Ourstory" smooth={true} duration={200}>
              <Nav.Link className="text-black menu-link" onClick={handleAboutClick}>
                about
              </Nav.Link>
              </ScrollLink>  
              <Nav.Link className="text-black menu-link" onClick={handleServicesClick}>
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
                <Link to="/get-in-touch/customer-inquiry">
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
          className={`justify-content-end button_container button_container_inner ${isMenuOpen ? "active" : ""}`}
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
             <span onClick={handleHome}>Home</span>
            </div>
            <ul>
              <li>
                <Link to="/?scrollTo=Ourstory">About</Link>
              </li>
              <li>
                <Link to="/?scrollTo=ServicesMob">Services</Link>
              </li>
              <li>
                <Link to="/get-in-touch/creator-inquiry">Team</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/get-in-touch/customer-inquiry">
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
