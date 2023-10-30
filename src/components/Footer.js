import React from "react";
import "./../App.css";
import myFooterLogo from "../images/footer-logo.png";

function Footer() {
  return (
    <footer className="footer pt-4 border-white">
      <div className="container">
        <div className="row py-md-5 align-items-end">
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
              <a href="" className="text-white">
                Click here to start elevating your physical and digital customer
                experiences.
              <svg
                width="30"
                height="16"
                viewBox="-10 0 25 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animated-svg"
                style={{marginLeft:'-6px'}}
              >
                <path
                  id="Vector"
                  d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                  fill="white"
                />
              </svg>
              </a>
            </h5>
          </div>
          <div className="col-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-3 col-lg-3">
            <img
              className="w-90 d-md-block d-none"
              src={myFooterLogo}
              alt="Footer Logo"
            />
          </div>
        </div>
        <div className="row pt-md-5 pb-4">
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Architecture </div>
            <ul>
              <li>
                <a href="#">Architectural Design</a>
              </li>
              <li>
                <a href="#">Building Information Modelling (BIM)</a>
              </li>
              <li>
                <a href="#">Interior Design</a>
              </li>
              <li>
                <a href="#">Feasibility Studies & Site Analysis</a>
              </li>
              <li>
                <a href="#">Renovation & Restorations</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Industrial Design </div>
            <ul>
              <li>
                <a href="#">Product Design</a>
              </li>
              <li>
                <a href="#">Concept Development & Prototyping</a>
              </li>
              <li>
                <a href="#">Branding & Identify Design</a>
              </li>
              <li>
                <a href="#">Manufacturing Support</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">
              {" "}
              Web & Mobile development{" "}
            </div>
            <ul>
              <li>
                <a href="#">Customer Software Development</a>
              </li>
              <li>
                <a href="#">Mobile Application Development</a>
              </li>
              <li>
                <a href="#">Ai & ML solutions</a>
              </li>
              <li>
                <a href="#">Web3 & Blockchain Application Development</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">
              {" "}
              Marketing & Content creation{" "}
            </div>
            <ul>
              <li>
                <a href="#">Motion Graphics</a>
              </li>
              <li>
                <a href="#">Content Creation</a>
              </li>
              <li>
                <a href="#">Branding & Identify Designs</a>
              </li>
              <li>
                <a href="#">Advertisement</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Get started with us </div>
            <ul>
              <li>
                <a href="#">Get Started</a>
              </li>
              <li>
                <a href="#">Looking for opportunities?</a>
              </li>
              <li>
                <a href="#">Looking for a team to execute?</a>
              </li>
              <li>
                <a href="#">Looking to ideate your solution?</a>
              </li>
              <li>
                <a href="#">Get in touch with us</a>
              </li>
              <li>
                <a href="#">Set up a call</a>
              </li>
              <li>
                <a href="#">Send us your enquiry</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-2 pb-5">
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> About </div>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Our Offering</a>
              </li>
              <li>
                <a href="#">Journey till now</a>
              </li>
            </ul>
            <div className="footer-heading mt-5"> Partners </div>
            <ul>
              <li>
                <a href="#">Become our partners</a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Team </div>
            <ul>
              <li>
                <a href="#">Creative</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Human Resources</a>
              </li>
              <li>
                <a href="#">Management</a>
              </li>
              <li>
                <a href="#">Operations</a>
              </li>
              <li>
                <a href="#">Become our partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Join our team</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> White Papers </div>
            <ul>
              <li>
                <a href="#">Recent</a>
              </li>
              <li>
                <a href="#">Search by category</a>
              </li>
            </ul>
            <div className="footer-heading mt-4"> Case Studies </div>
            <ul>
              <li>
                <a href="#">Architecture</a>
              </li>
              <li>
                <a href="#">Industrial Design</a>
              </li>
              <li>
                <a href="#">Web & Mobile Applications</a>
              </li>
              <li>
                <a href="#">Marketing & Content Creation</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Portfolio </div>
            <ul>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Service Grid</a>
              </li>
              <li>
                <a href="#">Get Started</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
            <div className="footer-heading mt-4 pt-2"> Term & Conditions </div>
            <div className="footer-heading mt-2"> Privacy Policy </div>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Blogs </div>
            <ul>
              <li>
                <a href="#">Recent</a>
              </li>
              <li>
                <a href="#">Hot</a>
              </li>
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="post-footer pt-3 border-top text-center">
          &copy; 2023 - The Honest Company
        </p>
      </div>
    </footer>
  );
}

export default Footer;
