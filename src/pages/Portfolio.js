import React, { useState } from "react";
import { useEffect } from "react";
import "./../App.css";
import "./../components/Portfolio/Portfolio.css";
import Filter from "./../components/Portfolio/Filter";
import InnerHeader from "../components/InnerHeader.js";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import "../components/Portfolio/Portfolio.css";
import ProjectCards from "../components/ProjectCards";
import Lottie from "lottie-react";
import loader from "../images/PortfolioListing.json";
import ChatComponent from "../components/ChatComponent";
import { Helmet } from "react-helmet";
import GoogleTagManager from "../GoogleTagManager.js";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item, setItem] = useState(Filter);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPortfolioAniHidden, setIsPortfolioAniHidden] = useState(false);
  // const [filteredIndex, setFilteredIndex] = useState(0);

  const togglePortfolioAni = () => {
    setIsPortfolioAniHidden(!isPortfolioAniHidden);
  };

  const getItem = (cat) => {
    var updatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(updatedValue);
    // setFilteredIndex(0); // Reset the index
  };

  return (
    <section>
      <Helmet>
        <title>Our Digital Solutions | Honest Digital Services </title>
        <GoogleTagManager />
        <meta
          name="description"
          content="Our portfolio of digital products created for businesses all across the world. Digitally transforming Banking & Finance, D2C & ECommerce, HealthCare, Staffing & Recruitment and other sectors for achieving business goals. "
        />
        <meta name="keywords" content=""></meta>
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      {/* Header */}
      <InnerHeader />
      {/* mian content */}
      <section className="container main-container">
        <div className="portfolio__page">
          <ul className="breadcrumb-navigation pt-7">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="current">Portfolio</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="top-heading">Honest Projects</div>
                <div className="top-sub-heading py-4">
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past.
                </div>
              </div>
              <div className="col-12 col-md-5 d-flex">
                <div className="d-none d-md-flex ml-auto align-items-start">
                  <Lottie
                    animationData={loader}
                    autoplay
                    loop
                    className="w-50 d-flex ml-auto margin-top--35"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 mb-5">
            <div className="button-container filter__container d-flex">
              <div
                className={`custom-button ${
                  activeCategory === "All" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("All");
                  setItem(Filter);
                }}
              >
                All
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab1" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab1");
                  getItem("tab1");
                }}
              >
                D2C & E-Commerce
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab2" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab2");
                  getItem("tab2");
                }}
              >
                Banking & Finance
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab3" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab3");
                  getItem("tab3");
                }}
              >
                Healthcare Technology
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab4" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab4");
                  getItem("tab4");
                }}
              >
                Staffing & Recruitment
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab5" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab5");
                  getItem("tab5");
                }}
              >
                Educational Technology
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab6" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab6");
                  getItem("tab6");
                }}
              >
                Misc.
              </div>
            </div>

            <div className="row custom-row mt-5 px-3 mobile-d-none">
              {item.map((data, index) => {
                const { name, logo, image, description, alt, url } = data;
                const cardClass = index % 2 === 0 ? "odd-card" : "even-card";
                const marginTopClass =
                  index === 0 || index === 1 ? "" : "margin-portolio";

                return (
                  <ProjectCards
                    description={description}
                    marginTopClass={marginTopClass}
                    cardClass={cardClass}
                    name={name}
                    logo={logo}
                    image={image}
                    key={index}
                    alt={alt}
                    url={url}
                  />
                );
              })}
            </div>
            <div className="desktop-d-none">
              {item.map((data, index) => (
                <div className="pb-5">
                  <Link key={index} to={data.url}>
                    {/* <div className="col-12 pb-2"> */}
                    <img
                      className="w-100"
                      src={data.image}
                      title={data.name}
                      alt={data.alt}
                    />

                    <div className="work-heading">{data.name}</div>
                    <div className="work-subheading">{data.description}</div>

                    {/* </div> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-4">
          <div className="row py-5">
            <div className="col-12 col-md-7 col-lg-7 px-md-0">
              <div className="text-uppercase">
                <h1 className="left-aligned portfolio-heading">
                  Want to build one
                  <br />
                  for yourself ?
                </h1>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-end">
              <div className="portfolio-sub-heading d-flex align-items-center">
                <Link
                  to="/get-in-touch/customer-inquiry"
                  className="m-0 font-size-15 text-decoration-underline"
                >
                  Start your dream project with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatComponent />
    </section>
  );
};

export default Portfolio;
