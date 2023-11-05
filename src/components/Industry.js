import React, { useEffect } from "react";
import indistry1 from "../images/indistry1.jpg";
import indistry2 from "../images/indistry2.jpg";
import indistry3 from "../images/indistry3.jpg";
import indistry4 from "../images/indistry4.jpg";
import indistry5 from "../images/indistry5.jpg";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Industries() {

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
    <section className="py-md-5 mb-5 bg-white">
      <div className="container" >
        <div className="row py-5">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">Industries</h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0 font-size-15">
                We work with clients across a range of industries, helping them
                to succeed and thrive in today's competitive marketplace by
                providing customised solutions to help them achieve their
                business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-custom-2 odd-section"  data-aos-duration="800">
            <div className="industry-card">
              <img className="indistryImage" src={indistry1} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">D2C & ECommerce</div>
              <div className="indistry-content">
                Helping businesses launch and scale their online stores Creating
                compelling branding and messaging to drive sales Developing
                customised e-commerce solutions to enhance user experience.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 even-section"  data-aos-duration="1000">
            <div className="industry-card">
              <img className="indistryImage" src={indistry2} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">Banking & Finance</div>
              <div className="indistry-content">
                <p className="m-0">
                  Designing beautiful and functional living spaces Creating
                  innovative home automation solutions Developing virtual
                  reality home tours and other digital marketing tools
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 odd-section"  data-aos-duration="1200">
            <div className="industry-card">
              <img className="indistryImage" src={indistry3} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Healthcare Technology
              </div>
              <div className="indistry-content">
                Our services have been divided into four categories based on the
                kind of work we have done in the past. From designing the
                interior of commercial spaces to creating sustainable packaging.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 even-section"  data-aos-duration="1400">
            <div className="industry-card">
              <img className="indistryImage" src={indistry4} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
              Services & Property Technology
              </div>
              <div className="indistry-content">
                Designing beautiful and functional living spaces Creating
                innovative home automation solutions Developing virtual reality
                home tours and other digital marketing tools
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 odd-section"  data-aos-duration="1600">
            <div className="industry-card">
              <img className="indistryImage" src={indistry5} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Educational Technology
              </div>
              <div className="indistry-content">
                Developing e-learning platforms for schools and universities
                Creating custom educational software to improve student outcomes
                Providing data-driven insights to optimise educational processes
                and outcomes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
