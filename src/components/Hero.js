import React from "react";
import "./Hero.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import logoIcon from "../images/logo-icon.png";

function Hero() {
  return (
    <section id="hero" className="">
      <Container>
        <div className="app-container pt-2">
          {/*navbar*/}
          <Navbar
            className="border-bottom py-4"
            expand="lg"
            variant="dark"
            sticky=""
          >
            <Navbar.Brand href="#">
              <span className="font-weight-800">the</span>
              <span className="font-weight-600"> honest</span>
              <span className="font-weight-400"> company</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#">about</Nav.Link>
                <Nav.Link href="#">services us</Nav.Link>
                <Nav.Link href="#">team</Nav.Link>
                <Nav.Link href="#">portfolio</Nav.Link>
                <Nav.Link href="#">resources</Nav.Link>
                <Nav.Link href="#" className="nav-btn-area">
                  <button className="nav-button">get in touch</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <main className="content">
            <div className="row">
              <div className="col-8 p-absolute">
                <h2 className="heading-quote">
                  We help <span className="bg-elipse">businesses</span>
                  <br />{" "}
                  <span className="px-4 heading-icon">
                    <img className="rotate" src={logoIcon} />
                  </span>{" "}
                  create digital & physical
                  <br />
                  experiences.
                </h2>
              </div>
              <div className="col-4 p-absolute">
                <img
                  className="heading-logo"
                  src={logo}
                  alt="The Honest Company logo"
                />
              </div>
            </div>
          </main>

          {/*bottom*/}
          <div className="bottom-section">
            <div className="border-top">
              <div className="row">
                <div className="col-12 col-md-8">
                  <p className="text-white pb-3 pt-4 text-uppercase bottom-header-text">
                    We are a community of creators who make really cool things
                    for new businesses that help them succeed.
                  </p>
                  <button className="nav-foot-button">
                    Get started with us !
                  </button>
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
