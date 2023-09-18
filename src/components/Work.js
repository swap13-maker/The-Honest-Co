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
import { Link } from "react-router-dom";

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
        <div class="gallery__item gallery__item--hor d-block">
          <img src={work1} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
        <div class="gallery__item d-block">
          <img src={work2} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
      </div>

      <div className="gallery pt-5">
        <div class="gallery__item gallery__item--lg2 d-block">
          <img src={work3} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
        <div class="gallery__item gallery__item--hor3 d-block pb-5">
          <img src={work4} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
        <div class="gallery__item gallery__item--hor3 d-block">
          <img src={work5} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
      </div>

      <div className="gallery pt-5">
        <div class="gallery__item gallery__item--hor d-block">
          <img src={work6} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
        <div class="gallery__item d-block">
          <img src={work7} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
      </div>

      <div className="gallery pt-5">
        <div class="gallery__item d-block">
          <img src={work8} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
        <div className="gallery__item gallery__item--hor2 d-block">
          <img src={work9} />
          <div className="work-heading">Architectural Drawing</div>
          <div className="work-subheading">
            D2C & E-commerce · Branding · UI Design · Marketing
          </div>
        </div>
      </div>

	  <div className="text-align-center pt-5">
	  	<Link to="/">
			<div className="work-redirect">
			View All of Our Work
			<svg
				width="30"
				height="16"
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
        </Link>
	  </div>
    </section>
  );
}

export default Work;
