import React, { useState } from "react";
import "./../App.css";
import "./../components/Portfolio/Portfolio.css";
import Filter from "./../components/Portfolio/Filter";
import Footer from "./../components/Footer";

const Portfolio = () => {
  const [item, setItem] = useState(Filter);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const getItem = (cat) => {
    var updatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(updatedValue);
  };

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
            <li className="current">Work</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="top-heading">
                  The Projects
                </div>
                <div className="top-sub-heading py-4">
                  Our services have been divided into four categories based on the kind of work we have done in the past.
                </div>
              </div>
              <div className="col-12 col-md-5 d-flex">
                <div className='d-flex mx-auto align-items-start'>video</div>
              </div>
            </div>
          </div>

          <div className="py-4">

            <div className="button-container py-5">
              <div
                className={`custom-button ${activeCategory === "All" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("All");
                  setItem(Filter);
                }}
              >
                All
              </div>
              <div
                className={`custom-button ${activeCategory === "tab1" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab1");
                  getItem("tab1");
                }}
              >
                D2C & E-Commerce
              </div>
              <div
                className={`custom-button ${activeCategory === "tab2" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab2");
                  getItem("tab2");
                }}
              >
                Banking & Finance
              </div>
              <div
                className={`custom-button ${activeCategory === "tab3" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab3");
                  getItem("tab3");
                }}
              >
                Healthcare Technology
              </div>
              <div
                className={`custom-button ${activeCategory === "tab4" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab4");
                  getItem("tab4");
                }}
              >
                Staffing & Recruitment
              </div>
              <div
                className={`custom-button ${activeCategory === "tab5" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab5");
                  getItem("tab5");
                }}
              >
                Educational Technology
              </div>
              <div
                className={`custom-button ${activeCategory === "tab6" ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory("tab6");
                  getItem("tab6");
                }}
              >
                Misc.
              </div>
            </div>




            <div className="row">
              {item.map((data, index) => {
                const { name, logo, category, image, description } = data;
                return (
                  <div className="col-md-6 col-12 py-3">
                    <div className="portfolio-card">
                      <img className="card-img-top" src={image} />
                      <div className="pb-5">
                        <div className="blog-heading">
                          Webshocker - Matjaz Valentar
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
                        <div className="blog-title w-75">
                          Our services have been divided into four categories based on
                          the kind of work we have done in the past spaces to creating
                          sustainable.
                        </div>
                        <img className="" src={logo} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>



      <section className="bg-white py-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="newsletter">
                Have an <span className="idea">idea</span>? <br />
                Turn it into <span className="idea">reality</span>!
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
};

export default Portfolio;
