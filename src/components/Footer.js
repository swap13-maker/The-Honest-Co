import React from "react";
import "./../App.css";
import myFooterLogo from "../images/footer-logo.png";

function Footer() {
  return (
    <footer className="footer pt-4 border-white">
      <div className="container">
        <div className="row py-5 align-items-end">
          <div className="col-12 col-md-6 col-lg-6">
            <article class="c-article">
              <header class="c-article__header">
                <h2 class="c-article__title footer-title">
                  <span class="footer-title">Honest Edge.</span>
                </h2>
              </header>
            </article>
            <h5 className="text-white">
              Click here to start elevating your physical and digital customer
              experiences.
            </h5>
          </div>
          <div className="col-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-3 col-lg-3">
            <img className="w-90" src={myFooterLogo} alt="Footer Logo" />
          </div>
        </div>
        <div className="row pt-5 pb-4">
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
            <div className="footer-heading mb-2"> Industrial training </div>
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
          <div className="col-12 col-md-custom-2 footer-card">
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
