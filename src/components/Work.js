import React from "react";
import "./../App.css";
import work1 from "../images/OurWork/OurWork_IFC.jpg";
import mobwork1 from "../images/OurWork/mobOurWork_IFC.png";
import webwork2 from "../images/OurWork/webOurWork_2.jpg";
import mobwork2 from "../images/OurWork/mobOurWork_2.jpg";
import webwork3 from "../images/OurWork/webOurWork_3.jpg";
import mobmork3 from "../images/OurWork/mobOurWork_3.jpg";
import webwork4 from "../images/OurWork/webOurWork_4.jpg";
import mobwork4 from "../images/OurWork/moobOurWork_4.jpg";
import webwork5 from "../images/OurWork/webOurWork_5.jpg";
import mobwork5 from "../images/OurWork/mobOurWork_5.png";
import webwork6 from "../images/OurWork/webOurWork_Giftly6.jpg";
import mobwork6 from "../images/OurWork/mobOurWork_Giftly6.png";
import webwork8 from "../images/OurWork/webOurWork_8.jpg";
import mobwork8 from "../images/OurWork/mobOurWork_8.png";
import webwork9 from "../images/OurWork/webOurWork_9.jpg";
import mobwork9 from "../images/OurWork/mobOurWork_9.png";
import { Link } from "react-router-dom";
import work7 from "../images/Portfolio/Portfolio/Portfoliolisting/Frame 8.webp";

import Lottie from "lottie-react";
import Arrow from "../images/Arrow.json";

