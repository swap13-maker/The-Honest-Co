import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "../Slider.css";
import "./story.css";
import Slider from "react-slick";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import IconArrow from "../../icons/IconArrow";

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

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position to trigger the animation
      easing: "ease-in-out", // Animation easing (CSS transition-timing-function)
      delay: 0, // Delay (in milliseconds) before the animation starts
      once: true, // Whether the animation should occur only once or every time the element is scrolled into view
      mirror: false, // Whether elements with the same data-aos value should animate individually or together
    });
  }, []);

  return (
    <>
      <section className="container pt-5 pb-5 story__container">
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 class="left-aligned section-heading">
                <span className="text-light-color text-light-space">OUR</span>{" "}
                STORY
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p class="m-0">
                It all began with a group of friends coming together to execute
                a project. The Honest Co. was formed to umbrella our common
                vision of providing high-quality services and building long-term
                relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="row slider-container w-100">
        <div className="col-md-2 col-12 slider-container-left">
          <img src={icon1} className="card-icon story__left__icon" />
        </div>
        <div
          className="col-md-10 col-12 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Slider {...settings}>
            <div
              className="bg-white"
              style={{ width: 440 }}
              data-aos="fade-left"
            >
              <div className="py-4 story-icon">
                <img src={icon1} className="card-icon" />
              </div>
              <div className="bg-dark py-4 px-3">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    Our experiences and projects we have worked with have shaped
                    the way we look at the world now. As it does in usual with
                    us too, all began with an idea.
                  </p>
                </div>
                <div className="mt-5">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    initiation
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="bg-white"
              style={{ width: 440 }}
              data-aos="fade-left"
            >
              <div className="py-4 story-icon">
                <img src={icon1} className="card-icon" />
              </div>
              <div className="bg-dark py-4 px-3">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    At The Honest Company, we believe in the power of technology
                    and creativity to transform businesses and impact lives. 
                    <br />
                    <br />
                  </p>
                </div>
                <div className="mt-5">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    ideation
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="bg-white"
              style={{ width: 440 }}
              data-aos="fade-left"
            >
              <div className="py-4 story-icon">
                <img src={icon1} className="card-icon" />
              </div>
              <div className="bg-dark py-4 px-3">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    At The Honest Company, we believe in the power of technology
                    and creativity to transform businesses and impact lives. 
                    <br />
                    <br />
                  </p>
                </div>
                <div className="mt-5">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    buildt up
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="bg-white"
              style={{ width: 440 }}
              data-aos="fade-left"
            >
              <div className="py-4 story-icon last-icon">
                <img src={icon1} className="card-icon" />
              </div>
              <div className="bg-dark py-4 px-3">
                <div className="px-4 py-4">
                  <p className="text-white card-text">
                    At The Honest Company, we believe in the power of technology
                    and creativity to transform businesses and impact lives. 
                    <br />
                    <br />
                  </p>
                </div>
                <div className="mt-5">
                  <h3 className="text-uppercase text-white px-4 card-heading">
                    present
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
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <IconArrow />
    </div>
  );
};

// Custom component for next arrow
export const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <IconArrow />
    </div>
  );
};

export default Story;
