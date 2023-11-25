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

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item, setItem] = useState(Filter);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPortfolioAniHidden, setIsPortfolioAniHidden] = useState(false);
  const [filteredIndex, setFilteredIndex] = useState(0);

  const togglePortfolioAni = () => {
    setIsPortfolioAniHidden(!isPortfolioAniHidden);
  };

  const getItem = (cat) => {
    var updatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(updatedValue);
    setFilteredIndex(0); // Reset the index
  };

  return (
    <section>
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
                <div className="top-heading d-none d-md-block" onClick={togglePortfolioAni}>
                  The{" "}
                  <span
                    className={`portfolio-ani ${
                      isPortfolioAniHidden ? "portfolio-ani-hidden" : ""
                    }`}
                  >
                    honest
                  </span>{" "}
                  Projects
                </div>

                <div className="top-heading d-block d-md-none" onClick={togglePortfolioAni}>
                  The
                  <span
                    className={`portfolio-ani ${
                      isPortfolioAniHidden ? "portfolio-ani-hidden" : ""
                    }`}
                  >
                    honest
                  </span><br/>
                  Projects
                </div>
                {/* <div className="top-heading">The <span className="portfolio-ani">honest</span> Projects</div> */}
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
            {/* <div
              className={`custom-remove-button mb-5`}
              onClick={() => {
                setActiveCategory("All");
                setItem(Filter);
              }}
            >
              Remove Filter
            </div> */}

            <div className="row custom-row mt-5 px-3">
              {item.map((data, index) => {
                const { name, logo, image, description,alt,url } = data;
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
                <a
                  href=""
                  className="m-0 font-size-15 text-decoration-underline"
                >
                  Start your dream project with us
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Portfolio;
