import React from "react";
import { Container } from "react-bootstrap";
import "./../App.css";
import "./Contact.css";
import Cta1 from "../images/LandingPages/Cta1.jpg";
import Cta1Hover from "../images/LandingPages/Cta1-hover.jpg";
import Cta2 from "../images/LandingPages/Cta2.jpg";
import Cta2Hover from "../images/LandingPages/Cta2-hover.jpg";
import backgroundFooter from "../images/LandingPages/background.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="py-md-5" id="contact-section">
      <div className="bg-dark">
        <Container className="py-5">
          <div className="heading text-center text-uppercase py-md-5">
            <h2 className="text-white section-heading">GET STARTED WITH US</h2>
            <div className="sub-heading pt-4">
              <span className="text-light1">help us to better </span>
              <span className="text-success1">
                {" "}
                cater to
                <br />
                your needs.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5 pt-4 px-4" >
              <Link to="/get-in-touch/customer-inquiry" className="grid p-3 px-md-0">
                <figure className="effect-sadie">
                  <img className="w-100 img-1" src={Cta1} alt="" />
                  <img className="w-100 img-1-hover" src={Cta1Hover} alt="" />
                  <figcaption>
                    <h2>
                      are you{" "}
                      <span>
                        <br />a customer ?
                      </span>
                    </h2>
                    <p>
                      <button className="contact-button">
                        GET STARTED WITH US !
                      </button>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className="col-md-5 pt-4 px-4" >
              <Link to="/get-in-touch/creator-inquiry" className="grid p-3 px-md-0">
                <figure className="effect-sadie effect-sadie-2">
                  <img className="w-100 img-1" src={Cta2} alt="" />
                  <img className="w-100 img-1-hover" src={Cta2Hover} alt="" />
                  <figcaption>
                    <h2>
                      are you{" "}
                      <span>
                        <br />a creator ?
                      </span>
                    </h2>
                    <p>
                      <button className="contact-button">
                        GET STARTED WITH US !
                      </button>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className="col-md-1"></div>
          </div>
        </Container>
      </div>
      <img src={backgroundFooter} width="100%" className="p-0 m-0" alt="backfooter"/>
    </section>
  );
}

export default Contact;
