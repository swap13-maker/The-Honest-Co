import React from "react";
import "./../App.css";
import studies1 from "../images/studies1.jpg";
import resourceGif from '../images/resource.gif';

function Resource() {
  return (
    <section className="container py-5">
      <div className="row border-bottom-bold pb-4">
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
        <div className="col-md-3 col-12">
          <div className="sidebar-btn-section sticky-top">
            <button className="bg-dark text-uppercase text-white font-weight-300 button">
              VIEW ALL CASE STUDIES
            </button>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="custom-pl resource-heading">
            Our services have been divided into four categories based on the
            kind of work we have done in the past. From designing the interior.
          </div>
          <div className="main-content pt-5">
            {/* row 1 */}
            <div className="row resource-hover">
              <div className="col-md-6 resource-image border">
                <img className="w-100" src={studies1} alt="Studies 1" />
              </div>
              <div className="col-md-6">
                <div className="px-4">
                  <div className="indistryHeading text-uppercase py-4">
                    Webshocker - Matjaz Valentar
                  </div>
                  <div className="resource-desc">
                    Our services have been divided into four categories based on
                    the kind of work we have done in the past.
                    <br />
                    <br />
                    From designing the interior of commercial spaces to creating
                    sustainable packaging solutions.
                  </div>
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="row resource-hover">
              <div className="col-md-6">
                <div className="px-4">
                  <div className="indistryHeading text-uppercase py-4">
                    Webshocker - Matjaz Valentar
                  </div>
                  <div className="resource-desc">
                    Our services have been divided into four categories based on
                    the kind of work we have done in the past.
                    <br />
                    <br />
                    From designing the interior of commercial spaces to creating
                    sustainable packaging solutions.
                  </div>
                </div>
              </div>
              <div className="col-md-6 resource-image border">
                <img className="w-100" src={studies1} alt="Studies 1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-5 d-none">
        <div className="col-md-3">
          <div className="sidebar-btn-section sticky-top">
            <button className="bg-dark text-uppercase text-white font-weight-300 button">
              VIEW All BLOGS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="custom-pl" align="right">
            Our services have been divided into four categories based on the
            kind of work we have done in the past. From designing the interior.
          </div>
          <div className="main-content">
            <div className="row py-5">
              <div className="col-12 col-md-6 border">
                <img className="w-100 p-3" src={studies1} alt="Studies 1" />
              </div>
              <div className="col-12 col-md-6 border py-5">
                <div className="indistryHeading text-uppercase py-4">
                  Webshocker - Matjaz Valentar
                </div>
                <div>
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past.
                  <br />
                  <br />
                  From designing the interior of commercial spaces to creating
                  sustainable packaging solutions.
                </div>
              </div>

              <div className="col-12 col-md-6 border py-5">
                <div className="indistryHeading text-uppercase py-4">
                  Webshocker - Matjaz Valentar
                </div>
                <div>
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past.
                  <br />
                  <br />
                  From designing the interior of commercial spaces to creating
                  sustainable packaging solutions.
                </div>
              </div>
              <div className="col-12 col-md-6 border">
                <img className="w-100 p-3" src={studies1} alt="Studies 1" />
              </div>

              <div className="col-12 col-md-6 border">
                <img className="w-100 p-3" src={studies1} alt="Studies 1" />
              </div>
              <div className="col-12 col-md-6 border py-5">
                <div className="indistryHeading text-uppercase py-4">
                  Webshocker - Matjaz Valentar
                </div>
                <div>
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past.
                  <br />
                  <br />
                  From designing the interior of commercial spaces to creating
                  sustainable packaging solutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resource;
