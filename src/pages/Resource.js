import React, { useState, useEffect } from "react";
import "./../App.css";
import "./../components/Portfolio/Portfolio.css";
import "./resource.css";
import Filter from "./../components/Resource/Filter";
import InnerHeader from "../components/InnerHeader.js";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loader from "../images/ResourceListing.json";
import ChatComponent from "../components/ChatComponent";
import { Helmet } from "react-helmet";
import Arrow from "../images/Arrow.json";
import GoogleTagManager from "../GoogleTagManager.js";

const Resource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item, setItem] = useState(Filter);
  const [activeCategory, setActiveCategory] = useState("All");
  // useEffect(() => {

  //   const newData = [...item]
  //   setItem(newData.concat(item));
  // }, []);

  const getItem = (cat) => {
    var updatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(updatedValue);
    // setFilteredIndex(0); // Reset the index
  };

  return (
    <>
      <section>
        {/* Header */}
        <Helmet>
          <title>Our Resources | Honest Digital Services </title>
          <GoogleTagManager />
          <meta
            name="description"
            content="Our resources by the team of The Honest Company in the process of executing our projects for the digital product developments."
          />

          <meta name="keywords" content=""></meta>
          <meta name="author" content="Karthik Nath"></meta>
        </Helmet>
        <InnerHeader />
        {/* <ResourceListingMob /> */}
        {/* mian content */}
        <section className="container main-container">
          <div className="resource__page">
            <ul className="breadcrumb-navigation pt-7">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Resources</li>
            </ul>
            <div className="py-4">
              <div className="row">
                <div className="col-12 col-md-7">
                  <div className="top-heading">Honest Resources</div>
                  <div className="top-sub-heading py-4">
                    Resources created by our team, covering past projects,
                    industry trends, and latest in the field of digital
                    transformation.
                  </div>
                </div>
                <div className="col-12 col-md-5 d-flex">
                  <div className="d-none d-md-flex ml-auto align-items-start">
                    <Lottie
                      animationData={loader}
                      autoplay
                      loop
                      className="w-75 d-flex ml-auto margin-top--50"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 mb-5">
              <div className="button-container filter__container">
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
                  Case Studies
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
                  Articles
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
                  White Papers
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
                  Infographics
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
                  Tutorials
                </div>
              </div>

              <div className="row custom-row mt-5 px-3 mobile-d-none">
                {item.map((data, index) => {
                  const { name, image, description, url, alt } = data;

                  // Check if the index is 1, 4, 7, 10, 13, etc.
                  const cardClass = index % 3 === 1 ? "odd-res" : "even-res";
                  const marginTopClass =
                    index === 0 || index === 1 || index === 2
                      ? ""
                      : "margin-resourse";

                  return (
                    <div
                      className={`col-md-4 col-12 no__padding ${cardClass} ${marginTopClass} mobile-d-none`}
                      key={index}
                    >
                      <div className="wrapper">
                        <div className="zoom-effect-container">
                          <div className="image__wrapper">
                            <Link to={url}>
                              <img
                                className="card-img-top"
                                src={image}
                                alt={alt}
                              />
                            </Link>
                          </div>
                          <div className="pb-4">
                            <div className="blog-heading">{name}</div>
                            <div className="blog-title">
                              {description}
                              <Link to={url} style={{ color: "black" }}>
                                <div className="pt-3 text-decoration-underline cursor-pointer">
                                  Read More
                                  <Lottie
                                    style={{
                                      marginLeft: "60px",
                                      marginTop: "-15px",
                                    }}
                                    animationData={Arrow}
                                    autoplay
                                    loop
                                    className="w-xs-100 w-md-12 ml-md-3 resourceArrow"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row desktop-d-none pt-5">
                {item.map((data, index) => (
                  <Link key={index} to={data.url}>
                    <div className="col-12 pb-2">
                      <img
                        className="w-100"
                        src={data.image}
                        title={data.name}
                        alt={data.alt}
                      />
                      <div className="">
                        <div className="blog-heading">{data.name}</div>
                        <div className="blog-title">{data.description}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white py-4">
            <div className="row py-5">
              <div className="col-12 col-md-7 col-lg-7">
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
    </>
  );
};

export default Resource;
