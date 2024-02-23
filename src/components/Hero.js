import React, { useEffect, useState } from "react";
import "./Hero.css";
import "./../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo.svg";
import logoIcon from "../images/logo-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import $ from "jquery";

function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [showHeader, setShowHeader] = useState(true);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
    $("#toggle").toggleClass("active");
    $("#overlay").toggleClass("open");
  };
  const handleHome = () =>{
    setMenuOpen(!isMenuOpen);
    navigate('/')
  }
  const handleAboutClick = () => {
    setMenuOpen(!isMenuOpen);
    navigate('/?scrollTo=Ourstory');
  }
  const handleServicesClickMob = () =>{
    navigate('/?scrollTo=ServicesMob')
    setMenuOpen(!isMenuOpen);
   
  }
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <section id="hero">
      <Container>
        <div className="app-container pt-2">
          {/* Desktop header */}
          <Navbar
            className={`py-4 ${showHeader ? "headerVisible" : ""}`}
            expand="lg"
            variant="dark"
          >
            <Link to="/">
              <Navbar.Brand>
                <span className="font-weight-800">the</span>
                <span className="font-weight-600"> honest</span>
                <span className="font-weight-400"> company</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav>
                <ScrollLink to="Ourstory" smooth={true} duration={200}>
                <Nav.Link href="#" className="menu-link">
                  about
                </Nav.Link>
                </ScrollLink>
                <ScrollLink to="Services" smooth={true} duration={200}>
                <Nav.Link href="#" className="menu-link">
                  services
                </Nav.Link>
                </ScrollLink>
                <Nav.Link href="#" className="menu-link">
                  <Link to="/get-in-touch/creator-inquiry">team</Link>
                </Nav.Link>
                <Nav.Link href="#" className="menu-link">
                  <Link to="/portfolio">portfolio</Link>
                </Nav.Link>
                <Nav.Link href="#" className="menu-link">
                  <Link to="/resources">resources</Link>
                </Nav.Link>
                <Nav.Link href="#" className="nav-btn-area">
                  <Link to="/get-in-touch/customer-inquiry">
                    <button className="nav-button">get in touch</button>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Mobile header */}
          <Navbar className="pb-4 mobile-navbar-container">
            <Link to="/">
              <Navbar.Brand>
                <span className="font-weight-800 text-white">the</span>
                <span className="font-weight-600 text-white"> honest</span>
                <span className="font-weight-400 text-white"> company</span>
              </Navbar.Brand>
            </Link>
            <div
              id="navbar-nav toggle"
              className={`justify-content-end button_container ${
                isMenuOpen ? "active" : ""
              }`}
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
                    <Link  onClick={() => handleScrollTo("Ourstory")}>
                      About
                    </Link>
                  </li>
                  <li>
                  
                    <Link onClick={() => handleScrollTo("ServicesMob")}>
                      Services
                    </Link>
                  
                    /{" "}
                  </li>
                  <li>
                  <ScrollLink to="Ourstory" smooth={true} duration={200}>
                  <Link to="/get-in-touch/creator-inquiry">Team</Link>
                    </ScrollLink>  
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

          <main className="content">
            <div className="row">
              <div className="col-md-8 col-12 p-absolute text-align-media-left">
                <div>
                  <img
                    className="heading-logo d-md-none d-blade"
                    src={logo}
                    alt="The Honest Company logo"
                  />
                </div>
                <h2 className="heading-quote">
                  We help <span className="bg-elipse">businesses</span>
                  <br />{" "}
                  <span className="px-md-4 px-2 heading-icon">
                    <img alt="" className="rotate" src={logoIcon} />
                  </span>{" "}
                  create digital products
                  <br />
                  & solutions.
                </h2>
              </div>
              <div className="col-md-4 col-12 p-absolute d-md-block d-none">
                <img
                  className="heading-logo"
                  src={logo}
                  alt="The Honest Company logo"
                />
              </div>
            </div>
          </main>

          {/*bottom*/}
          <div className="bottom-section with-border-top">
            <div className="border-top">
              <div className="row">
                <div className="col-12 col-md-8">
                  <p className="text-white pb-3 pt-4 text-uppercase bottom-header-text font-media-15 px-md-0 px-2">
                    We are a community of creators who make really cool things
                    for businesses that help them succeed.
                  </p>
                  <ScrollLink to="contact-section" smooth={true} duration={500}>
                    <button className="nav-foot-button">
                      Get started with us!
                    </button>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          {/*bottom*/}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
