import React from "react";
import "./../App.css";
import Blogs from "./Blogs";
import CaseStudies1 from "./CaseStudies1";
import CaseStudies1Mobile from "./CaseStudies1Mobile";
import CaseStudies from "./CaseStudies";
import resourceGif from '../images/resource.gif';
import Lottie from "lottie-react";
import loader from "../images/ResourcesSectionLanding.json";

function Resource() {
  return (
    <section className="container py-md-5 pt-5">
      <div className="row border-bottom-bold py-4 d-flex align-items-center">
        <div className="col-10 col-md-6 col-lg-6 px-0">
          <div className="text-uppercase pl-xs-2">
            <h1 className="left-aligned section-heading-only">
              <span className="text-light-color text-light-space">OUR</span>{" "}
              RESOURCES
            </h1>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-6 d-flex ml-auto justify-content-end">
            <Lottie animationData={loader} autoplay loop className="w-xs-100 w-md-12"/>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-3 col-12"></div>
        <div className="col-md-9 col-12">
          <div className="custom-pl resource-heading">
            Our services have been divided into four categories based on the
            kind of work we have done in the past. From designing the interior.
          </div>
        </div>
      </div>      
      <CaseStudies1 /> {/* Desktop View only */}
      <CaseStudies1Mobile /> {/* Mobile View only */}
      {/* <Blogs /> */}
      {/* <CaseStudies /> */}
    </section>
  );
}

export default Resource;
