import React from "react";
import "./../../App.css";
import "./Portfolio.css";
import "./project.css";
import Slider from "react-slick";
import demo6 from "../../images/demo6.png";
import demo7 from "../../images/demo7.png";
import demo8 from "../../images/demo8.png";
import demo9 from "../../images/demo9.png";
import demo10 from "../../images/demo10.png";
import FooterWithSlider from "./../FooterWithSlider";
import Filter from "./Filter";
import ProjectCards from "../ProjectCards";
import { NextArrow, PrevArrow } from "../Story/Story";
import Grid from '../../images/Grid1.jpg'
import myFooterLogo from "../../images/footer-logo.png";

function Project1() {
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
      <section className="header"></section>
      {/* mian content */}
      <section>
        <div className="container-fluid main-container">
          <ul className="breadcrumb-navigation pt-6">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li className="current">Project 1</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7 pb-3">
                <div className="top-heading">
                Creative Project with<br />the Ultimate AI-Powered<br />Pattern.
                  <img class="blog-logo blog-hide" src={`http://localhost:3000/react.svg`}></img>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="py-4">
                  <ul className="top-works">
                    <li className="pt-4 d-none d-sm-block">UI Redesign</li>
                    <li className="pt-4 d-none d-sm-block">Minimalistic Design</li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li className="d-inline-block mb-2 mb-md-0 mr-md-2">
                    <a>Artificial Inteligance</a>
                  </li>
                  <li className="px-4 d-inline-block">
                    <a>Application Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src={demo10} alt="" className="img-fluid w-100 my-4 py-3" />
        {/* section 1 */}
        <section className="container main-container">
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div className="proj-heading">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-80">
                A single platform allowing users to send money and utilities
                payment via an online mobile application to enhance day to day
                transactions and better track bill payments and finances.
              </div>
            </div>
            <div className="col-12 col-md-6 px-3">
              <div className="proj-heading paddingLeft-even">
                Solution
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-100 paddingLeft-even">
                Development of a cutting edge mobile based platform allowing
                user to semmlessly transfer money and effortlessly manage their
                finances ehancing the overall user experience and satisfaction.
              </div>
            </div>
            <div className="col-12">
              {/* <img src={demo7} alt="" className="w-100 py-5" /> */}
              <img src={Grid} alt="" className="w-100 py-5" />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading" style={{paddingTop:'0px'}}>
                One For All
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="content_text">
                A unique mobile application that allows users to pay almost all
                of their online bills. The platform allows the user to pay
                online via the multiple payment gateways and service channels.
                The application offers a one for all bills payment solutions
                allowing the user hassel free utility bills settelment.
              </div>
            </div>
            <div className="col-12 Image_size">
              <img src={demo6} alt="" className="w-100 py-5 Image_baner" />
            </div>
          </div>
          {/* section2 */}
          <div className="row py-5 pb-3">
            <div className="col-12 col-md-6 py-5">
              <div className="custom_left_text">
                We work with clients across a range of industries, helping them
                to succeed and thrive in today's competitive marketplace by
                providing. We work with clients across a range of industries.
                <br />
                <br />
                We work with industries, helping them to succeed and thrive.
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading d-flex align-items-center ml-auto py-5">
                The Honest Edge
              </div>
            </div>
            <div className="col-12">
              <img src={Grid} alt="" className="w-100 py-5" />
            </div>
          </div>
          {/* section3 */}
          <div className="row py-4">
            <div className="col-12 text-align-center">
              <div className="proj-heading">The Best out of It</div>
              <div className="proj-sub-heading py-3">
                We work with clients across a range of industries, d solutions
                to help them
                <br />
                achieve their business goals
              </div>
            </div>
            <div className="col-12 d-flex">
              <img src={demo8} alt="" className="w-40 px-4 py-4" />
              <img src={demo9} alt="" className="w-100 px-4 py-4" />
            </div>
          </div>
        </section>
      </section>
      {/* section 3 */}
      <section className="container main-container custom_padding">
        <div className="row">
          <div className="col-12">
            <div className="proj-heading">The Honest Edge</div>
            <hr className="heading_line"/>
          </div>
          <div className="col-12 col-md-5 py-2">
            <div className="w-100">
              We work with clients across a range of industries, helping them to
              succeed and thrive in today's competitive marketplace by
              providing.
            </div>
          </div>
          {/* <div className="col-12 col-md-7 py-4">
            <div className="proj-link text-align-end">
              See our other work
              <svg
                width="20"
                height="14"
                viewBox="-10 0 25 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                  fill="black"
                />
              </svg>
            </div>
          </div> */}
          <div className="col-12 d-flex">
            <img src={demo8} alt="" className="w-40 px-4 py-4" />
            <img src={demo9} alt="" className="w-100 px-4 py-4" />
          </div>
          <div className="col-12 text-align-center">
            <p className="px-5 py-3 text_containe">
              We work with clients across a range of industries, helping them to
              succeed and thrive in today's <br />competitive marketplace by
              providing.
            </p>
          </div>
        </div>
      </section>
      {/* section 4 */}
      {/* <img src={demo10} alt="" className="w-100" /> */}
      {/* newsletter */}
      {/* <section className="bg-white py-4">
        <div className="container main-container py-5">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="newsletter">
                Have an <span className="idea">idea</span>? <br />
                Turn it into <span className="idea">reality</span>!
              </div>
              <div className="py-5">
                <button className="bg-dark text-uppercase text-white font-weight-300 button">
                  get started with us !
                </button>
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex">
              <div className="d-flex mx-auto align-items-center">video</div>
            </div>
          </div>
        </div>
      </section> */}

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

        {/* footer */}
        <div className="container pt-5">
          <div className="row py-md-5 align-items-end">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                className="w-50 pb-4 d-md-none d-block"
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

export default Project1;
