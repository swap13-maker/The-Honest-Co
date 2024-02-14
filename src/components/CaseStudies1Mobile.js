import React from "react";
import "./../App.css";
import "./Blogs.css";
import studies1 from "../images/Resources/Resources _01.jpg";
import studies2 from "../images/Resources/Resources_02.jpg";
import studies3 from "../images/Resources/Resources_03.jpg";
import studies4 from "../images/Resources/Resources_04.jpg";
import studies5 from "../images/Resources/Resources_05.jpg";
import studies6 from "../images/Resources/Resources_06.jpg";
import Lottie from "lottie-react";
import Arrow from "../images/Arrow.json";
import { Link } from "react-router-dom";

function CaseStudies1() {
  return (
    <section className="desktop-d-none">
      <div className="row">
        <div className="col-12 pb-5 mb-5">
          <button className="bg-dark text-uppercase text-white font-weight-300 button">
           VIEW ALL RESOURCES
          </button>
        </div>
        <Link to="/resources/articles/global-commerce-remittance-mobile-applications-business-expansion">
          <div className="col-12 pb-2">
            <img className="w-100" src={studies1} title="" alt="" />
            <div className="">
              <div className="blog-heading">
                Global Money Remittance
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "238px", marginTop: "-28px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Unlock global transactions with our mobile app development
                explore the role of remittance applications in business
                expansion. Our solutions revolutionize cross-border
                transactions, paving the way for secure and efficient engagement
                with the global market
              </div>
            </div>
          </div>
        </Link>
        <Link to="/resources/articles/artificial-intelligence-machine-learning-crypto-trading-bot">
          <div className="col-12 pb-2">
            <img className="w-100" src={studies2} title="" alt="" />
            <div className="">
              <div className="blog-heading">
                AI Based Disease Detection
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "245px", marginTop: "-27px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Transform agriculture with AI and ML. Dive into sustainable
                farming with our solutions. Detect plant diseases early,
                optimizing crop health and ensuring a prosperous harvest.
                Explore the profound impact of technology on agriculture with
                The Honest Co.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/resources/articles/simplifying-ecommerce-store-creation-low-code-platforms">
          <div className="col-12 pb-2">
            <img
              className="w-100"
              src={studies3}
              title=""
              alt="creating an online business via ecommerce store"
            />
            <div className="">
              <div className="blog-heading">
                Low Code E-Commerce Store
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "255px", marginTop: "-28px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Revolutionize your digital presence with low-code platforms.
                Simplify e-commerce store creation, enhancing customer
                engagement on platforms like Wordpress & Shopify. Explore
                efficient solutions, reshaping how businesses establish their
                online footprint.
              </div>
            </div>
          </div>
        </Link>

        <Link to="/resources/articles/modernizing-interview-scheduling-mobile-apps-enhancing-team-efficiency-applicant-experience">
          <div className="col-12 pb-2">
            <img
              className="w-100"
              src={studies4}
              title=""
              alt="efficient interview scheduling via Calendly like application "
            />
            <div className="">
              <div className="blog-heading">
                Interview Scheduling Apps
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "247px", marginTop: "-27px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Revamp interview scheduling through mobile platforms. Elevate
                team efficiency, delivering an exceptional applicant experience.
                Create a recruitment process seamlessly blending technology,
                ensuring a fluid journey for employers and applicants a like.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/resources/articles/custom-crm-development-ecommerce-industries-businesses">
          <div className="col-12 pb-2">
            <img
              className="w-100"
              src={studies5}
              title=""
              alt="create custom crm software for your business"
            />
            <div className="">
              <div className="blog-heading">
                Create a Custom CRM Platform
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "280px", marginTop: "-27px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Amplify e-commerce efficiency through custom CRM development.
                Explore tailored solutions for superior customer relationship
                management, propelling business growth. Step into a realm where
                customer interactions are seamlessly handled, nurturing enduring
                relationships.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/resources/articles/effective-route-planning-fleet-management-airiticifal-intelligence-models">
          <div className="col-12 pb-2">
            <img
              className="w-100"
              src={studies6}
              title=""
              alt="custom fleet management platform and softwares "
            />
            <div className="">
              <div className="blog-heading">
                AI Powered Fleet Management
                {/* <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "275px", marginTop: "-27px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 mobileArrow"
                  />
                </div> */}
              </div>
              <div className="blog-title">
                Elevate route planning and fleet management with artificial
                intelligence. Optimize logistics for efficiency and
                cost-effectiveness. Step into a transformative world where
                technology reshapes how fleets navigate, ensuring optimal routes
                and streamlined logistics.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default CaseStudies1;
