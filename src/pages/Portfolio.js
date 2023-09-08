import React, { useState, useEffect } from "react";
import "./../App.css";
import "./../components/Portfolio/Portfolio.css";
import Filter from "./../components/Portfolio/Filter";
import Footer from "./../components/Footer";

const Portfolio = () => {
  const [item, setItem] = useState(Filter);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const getItem = (cat) => {
    var upadatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(upadatedValue);
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
          <div className="button-container">
            <div className={`custom-button ${activeButton === "breakfast" ? "active" : ""}`} onClick={() => getItem("breakfast")}>
              D2C & E-Commerce
            </div>
            <div className="custom-button" onClick={() => getItem("lunch")}>
              Banking & Finance
            </div>
            <div className="custom-button" onClick={() => getItem("dinner")}>
              Healthcare Technology
            </div>
            <div className="custom-button" onClick={() => getItem("dinner")}>
              Staffing & Recruitment
            </div>
            <div className="custom-button" onClick={() => getItem("dinner")}>
              Educational Technology
            </div>
            <div className="custom-button" onClick={() => getItem("dinner")}>
              Misc.
            </div>
            <div className="custom-button" onClick={() => setItem(Filter)}>
              All
            </div>
          </div>




            <div className="row">
              {item.map((data, index) => {
                const { name, price, category, image } = data;
                return (
                  <>
                    <div className="col-md-6 col-12 mx-auto py-3">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={image}
                          alt=""
                          style={{
                            height: "200px"
                          }}
                        />
                        <h2 className="text-info text-uppercase pt-2">{category}</h2>
                        <h4 className="text-secondary text-capitalize pt-2">
                          {name}
                        </h4>
                        <p className="text-success text-uppercase pt-2">{price}</p>
                      </div>
                    </div>
                  </>
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
              <div className="py-5">
                <button className="bg-dark text-uppercase text-white font-weight-300 button">
                  get started with us !
                </button>
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
