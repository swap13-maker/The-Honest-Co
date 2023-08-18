import React from "react";
import "./../App.css";
import Blogs from "./Blogs";
import CaseStudies1 from "./CaseStudies1";
import CaseStudies from "./CaseStudies";
import resourceGif from '../images/resource.gif';

function Resource() {
  return (
    <section className="container py-5">
      <div className="row border-bottom-bold pb-4 d-flex align-items-center">
        <div className="col-10 col-md-6 col-lg-6 px-0">
          <div className="text-uppercase">
            <h1>
              <span className="text-light-color text-light-space">OUR</span>{" "}
              RESOURCES
            </h1>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-6 d-flex align-items-center justify-content-end">
          <div><img src={resourceGif} alt="Resource GIF" width="120px" /></div>
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
      <CaseStudies1 />
      <Blogs />
      <CaseStudies />
    </section>
  );
}

export default Resource;
