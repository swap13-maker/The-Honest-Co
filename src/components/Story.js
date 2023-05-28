import React from "react";
import "./../App.css";
import "./Slider.css";
import Slider from "react-slick";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Story() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false, // Add this line to enable arrows
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section className="container py-5">
      <div className="row">
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
              It all began with a group of friends coming together to execute a
              project. The Honest Co. was formed to umbrella our common vision
              of providing high-quality services and building long-term
              relationships with our clients.
            </p>
          </div>
        </div>

        {/* Slider start*/}
        <div className="row">
          <div className="col-md-3 col-12"></div>
          <div className="col-md-9 col-12">
            <Slider {...settings}>
              <div className="bg-white" style={{ width: 400 }}>
                <div className="py-3">
                  icon1
                </div>
                <div className="bg-dark py-4 px-3">
                  <div className="px-4 py-4">
                    <p className="text-white card-text">
                      Our experiences and projects we have worked with have
                      shaped the way we look at the world now. As it does in
                      usual with us too, all began with an idea.
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-uppercase text-white px-4 card-heading">
                      initiation
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white" style={{ width: 400 }}>
                <div className="py-3">icon</div>
                <div className="bg-dark py-4 px-3">
                  <div className="px-4 py-4">
                    <p className="text-white card-text">
                      At The Honest Company, we believe in the power of
                      technology and creativity to transform businesses and
                      impact lives. <br/><br/>
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-uppercase text-white px-4 card-heading">ideation</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white" style={{ width: 400 }}>
                <div className="py-3">icon</div>
                <div className="bg-dark py-4 px-3">
                  <div className="px-4 py-4">
                    <p className="text-white card-text">
                      At The Honest Company, we believe in the power of
                      technology and creativity to transform businesses and
                      impact lives. <br/><br/>
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-uppercase text-white px-4 card-heading">
                      buildt up
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white" style={{ width: 400 }}>
                <div className="py-3">icon</div>
                <div className="bg-dark py-4 px-3">
                  <div className="px-4 py-4">
                    <p className="text-white card-text">
                      At The Honest Company, we believe in the power of
                      technology and creativity to transform businesses and
                      impact lives. <br/><br/>
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-uppercase text-white px-4 card-heading">present</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Slider ends */}
      </div>
    </section>
  );
}

// Custom component for previous arrow
const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </div>
  );
};

// Custom component for next arrow
const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      Next
    </div>
  );
};

export default Story;
