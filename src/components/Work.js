import React from "react";
import "./../App.css";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";
import work5 from "../images/work5.png";
import work6 from "../images/work6.png";
import work7 from "../images/work7.png";
import work8 from "../images/work8.png";
import work9 from "../images/work9.png";

function Work() {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-12 mx-auto text-center">
          <h1 className="text-uppercase d-block section-heading">
            <span className="text-light-color text-light-space">OUR</span> WORK
          </h1>
        </div>
      </div>

      <div className="gallery">
        <div class="gallery__item gallery__item--hor">
          <img src={work1} />
        </div>
        <div class="gallery__item">
          <img src={work2} />
        </div>
      </div>

	  <div className="gallery">
        <div class="gallery__item gallery__item--lg2">
			<img src={work3} />
        </div>
        <div class="gallery__item gallery__item--hor3">
			<img src={work4} />
        </div>
        <div class="gallery__item gallery__item--hor3">
			<img src={work5} />
        </div>
	  </div>

	  <div className="gallery">
        <div class="gallery__item gallery__item--hor">
          <img src={work6} />
        </div>
        <div class="gallery__item">
          <img src={work7} />
        </div>
      </div>

	  <div className="gallery">
        <div class="gallery__item">
          <img src={work8} />
        </div>
        <div class="gallery__item gallery__item--hor2">
          <img src={work9} />
        </div>
      </div>
    </section>
  );
}

export default Work;
