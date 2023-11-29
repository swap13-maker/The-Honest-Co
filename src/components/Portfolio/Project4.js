import React from "react";
import InnerHeader from "../InnerHeader.js";
import "./../../App.css";
import "./Portfolio.css";
import "./project.css";
import Slider from "react-slick";
import Footer from "./../Footer";
import Filter from "./Filter";
import ProjectCards from "../ProjectCards";
import { NextArrow, PrevArrow } from "../Story/Story";
import Banner from "../../images/pro4Banner.jpg";
import Grid from "../../images/Mobile Grid SOS.jpg";
import secondGrid from "../../images/pro4SecondaryBanner.jpg";
import webGrid from "../../images/Mobile Grid 2 SOS.jpg";
import conslusion from "../../images/Conclusion.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Project4() {
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
        <title>SOS & Location Sharing Application </title>
        <meta
          name="description"
          content="Enhance safety with our comprehensive location sharing and SOS app, offering real-time tracking features that provide peace of mind and security for users."
        />
        <meta
          name="keywords"
          content="Location Sharing & Security · AI & ML · Live Tracking · SOS Mobile App "
        ></meta>
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      <section className="header"></section>
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
            <li className="current">SOS & Location Sharing Application </li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7 pb-3">
                <div className="top-heading">
                Enhanced Tracking &<br />
                Surveillance Via Community Driven
                  <br />
                  Online Platform
                  <img
                    alt=""
                    className="blog-logo blog-hide"
                    src={`https://thehonestco.in/react.svg`}
                  ></img>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="py-4">
                  <ul className="top-works">
                    <li className="pt-4 d-none d-sm-block"> Live Tracking</li>
                    <li className="pt-4 d-none d-sm-block">
                    SOS Mobile App
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li className="d-block d-md-inline px-2">
                    <a>Location Sharing & Security</a>
                  </li>
                  <li className="px-4 d-block d-md-inline px-2">
                    <a>AI & ML</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src={Banner} alt="" className="w-100 my-4 pb-5" />
        {/* section 1 */}
        <section className="container main-container">
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div className="proj-heading">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-80">
                A single platform allowing users to send money and execute
                utilities payment via an online mobile application to enhance
                day to day transactions and better track bill payments and
                finances.
              </div>
            </div>
            <div className="col-12 col-md-6 px-3">
              <div className="proj-heading">
                Solution
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-80">
                Development of a cutting edge mobile based platform allowing
                user to semmlessly transfer money and effortlessly manage their
                finances ehancing the overall user experience and satisfaction.
              </div>
            </div>
            <div className="col-12">
              <img src={Grid} alt="" className="w-100 py-5" />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading " style={{ paddingTop: "0px" }}>
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
              <img
                src={secondGrid}
                alt=""
                className="w-100 py-5  Image_baner"
              />
            </div>
          </div>
          {/* section2 */}
          {/* <div className="row py-5 pb-5">
            <div className="col-12 col-md-6 pt-5">
              <div>
                We work with clients across a range of industries, helping them
                to succeed and thrive in today's competitive marketplace by
                providing. We work with clients across a range of industries.
                <br />
                <br />
                We work with industries, helping them to succeed and thrive.
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading d-flex align-items-center ml-auto">
                The Honest Edge
              </div>
            </div>
            <div className="col-12">
              <img src={demo7} alt="" className="w-100 py-5" />
            </div>
          </div> */}
          {/* section3 */}
          <div className="row py-5">
            <div className="col-12 text-align-center">
              <div className="proj-heading">Seamless User Experience </div>
              <div className="proj-sub-heading py-3">
                The mobile application allows the user to manage all the payment
                and also allows them to pay from their multiple banks allowing
                the application to be a one-stop platform for all of their bills
                and utilities payment.
                
              </div>
            </div>
            <div className="col-12">
              <img src={webGrid} alt="" className="w-100 py-5" />
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
          <div className="col-12 col-md-5 py-4">
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
            <img src={conslusion} alt="" className="w-100 py-5" />
          </div>
          <div className="col-12 text-align-center">
            <p className="px-5 py-3 pt-3 text_containe">
              We work with clients across a range of industries, helping them to
              succeed and thrive in today's competitive <br />
              marketplace by providing.
            </p>
          </div>
        </div>
      </section>
      <section className="other__work__container border-white">
        <div className="container main-container">
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
        <Footer />
        {/* <div className="container">
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
              <h5 className="footer-content">
                <a href="" className="cool-link text-white">
                  Click here to start elevating your physical and digital
                  customer experiences.
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
        </div> */}
      </section>
    </section>
  );
}

export default Project4;
