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
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">Application Development </div>
            <ul>
              <li>
                <a href="#">Custom Software Development</a>
              </li>
              <li>
                <a href="#">Mobile Application Development</a>
              </li>
              <li>
                <a href="#">AI & ML solutions</a>
              </li>
              <li>
                <a href="#">Web3 & Blockchain</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">
              {" "}
             Content Creation{" "}
            </div>
            <ul>
              <li>
                <a href="#">Motion Graphics</a>
              </li>
              <li>
                <a href="#">2D/ 3D Graphics Design</a>
              </li>
              <li>
                <a href="#">Advertisements</a>
              </li>
              <li>
                <a href="#">Branding & Identify Design</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">
              {" "}
             Industrial Design{" "}
            </div>
            <ul>
              <li>
                <a href="#">Product Design</a>
              </li>
              <li>
                <a href="#">Concept Development & Development</a>
              </li>
              <li>
                <a href="#">Manufacturing Support</a>
              </li>
              <li>
                <a href="#">Merchandizing & Packaging Designe</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Industrial </div>
            <ul>
              <li>
                <a href="#">D2C& E-Commerce</a>
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

        <div className="row pt-2 pb-5">
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Resources </div>
            <ul>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">White Papers</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Infographics</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">Portfolio</div>
            <ul>
              <li>
                <a href="#">Application Development</a>
              </li>
              <li>
                <a href="#">Content Creation</a>
              </li>
              <li>
                <a href="#">Industrial Design</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Connect With Us</div>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
            </ul>
          </div>
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2">Get In Touch </div>
            <ul>
              <li>
                <a href="#">Are you a Customer</a>
              </li>
              <li>
                <a href="#">Are you a creator?</a>
              </li>
            </ul>
          </div>
          
          <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> hello@thehonestco.in </div>
            <div className="footer-heading mb-2"> Terms & Conditions </div>
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