function Work() {
  return (
    <section className="container overflow-x-hidden pt-5">
      <div className="row">
        <div className="col-12 mx-auto text-center">
          <h1 className="text-uppercase d-block section-heading">
            <span className="text-light-color text-light-space">OUR</span> WORK
          </h1>
        </div>
      </div>

      {/* Desktop mode */}
      <div className="gallery pb-md-5 pb-5 mobile-d-none">
        <Link
          to="/portfolio/online-d2c-ecommerce-store"
          className="gallery__item gallery__item--hor media-w-100 d-block"
        >
          <img src={work1} alt={"mobile app for d2c businesses "} />
          <div className="work-heading">Online D2C E-Commerce Store</div>
          <div className="work-subheading">
            D2C & E-Commerce · Mobile Apps · Online Store · Swift Order Tracking
          </div>
        </Link>
        <Link
          to="/portfolio/p2p-money-remittance-mobile-application"
          className="gallery__item media-w-100 d-block"
        >
          <img src={webwork2} alt="peer to peer money remittance app" />
          <Link to="/portfolio/p2p-money-remittance-mobile-application">
            <div className="work-heading">
              P2P Money Remittance Mobile Application{" "}
            </div>
            <div className="work-subheading">
              Banking & Finance · Mobile Apps · P2P Payments
            </div>
          </Link>
        </Link>
      </div>
      <div className="gallery pb-md-5 pb-5 mobile-d-none">
        <Link
          to="/portfolio/cab-hailing-travel-itinerary-platform"
          className="gallery__item gallery__item--lg2 media-w-100 d-block"
        >
          <img
            src={webwork3}
            alt="Travel and itinerary app with cab booking "
          />
          <Link to="/portfolio/cab-hailing-travel-itinerary-platform">
            <div className="work-heading">Travel & Cab Hailing Platform </div>
            <div className="work-subheading">
              Travel & Hospitality · Custom Softwares · Cab Hailing Platform
            </div>
          </Link>
        </Link>
        <Link
          to="/portfolio/location-sharing-sos-notifications-mobile-app"
          className="gallery__item gallery__item--hor3 media-w-100 d-block"
        >
          <img
            src={webwork4}
            alt="location sharing and tracking with SOS calls"
          />
          <Link to="/portfolio/location-sharing-sos-notifications-mobile-app">
            <div className="work-heading">
              SOS & Location Sharing Application{" "}
            </div>
            <div className="work-subheading">
              Location Sharing & Security · AI & ML · Live Tracking · SOS Mobile
              App
            </div>
          </Link>
        </Link>
        <Link
          to="/portfolio/pill-reminder-doctor-appointment-platform"
          className="gallery__item gallery__item--hor3 media-w-100 d-block"
        >
          <img
            src={webwork5}
            alt="medicine and appointment reminder mobile app "
          />
          <Link to="/portfolio/pill-reminder-doctor-appointment-platform">
            <div className="work-heading">
              Pill and Appointment Reminder Mobile App
            </div>
            <div className="work-subheading">
              Healthcare Technology · Custom Softwares · Medicine Reminder ·
              Personalized Notifications
            </div>
          </Link>
        </Link>
      </div>
      <div className="gallery pb-md-5 pb-5 mobile-d-none">
        <Link
          to="/portfolio/photo-sharing-online-ecommerce-platform"
          className="gallery__item gallery__item--hor media-w-100 d-block"
        >
          <img src={webwork6} alt="image sharing and kids ecommerce app " />
          <Link to="/portfolio/photo-sharing-online-ecommerce-platform">
            <div className="work-heading">
              Online Photo Sharing with E-Commerce{" "}
            </div>
            <div className="work-subheading">
              D2C & E-Commerce · Custom Softwares · Image Sharing · Payment
              Gateways
            </div>
          </Link>
        </Link>
        <Link to="portfolio/interview-scheduling-job-tracking-app" className="gallery__item media-w-100 d-block">
          <img src={work7} alt="" />
          <Link >
            <div className="work-heading">Interview Scheduling & Job Tracking App</div>
            <div className="work-subheading">
            Staffing and Recruitment · Custom Softwares · Job Search
            </div>
          </Link>
        </Link>
      </div>
      {/* <div className="gallery pb-md-5 pb-5 mobile-d-none">
        <Link
          to="/portfolio/interview-scheduling-job-tracking-app"
          className="gallery__item media-w-100 d-block"
        >
          <img
            src={webwork8}
            alt="interview scheduling and job tracking mobile app"
          />
          <Link to="/portfolio/interview-scheduling-job-tracking-app">
            <div className="work-heading">
              Interview Scheduling & Job Tracking App
            </div>
            <div className="work-subheading">
              Staffing and Recruitment · Custom Softwares · Job Search Portal
            </div>
          </Link>
        </Link>
        <Link
          to="/portfolio/custom-school-learning-management-platform"
          className="gallery__item gallery__item--hor2 media-w-100 d-block"
        >
          <img src={webwork9} alt="custom LMS softwares for schools" />
          <Link to="/portfolio/custom-school-learning-management-platform">
            <div className="work-heading">Custom School Learning Platform </div>
            <div className="work-subheading">
              Educational Technology · AI & ML · Adaptive Modules · Accounting
              and Reporting
            </div>
          </Link>
        </Link>
      </div> */}
      {/* Mobile mode */}
      <div className="desktop-d-none">
        <div className="pb-5">
          <Link to="/portfolio/online-d2c-ecommerce-store">
            <img
              src={mobwork1}
              className="w-100"
              alt="mobile app for d2c businesses"
            />
            <div className="work-heading">Online D2C E-Commerce Store</div>
          </Link>
          <div className="work-subheading">
            D2C & E-Commerce · Mobile Apps · Online Store · Swift Order Tracking
          </div>
        </div>
        <div className="pb-5">
          <Link to="/portfolio/p2p-money-remittance-mobile-application">
            <img
              src={mobwork2}
              className="w-100"
              alt="peer to peer money remittance app "
            />
            <div className="work-heading">
              P2P Money Remittance Mobile Application{" "}
            </div>
            <div className="work-subheading">
              Banking & Finance · Mobile Apps · P2P Payments
            </div>
          </Link>
        </div>
        <div className="pb-5">
          <Link to="/portfolio/cab-hailing-travel-itinerary-platform">
            <img
              src={mobmork3}
              className="w-100"
              alt="Travel and itinerary app with cab booking"
            />
            <div className="work-heading">Travel & Cab Hailing Platform </div>
            <div className="work-subheading">
              Travel & Hospitality · Custom Softwares · Cab Hailing Platform
            </div>
          </Link>
        </div>
        <div className="pb-5">
          <Link to="/portfolio/location-sharing-sos-notifications-mobile-app">
            <img
              src={mobwork4}
              className="w-100"
              alt="location sharing and tracking with SOS calls "
            />
            <div className="work-heading">
              SOS & Location Sharing Application{" "}
            </div>
            <div className="work-subheading">
              Location Sharing & Security · AI & ML · Live Tracking · SOS Mobile
              App
            </div>
          </Link>
        </div>
        <div className="pb-5">
          <Link to="/portfolio/pill-reminder-doctor-appointment-platform">
            {" "}
            <img
              src={mobwork5}
              className="w-100"
              alt="medicine and appointment reminder mobile app "
            />
            <div className="work-heading">
              Pill and Appointment Reminder Mobile App
            </div>
            <div className="work-subheading">
              Healthcare Technology · Custom Softwares · Medicine Reminder ·
              Personalized Notifications
            </div>
          </Link>
        </div>
        <div className="pb-5">
          <Link to="/portfolio/photo-sharing-online-ecommerce-platform">
            <img
              src={mobwork6}
              className="w-100"
              alt="image sharing and kids ecommerce app "
            />
            <div className="work-heading">
              Online Photo Sharing with E-Commerce{" "}
            </div>
            <div className="work-subheading">
              D2C & E-Commerce · Custom Softwares · Image Sharing · Payment
              Gateways
            </div>
          </Link>
        </div>
        <div className="pb-5">
          <Link>
            <img src={work7} className="w-100" />
            <div className="work-heading">Interview Scheduling & Job Tracking App</div>
          </Link>
          <div className="work-subheading">
          Staffing and Recruitment · Custom Softwares · Job Search
          </div>
        </div>
        {/* <div className="pb-5">
          <Link to="/portfolio/interview-scheduling-job-tracking-app">
            {" "}
            <img
              src={mobwork8}
              className="w-100"
              alt="interview scheduling and job tracking mobile app"
            />
            <div className="work-heading">
              Interview Scheduling & Job Tracking App
            </div>
            <div className="work-subheading">
              Staffing and Recruitment · Custom Softwares · Job Search Portal
            </div>
          </Link>
        </div> */}
        {/* <div className="pb-5">
          <Link to="/portfolio/custom-school-learning-management-platform">
            <img
              src={mobwork9}
              className="w-100"
              alt="custom LMS softwares for schools"
            />
            <div className="work-heading">Custom School Learning Platform</div>
            <div className="work-subheading">
              Educational Technology · AI & ML · Adaptive Modules · Accounting
              and Reporting
            </div>
          </Link>
        </div> */}
      </div>

      <div className="text-align-center py-md-1 py-4">
        <Link to="/portfolio">
          <div className="work-redirect">
            <div className="d-flex align-items-center justify-content-center ml-4">
              <span className="arrowlottie text-nowrap py-md-1 py-4">
                View Our Portfolio
              </span>
              <div
                className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                style={{ marginLeft: "5px" }}
              >
                <Lottie
                  animationData={Arrow}
                  autoplay
                  loop
                  className="w-xs-100 w-md-12 lottioArrow"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Work;
