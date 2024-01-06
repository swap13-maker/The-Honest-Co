import React from "react";
import "./../App.css";
import myFooterLogo from "../images/footer-logo.svg";
import { Link } from "react-router-dom";
import Arrow from "../images/White_Arrow.json";
import Lottie from "lottie-react";

function Footer() {
  return (
    <footer className="footer pt-4 border-white">
      <div className="container py-4">
        <div className="row pb-md-5 align-items-end">
          <div className="col-12 col-md-6 col-lg-6">
            <img
              className="w-50 pb-4 d-md-none d-block"
              src={myFooterLogo}
              alt="Footer Logo"
            />
            <article className="c-article">
              <header className="c-article__header">
                <h2 className="c-article__title footer-title">
                  <span className="footer-title">Honest Edge.</span>
                </h2>
              </header>
            </article>
            <h5 className="footer-content cool-link text-white">
              <Link to="/get-in-touch/customer-inquiry" className="text-white">
                Click here to start elevating your physical and digital customer
                experiences.
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                 
                > */}
                <Lottie
                  animationData={Arrow}
                  autoplay
                  loop
                  className="w-xs-100 w-md-12 footerArrow"
                />
                {/* </div> */}
              </Link>
            </h5>
          </div>
          <div className="col-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-3 col-lg-3">
            <div className="text-align-right">
              <img
                className="d-md-block d-none"
                src={myFooterLogo}
                alt="Footer Logo"
              />
            </div>
          </div>
        </div>
        <div className="row pt-md-6 pb-4">
          <div className="col-6 pt-media-4 col-md-custom-footer-1 footer-card">
            <div className="footer-heading mb-2">About</div>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-2 footer-card">
            <div className="footer-heading mb-2">Application Development </div>
            <ul>
              <li>
                <Link to="/portfolio">Custom Software Development</Link>
              </li>
              <li>
                <Link to="/portfolio">Mobile Application Development</Link>
              </li>
              <li>
                <Link to="/portfolio">AI & ML Solutions</Link>
              </li>
              <li>
                <Link to="/portfolio">Web3 & Blockchain</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-3 footer-card">
            <div className="footer-heading mb-2"> Content Creation </div>
            <ul>
              <li>
                <Link to="/portfolio">Motion Graphics</Link>
              </li>
              <li>
                <Link to="/portfolio">2D & 3D Graphics Design</Link>
              </li>
              <li>
                <Link to="/portfolio">Advertisements</Link>
              </li>
              <li>
                <Link to="/portfolio">Branding & Identify Design</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-4 footer-card">
            <div className="footer-heading mb-2"> Industrial Design </div>
            <ul>
              <li>
                <Link to="/portfolio">Product Design</Link>
              </li>
              <li>
                <Link to="/portfolio">Concept & Prototyping</Link>
              </li>
              <li>
                <Link to="/portfolio">Manufacturing Support</Link>
              </li>
              <li>
                <Link to="/portfolio">Merchandising & Packaging</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-5 footer-card">
            <div className="footer-heading mb-2"> Industries </div>
            <ul>
              <li>
                <a href="#">D2C & E-Commerce</a>
              </li>
              <li>
                <a href="#">Banking & Finance</a>
              </li>
              <li>
                <a href="#">Healthcare Technology</a>
              </li>
              <li>
                <a href="#">Staffing & Recruitment</a>
              </li>
              <li>
                <a href="#">Educational Technology</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-md-5 pt-0 pb-5">
          <div className="col-6 pt-media-4 col-md-custom-footer-1 footer-card">
            <div className="footer-heading mb-2"> Resources </div>
            <ul>
              <li>
                <Link to="/resources">Case Studies</Link>
              </li>
              <li>
                <Link to="/resources">Articles</Link>
              </li>
              <li>
                <Link to="/resources">White Papers</Link>
              </li>
              <li>
                <Link to="/resources">Tutorials</Link>
              </li>
              <li>
                <Link to="/resources">Infographics</Link>
              </li>
              <li>
                <Link to="/resources">Reports</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-2 footer-card">
            <div className="footer-heading mb-2">Portfolio</div>
            <ul>
              <li>
                <Link to="/portfolio">Application Development</Link>
              </li>
              <li>
                <Link to="/portfolio">Content Creation</Link>
              </li>
              <li>
                <Link to="/portfolio">Industrial Design</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-3 footer-card">
            <div className="footer-heading mb-2"> Connect With Us</div>
            <ul>
              <li>
                <Link to="https://www.linkedin.com/company/the-honest-co">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/917011242138">WhatsApp</Link>
              </li>
              <li>
                <Link to="mailto:business@thehonestco.in">Email</Link>
              </li>
              <li>
                <Link to="tel:+917011242138">Get in touch</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-footer-4 footer-card">
            <div className="footer-heading mb-2">Get In Touch </div>
            <ul>
              <li>
                <Link to="/get-in-touch/customer-inquiry">
                  Are you a customer?
                </Link>
              </li>
              <li>
                <Link to="/get-in-touch/creator-inquiry">
                  Are you a creator?
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 pt-media-4 col-md-custom-footer-5 footer-card">
            
            <Link to="mailto:business@thehonestco.in">
              <div className="footer-heading mb-2"> business@thehonestco.in </div>
            </Link>
            <Link to="tel:+91 120 246 2890">
              <div className="footer-heading mb-2"> +91 120 246 2890</div>
            </Link>
            <div className="footer-heading mb-2"> Terms & Conditions </div>
          </div>
        </div>
        <p className="post-footer pt-3 border-top text-center">
          &copy; 2024 - Honest Digital Services Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
