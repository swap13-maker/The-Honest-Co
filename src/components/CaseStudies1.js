import React from "react";
import "./../App.css";
import "./Blogs.css";
import studies1 from "../images/Resources _01.jpg";
import studies2 from "../images/Resources_02.jpg";
import studies3 from "../images/Resources_03.jpg";
import studies4 from "../images/Resources_04.jpg";
import studies5 from "../images/Resources_05.jpg";
import studies6 from "../images/Resources_06.jpg";
import { Link } from "react-router-dom";

function CaseStudies1() {
  return (
    <section className="mobile-d-none">
      <div className="row py-5">
        <div className="col-md-3">
        <Link to="/resources">
          <div className="sidebar-btn-section sticky-top margin-top--3">
            <button className="bg-dark text-uppercase text-white font-weight-300 button">
            VIEW All ARTICLES
            </button>
          </div></Link>
        </div>
        <div className="col-md-9">
          <div className="main-content">
            <div className="row case-card">
            
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
             
                <div className="case-thumbnail-wrapper">
                  <div className="case-thumbnail">
                  <img className="w-100" src={studies1} title="" alt="" />
                  </div>
                </div>
               
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/global-commerce-remittance-mobile-applications-business-expansion">
                  <div className="blog-heading">
                    Global Money Remittance
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
                  </Link>
                  <div className="blog-title">
                    Unlock global transactions with our mobile app development
                    explore the role of remittance applications in business
                    expansion. Our solutions revolutionize cross-border
                    transactions, paving the way for secure and efficient
                    engagement with the global market.
                  </div>
                </div>
              </div>
            </div>

            <div className="row case-card">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/artificial-intelligence-machine-learning-crypto-trading-bot">
                  <div className="blog-heading">
                    AI Based Disease Detection
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
                  </Link>
                  <div className="blog-title">
                    Transform agriculture with AI and ML. Dive into sustainable
                    farming with our solutions. Detect plant diseases early,
                    optimizing crop health and ensuring a prosperous harvest.
                    Explore the profound impact of technology on agriculture
                    with The Honest Co.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
                <div className="case-card case-thumbnail-wrapper even">
                  <div className="case-thumbnail">
                    <img
                      className="w-100"
                      src={studies2}
                      title=""
                      alt="mobile application detecting diseases"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row case-card">
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
                <div className="case-thumbnail-wrapper">
                  <div className="case-thumbnail">
                    <img
                      className="w-100"
                      src={studies3}
                      title=""
                      alt="creating an online business via ecommerce store "
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/simplifying-ecommerce-store-creation-low-code-platforms">
                  <div className="blog-heading">
                    Low Code E-Commerce Store
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
                  </Link>
                  <div className="blog-title">
                    Revolutionize your digital presence with low-code platforms.
                    Simplify e-commerce store creation, enhancing customer
                    engagement on platforms like Wordpress & Shopify. Explore
                    efficient solutions, reshaping how businesses establish
                    their online footprint.
                  </div>
                </div>
              </div>
            </div>

            <div className="row case-card">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/modernizing-interview-scheduling-mobile-apps-enhancing-team-efficiency-applicant-experience">
                  <div className="blog-heading">
                    Interview Scheduling Apps
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
                  </Link>
                  <div className="blog-title">
                    Revamp interview scheduling through mobile platforms.
                    Elevate team efficiency, delivering an exceptional applicant
                    experience. Create a recruitment process seamlessly blending
                    technology, ensuring a fluid journey for employers and
                    applicants a like.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
                <div className="case-card case-thumbnail-wrapper even">
                  <div className="case-thumbnail">
                    <img
                      className="w-100"
                      src={studies4}
                      title=""
                      alt="efficient interview scheduling via Calendly like application "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row case-card">
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
                <div className="case-thumbnail-wrapper">
                  <div className="case-thumbnail">
                    <img
                      className="w-100"
                      src={studies5}
                      title=""
                      alt="create custom crm software for your business"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/custom-crm-development-ecommerce-industries-businesses">
                  <div className="blog-heading">
                    Create a Custom CRM Platform
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
                  </Link>
                  <div className="blog-title">
                    Amplify e-commerce efficiency through custom CRM
                    development. Explore tailored solutions for superior
                    customer relationship management, propelling business
                    growth. Step into a realm where customer interactions are
                    seamlessly handled, nurturing enduring relationships.
                  </div>
                </div>
              </div>
            </div>

            <div className="row case-card">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="">
                <Link to="/resources/articles/effective-route-planning-fleet-management-airiticifal-intelligence-models">
                  <div className="blog-heading">
                    AI Powered Fleet Management
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
                  </Link>
                  <div className="blog-title">
                    Elevate route planning and fleet management with artificial
                    intelligence. Optimize logistics for efficiency and
                    cost-effectiveness. Step into a transformative world where
                    technology reshapes how fleets navigate, ensuring optimal
                    routes and streamlined logistics.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 px-0 mx-0">
                <div className="case-card case-thumbnail-wrapper even">
                  <div className="case-thumbnail">
                    <img className="w-100" src={studies6} title="" alt="custom fleet management platform and softwares " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies1;
