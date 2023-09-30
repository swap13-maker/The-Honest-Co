import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import "./../App.css";
import "./Contact.css";
import Cta1 from "../images/Cta1.jpg";
import Cta1Hover from "../images/Cta1-hover.jpg";
import Cta2 from "../images/Cta2.jpg";
import Cta2Hover from "../images/Cta2-hover.jpg";
import backgroundFooter from "../images/background.png";
import { Link } from "react-router-dom";

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position to trigger the animation
      easing: "ease-in-out", // Animation easing (CSS transition-timing-function)
      delay: 0, // Delay (in milliseconds) before the animation starts
      once: true, // Whether the animation should occur only once or every time the element is scrolled into view
      mirror: false, // Whether elements with the same data-aos value should animate individually or together
    });
  }, []);

  return (
    <section className="py-md-5" id="contact-section">
      <Container className="py-5">
        <div className="heading text-center text-uppercase py-md-5">
          <h2 className="text-white section-heading">GET STARTED WITH US</h2>
          <div className="sub-heading pt-4" data-aos="fade-up">
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
          <div className="col-md-2"></div>
          <div className="col-md-4 pt-4" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/get-in-touch" className="grid p-3 px-md-0">
              <figure class="effect-sadie">
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
          <div className="col-md-4 pt-4" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/get-in-touch/creator" className="grid p-3 px-md-0">
              <figure class="effect-sadie">
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
          <div className="col-md-2"></div>
        </div>
      </Container>
      {/* <img src={backgroundFooter} width="100%" /> */}
    </section>
  );
}

export default Contact;
