import React, { useEffect } from "react";
import "./../App.css";
import "./Counter.css";

function Counter() {

  return (
    <section className="container py-md-5 d-none d-md-block" id="counter">
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 z-index-2 bg-white"></div>
        <div className="col-12 col-md-11 col-lg-11">
          <div className="row z-index-1">
            <div className="col-lg-3 p-0 border counter-height align-items-end z-index-2 bg-white">
              <div className="counter-text">Clients served</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end">
              <div className="counter-number counter-number1">12+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end z-index-2 bg-white">
              <div className="counter-text">Projects Executed</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height align-items-end">
              <div className="counter-number counter-number2">65+</div>
            </div>

            <div className="col-lg-3 p-0 border counter-height">
              <div className="counter-number counter-number3">35+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height z-index-2 bg-white">
              <div className="counter-text">Year's Experience</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height">
              <div className="counter-number counter-number4">80+</div>
            </div>
            <div className="col-lg-3 p-0 border counter-height z-index-2 bg-white">
              <div className="counter-text">Community Strength</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
