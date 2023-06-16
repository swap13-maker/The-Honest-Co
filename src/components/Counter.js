import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../App.css";
import "./Counter.css";

function Counter() {

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
    <section className="container py-md-5 d-none d-md-block" id="counter">
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 z-index-2 bg-white"></div>
        <div className="col-12 col-md-11 col-lg-11">
          <div className="row z-index-1">
            <div className="col-lg-3 p-0 border counter-height align-items-end z-index-2 bg-white" data-aos="fade-right">
              <div className="counter-text">Clients served</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end" data-aos="fade-right">
              <div className="counter-number counter-number1">8+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end z-index-2 bg-white" data-aos="fade-right">
              <div className="counter-text">Projects Executed</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end" data-aos="fade-right">
              <div className="counter-number counter-number2">25+</div>
            </div>

            <div className="col-lg-3 p-0 border counter-height" data-aos="fade-right">
              <div className="counter-number counter-number3">50+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height z-index-2 bg-white" data-aos="fade-right">
              <div className="counter-text">Year's Experience</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height" data-aos="fade-right">
              <div className="counter-number counter-number4">100+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height z-index-2 bg-white" data-aos="fade-right">
              <div className="counter-text">Community Strength</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
