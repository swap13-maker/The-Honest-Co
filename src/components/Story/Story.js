import React from "react";
import "../../App.css";
import "../Slider.css";
import "./story.css";
import Slider from "react-slick";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import IconArrow from "../../icons/IconArrow";
import storyGif from "../../images/story.gif";

function Story() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: true, // Add this line to enable arrows
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <section className="container pb-sm-0 pt-5 pb-md-5 mt-md-5 mt-0 story__container" id="Ourstory">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">
                <span className="text-light-color text-light-space">OUR</span>{" "}
                STORY
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0">
                It all began with a group of friends coming together to bring a
                shared vision to life. The Honest Company was formed to umbrella
                our common vision of delivering high-quality services and
                cultivating long-term relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="row slider-container w-100">
        <div className="col-md-2 col-12 slider-container-left d-none d-md-block">
          <img
            src={storyGif}
            className="card-icon story__left__icon"
            width="100"
            alt=""
          />
        </div>
        <div className="col-md-10 col-12 p-0">
          <Slider {...settings}>
            <div className="bg-white pt-1 w-440">
              <div className="py-4 story-icon">
                <img src={icon1} className="card-icon py-3" alt=""/>
              </div>
              <div className="bg-dark py-4 px-1">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    Our journey began by fostering a community of like-minded
                    individuals dedicated to transparency, integrity, and the
                    delivery of high-quality services.
                  </p>
                </div>
                <div className="mt-md-5 mt-4">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    initiation
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white w-440">
              <div className="py-4 story-icon">
                <img src={icon2} className="card-icon py-2" alt=""/>
              </div>
              <div className="bg-dark py-4 px-1">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    We envisioned setting up a service brand exceeding industry
                    expectations with focus on creating a comprehensive,
                    efficient solution hub for clients. 
                  </p>
                </div>
                <div className="mt-md-5 mt-4">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    ideation
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white w-440">
              <div className="py-4 story-icon">
                <img src={icon3} className="card-icon pt-3 pb-2" alt="" />
              </div>
              <div className="bg-dark py-4 px-1">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    The Honest Co. was established with the vision of delivering
                    top-notch services in field of application development,
                    content creation & industrial design.
                  </p>
                </div>
                <div className="mt-md-5 mt-4">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    built up
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white w-440">
              <div className="py-4 story-icon">
                <img src={icon4} className="card-icon" alt=""/>
              </div>
              <div className="bg-dark py-4 px-1">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    Presently operational in 3 cities, The Honest Co. has served
                    more than 40 clients and have successfully delivered more
                    than 70 projects.
                    
                  </p>
                </div>
                <div className="mt-md-5 mt-4">
                  <h3 className="text-uppercase text-white px-4 card-heading mob-pt-2">
                    present
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white w-440">
              <div className="py-4 story-icon last-icon">
                <img src={icon5} className="card-icon media-icon5" alt=""/>
              </div>
              <div className="bg-dark py-4 px-1">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    We aspire to globalize our community by collaborating with
                    the finest creators and deliver unparalleled services to
                    businesses worldwide.
                  </p>
                </div>
                <div className="mt-md-5 mt-4">
                  <h3 className="text-uppercase text-white px-4 card-heading mob-pt-2">
                    future
                  </h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

// Custom component for previous arrow
export const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="slick-arrow slick-prev" onClick={onClick} style={{ paddingTop: window.innerWidth <= 768 ? '100px' : 'auto' }}>
      <IconArrow />
    </div>
  );
};

// Custom component for next arrow
export const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="slick-arrow slick-next" onClick={onClick} style={{ paddingBottom: window.innerWidth <= 768 ? '100px' : 'auto' }}>
      <IconArrow />
    </div>
  );
};

export default Story;
