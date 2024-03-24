import React from "react";
import "./../App.css";
import "./Blogs.css";
import blog1 from "../images/Blog/blog1.jpg";
import blog2 from "../images/Blog/blog2.jpg";
import blog3 from "../images/Blog/blog3.jpg";
import blog4 from "../images/Blog/blog4.jpg";
import blog5 from "../images/Blog/blog5.jpg";
import { Link } from "react-router-dom";
import GoogleTagManager from "../GoogleTagManager";

function Blogs() {
  return (
    <section className="row py-5">
       <GoogleTagManager />
      <div className="col-md-3">
      <Link to="/resources">
        <div className="sidebar-btn-section sidebar-btn-section--2 sticky-top">
          <button className="bg-dark text-uppercase text-white font-weight-300 resource-button">
            VIEW All ARTICLES
          </button>
        </div>
        </Link>
      </div>
      <div className="col-md-9">
        <div className="main-content blogs__container">
          <div className="row py-5">
            <div className="col-md-6 ">
              <div className="d-none d-md-block"></div>
              <div className="blog__card__wrapper odd">
                <div className="blog-card px-4 pt-4">
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
                  <div className="blog-thumbnail">
                    <img className="w-100" src={blog1} title="" alt="" />
                  </div>
                </div>
              </div>
              <div className="blog__card__wrapper odd">
                <div className="blog-card px-4 pt-4">
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
                  <div className="blog-thumbnail">
                    <img className="w-100" src={blog2} title="" alt="" />
                  </div>
                </div>
              </div>

              <div className="blog__card__wrapper odd">
                <div className="blog-card px-4 pt-4">
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
                  <div className="blog-thumbnail">
                    <img className="w-100" src={blog3} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-5 pt-5">
              <div className="blog__card__wrapper even">
                <div className="blog_left px-4 pt-4">
                  <div className="blog-heading">
                    Find your Fashion1
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
                  <div className="blog-thumbnail">
                    <img className="w-100" src={blog4} title="" alt="" />
                  </div>
                </div>
              </div>
              <div className="blog__card__wrapper even">
                {" "}
                <div className="blog_left px-4 pt-4">
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
                  <div className="blog-thumbnail">
                    <img className="w-100" src={blog5} title="" alt="" />
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

export default Blogs;
