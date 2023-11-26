import React from "react";
import "./../App.css";
import "./Blogs.css";
import case1 from "../images/case1.png";
import case2 from "../images/case2.png";
import { Link } from "react-router-dom";

function CaseStudies() {
  return (
    <section className="row py-5">
      <div className="col-md-3 col-12">
      <Link to="/resources">
        <div className="sidebar-btn-section sidebar-btn-section--3 sticky-top">
          <button className="bg-dark text-uppercase text-white font-weight-300 button">
            VIEW All ARTICLES
          </button>
        </div>
        </Link>
      </div>
      <div className="col-md-9 col-12">
        <div className="main-content">
          <div className="row case-card">
            <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
              <div className="case-thumbnail-wrapper">
                <div className="case-thumbnail">
                  <img className="w-100" src={case1} title="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="">
                <div className="blog-heading">
                  Find your Fashion
                  <svg
                    width="20"
                    height="14"
                    viewBox="-10 0 25 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-svg"
                  >
                    <path
                      id="Vector"
                      d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="blog-title">
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past spaces to creating
                  sustainable.
                </div>
              </div>
            </div>
          </div>

          <div className="row case-card">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="">
                <div className="blog-heading">
                  Find your Fashion
                  <svg
                    width="20"
                    height="14"
                    viewBox="-10 0 25 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-svg"
                  >
                    <path
                      id="Vector"
                      d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="blog-title">
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past spaces to creating
                  sustainable.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
              <div className="case-card case-thumbnail-wrapper even">
                <div className="case-thumbnail">
                  <img className="w-100" src={case2} title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
