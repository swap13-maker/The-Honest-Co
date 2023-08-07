import React from "react";
import "./../../App.css";
import "./Portfolio.css";
import demo2 from "../../images/demo2.png";
import demo3 from "../../images/demo3.png";
import demo4 from "../../images/demo4.png";
import demo5 from "../../images/demo5.png";
import demo6 from "../../images/demo6.png";
import demo7 from "../../images/demo7.png";
import demo8 from "../../images/demo8.png";
import demo9 from "../../images/demo9.png";
import demo10 from "../../images/demo10.png";
import Footer from "./../Footer";

function Project1() {
  return (
    <section>
      {/* Header */}
      <section className="header"></section>
      {/* mian content */}
      <section>
        <div className="container">
          <ul class="breadcrumb-navigation">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li className="current">Project 1</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="top-heading">
                  Creative Project with the Ultimate AI-Powered Pattern.
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div>
                  <ul className="top-works">
                    <li className="pt-4">UI Redesign</li>
                    <li className="pt-4">Minimalistic Design</li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li>
                    <a>Artificial Inteligance</a>
                  </li>
                  <li className="px-4">
                    <a>Application Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src={demo10} alt="" className="w-100 my-4" />
        {/* section 1 */}
        <section className="container">
          <div className="row py-5">
            <div className="col-12 col-md-6 px-5">
              <div className="proj-heading">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-80">
                A single platform allowing users to send money and utilities
                payment via an online mobile application to enhance day to day
                transactions and better track bill payments and finances.
              </div>
              <div className="proj-images">
                <img src={demo2} alt="" className="w-100 pt-5" />
                <img src={demo3} alt="" className="w-100 pt-5" />
              </div>
            </div>
            <div className="col-12 col-md-6 px-5">
              <div className="proj-heading">
                Solution
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4 w-80">
                Development of a cutting edge mobile based platform allowing
                user to semmlessly transfer money and effortlessly manage their
                finances ehancing the overall user experience and satisfaction.
              </div>
              <div className="proj-images">
                <img src={demo4} alt="" className="w-100 pt-5" />
                <img src={demo5} alt="" className="w-100 pt-5" />
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading d-flex align-items-center">
                One For All
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                A unique mobile application that allows users to pay almost all
                of their online bills. The platform allows the user to pay
                online via the multiple payment gateways and service channels.
                The application offers a one for all bills payment solutions
                allowing the user hassel free utility bills settelment.
              </div>
            </div>
            <div className="col-12">
              <img src={demo6} alt="" className="w-100 py-5" />
            </div>
          </div>
          {/* section2 */}
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div>
                We work with clients across a range of industries, helping them
                to succeed and thrive in today's competitive marketplace by
                providing. We work with clients across a range of industries.
                <br />
                <br />
                We work with industries, helping them to succeed and thrive.
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading d-flex align-items-center ml-auto">
                The Honest Edge
              </div>
            </div>
            <div className="col-12">
              <img src={demo7} alt="" className="w-100 py-5" />
            </div>
          </div>
          {/* section3 */}
          <div className="row py-5">
            <div className="col-12 text-align-center">
              <div className="proj-heading">The Best out of It</div>
              <div className="proj-sub-heading py-3">
                We work with clients across a range of industries, d solutions
                to help them
                <br />
                achieve their business goals
              </div>
            </div>
            <div className="col-12 d-flex">
              <img src={demo8} alt="" className="w-40 px-4 py-4" />
              <img src={demo9} alt="" className="w-100 px-4 py-4" />
            </div>
          </div>
        </section>
      </section>
      {/* section 3 */}
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="proj-heading">The Honest Edge</div>
            <hr />
          </div>
          <div className="col-12 col-md-5 py-4">
            <div className="w-75">
              We work with clients across a range of industries, helping them to
              succeed and thrive in today's competitive marketplace by
              providing.
            </div>
          </div>
          <div className="col-12 col-md-7 py-4">
            <div className="proj-link text-align-end">
              See our other work
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
          </div>
          <div className="col-12 d-flex">
            <img src={demo8} alt="" className="w-40 px-4 py-4" />
            <img src={demo9} alt="" className="w-100 px-4 py-4" />
          </div>
          <div className="col-12 text-align-center">
            <p className="px-5 py-3">
              We work with clients across a range of industries, helping them to
              succeed and thrive in today's competitive marketplace by
              providing.
            </p>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <img src={demo10} alt="" className="w-100" />
      {/* newsletter */}
      <section className="bg-white py-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="newsletter">
                Have an <span className="idea">idea</span>? <br />
                Turn it into <span className="idea">reality</span>!
              </div>
              <div className="py-5">
                <button className="bg-dark text-uppercase text-white font-weight-300 button">
                  get started with us !
                </button>
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex">
              <div className="d-flex mx-auto align-items-center">video</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Project1;
