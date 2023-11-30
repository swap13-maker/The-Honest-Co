import React,{ useEffect } from "react";
import InnerHeader from "../InnerHeader.js";
import "./../../App.css";
import "./Portfolio.css";
import "./project.css";
import Slider from "react-slick";
import Footer from "./../Footer";
import myFooterLogo from "../../images/footer-logo.png";
import demo8 from "../../images/demo8.png";
import demo9 from "../../images/demo9.png";
import Filter from "./Filter";
import ProjectCards from "../ProjectCards";
import { NextArrow, PrevArrow } from "../Story/Story";
import Banner from "../../images/pro5Banner.jpg";
import Grid from "../../images/Healthtrak/Grid/Mobile Grid1 HealthTrak.jpg"
import Grid2 from "../../images/Healthtrak/Grid/Mobile Grid2 HealthTrak.jpg"
import secondGrid from "../../images/pro5SecondaryBanner.jpg";
import webGrid from "../../images/Mobile Grid2 HealthTrak.jpg";
import conclusion from "../../images/Conclusion.jpg";
import mob1 from "../../images/Healthtrak/Mobile Grid 1 a.jpg";
import mob2 from "../../images/Healthtrak/Mobile Grid 1 b.jpg";
import mob3 from "../../images/Healthtrak/Mobile Grid 1 c.jpg";
import mob4 from "../../images/Healthtrak/Mobile Grid 1 d.jpg";
import mob5 from "../../images/Healthtrak/Mobile Grid 2 a.jpg";
import mob6 from "../../images/Healthtrak/Mobile Grid 2 b.jpg";
import mob7 from "../../images/Healthtrak/Mobile Grid 2 c.jpg";
import mob8 from "../../images/Healthtrak/Mobile Grid 2 d.jpg";
// import conclusion from "../../images/Healthtrak";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Project5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: true, // Add this line to enable arrows
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section>
      {/* Header */}
      <InnerHeader />
      <Helmet>
        <title>Pill and Appointment Reminder Mobile App</title>
        <meta
          name="description"
          content="Prioritize health with our user-friendly app, tracking medicines and appointments to ensure optimal wellness and simplify healthcare management for individuals."
        />
        <meta
          name="keywords"
          content="Healthcare Technology · Custom Softwares · Medicine Reminder · Personalized Notifications"
        ></meta>
        <meta property="og:image" content={Banner} />
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      {/* mian content */}
      <section>
        <div className="container-fluid main-container">
          <ul className="breadcrumb-navigation pt-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="current">Pill and Appointment Reminder Mobile App</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7 pb-3">
                <div className="top-heading">
                  Tracking Medicines and
                  <br />
                  Appointments Made Easy Via
                  <br />
                  Application Development
                  <img
                    alt=""
                    className="blog-logo blog-hide mx-3 d-none d-md-block"
                    src={`https://thehonestco.in/react.svg`}
                  ></img>
                </div>
              </div>
              <div className="col-12 col-md-5 d-none d-sm-block">
                <div className="py-4">
                  <ul className="top-works">
                    <li className="pt-4"> Medicine Reminder</li>
                    <li className="pt-4">
                    Personalized Notifications{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li className="d-inline-block mb-2 mb-md-0 mr-md-2">
                    <a>Healthcare Technology</a>
                  </li>
                  <li className="px-4 d-inline-block">
                    <a>Custom Softwares</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src={Banner} alt="" className="img-fluid w-100 my-md-4 my-0 py-md-3 py-0" />
        {/* section 1 */}
        <section className="container main-container">
          <div className="row py-5">
            <div className="col-12 col-md-6 pb-4">
              <div className="proj-heading">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4">
              A digital platform for efficient medication management and
                tracking. Addressing the need of a dedicated online platform for
                timely monitoring of consultations and lab reports.
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob1}
              ></img>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob2}
              ></img>
            </div>
            <div className="col-12 col-md-6 px-3">
              <div className="proj-heading paddingLeft-even">
                Solution
                <hr className="w-50" />
              </div>
              <div className="proj-content pb-4 w-100 paddingLeft-even">
              Development of a mobile and web based application for storing
                and managing users' medication data. The platform aimed to serve
                as a centralized repository for prescriptions and all medical
                information.
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob3}
              ></img>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob4}
              ></img>
            </div>
            <div className="col-12">
              <img src={Grid} alt="" className="w-100 py-5 d-none d-md-block" />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading" style={{ paddingTop: "0px" }}>
              Health Care & IT
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="content_text">
              With features like centralized prescription management and
                comprehensive medical information storage, patients gain
                convenience, accuracy, and improved medication adherence for
                enhanced health outcomes.
              </div>
            </div>
            <div className="col-12 Image_size d-none d-md-block">
              <img src={secondGrid} alt="" className="w-100 py-5 Image_baner" />
            </div>
            <div className="col-12 pt-4 d-block d-md-none">
              <img src={secondGrid} alt="" className="w-100" />
            </div>
          </div>
          {/* section2 */}
          <div className="row py-md-5 py-4 pb-md-3 pb-0">
            <div className="col-12 col-md-6 d-md-none d-flex">
              <div className="proj-heading" style={{ paddingTop: "0px" }}>
              Take Control of Your Health
              </div>
            </div>
            <div className="col-12 col-md-6 py-md-5 py-0">
              <div className="custom_left_text">
              The dedicated notification module built for this application
                allows the user to modify the notifications settings and
                preferences as per their own convivence. Now never miss your
                medicine refill day or your consultations!
                <br />
              </div>
            </div>
            {/* desktop only */}
            <div className="col-12 col-md-6 d-none d-md-flex">
              <div className="proj-heading d-flex align-items-center ml-auto py-5">
                Order and Reorder
              </div>
            </div>
            <div className="col-12 d-none d-md-block">
              <img src={Grid2} alt="" className="w-100 py-5" />
            </div>
            {/* mobile only */}
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob5} alt="" className="w-100" />
            </div>
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob6} alt="" className="w-100" />
            </div>
          </div>
          {/* section3 */}
          <div className="row py-4 d-none">
            <div className="col-12 text-align-center mobile-text-align-left">
              <div className="proj-heading">
                 Management Made Easy Via Dashboards
              </div>
              <div className="proj-sub-heading py-3">
              The custom dashboard built with the sole purpose of swift
                tracking the new users, medication requests and the pharmacy
                vendors onboarded the platform By leveraging the best of
                application development methodologies our objective was to
                design the admin panel allowing the user to do most in the least
                number of clicks.
              </div>
            </div>
            {/* desktop */}
            <div className="col-12 d-none d-md-flex">
            <img src={webGrid} alt="" className="w-100 py-5" />
            </div>
            {/* mobile */}
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob8} alt="" className="w-100" />
            </div>
          </div>
        </section>
      </section>
      {/* section 3 */}
      <section className="container main-container custom_padding">
        <div className="row">
          <div className="col-12">
            <div className="proj-heading">The Conclusion</div>
            <hr className="heading_line" />
          </div>
          <div className="col-12 col-md-5 py-2">
            <div className="w-100">
            Our Electronic Health platform, with its user-friendly mobile
              application, empowers individuals to take control of their health
              by efficiently managing medications and consultations all via an
              intitutive mobile application.
            </div>
          </div>
          <div className="col-12">
            <img src={conclusion} alt="" className="w-100 pt-3" />
          </div>
        </div>
      </section>
      <section className="other__work__container border-white">
        <div className="container main-container pb-5 pt-md-7">
          <div className="heading__wrapper">
            <h5>
              Our Other <strong>Work</strong>
            </h5>
            <span>View All of Our Work</span>
          </div>

          <div className="row custom-row">
            <Slider {...settings}>
              {Filter.map((data, index) => {
                const { name, logo, image, description } = data;
                const cardClass = index % 2 === 0 ? "odd-card" : "even-card";
                const marginTopClass =
                  index === 0 || index === 1 ? "" : "margin-port";

                const newImageUrl = `../${image}`;
                const newLogoUrl = `../${logo}`;

                return (
                  <ProjectCards
                    description={description}
                    marginTopClass={marginTopClass}
                    cardClass={cardClass}
                    name={name}
                    logo={newLogoUrl}
                    image={newImageUrl}
                    key={index}
                    width={12}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        {/* <Footer/> */}
        {/* footer */}
        <div className="container pt-5">
          <div className="row py-md-5 align-items-end">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="w-50 pb-4 d-md-none d-block" alt="Footer Logo" />
              <article className="c-article">
                <header className="c-article__header">
                  <h2 className="c-article__title footer-title">
                    <span className="footer-title">Honest Edge.</span>
                  </h2>
                </header>
              </article>
              <h5 className="footer-content cool-link text-white">
                <a href="" className="text-white">
                  Click here to start elevating your physical and digital
                  customer experiences.
                  <svg
                    width="30"
                    height="16"
                    viewBox="-10 0 25 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-svg"
                    style={{ marginLeft: "-6px" }}
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
          <div className="row pt-md-6 pb-4">
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
              <div className="footer-heading mb-2">
                Application Development{" "}
              </div>
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
              <div className="footer-heading mb-2"> Content Creation </div>
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
              <div className="footer-heading mb-2"> Industrial Design </div>
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

          <div className="row pt-5 pb-5">
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
      </section>
    </section>
  );
}

export default Project5;
