import React from "react";
import "./../../App.css";
import "./Portfolio.css";
import demo1 from "../../images/demo1.jpg";
import demo2 from "../../images/demo2.png";
import demo3 from "../../images/demo3.png";
import demo4 from "../../images/demo4.png";
import demo5 from "../../images/demo5.png";

function Project1() {
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
            <li>
              <a href="">Portfolio</a>
            </li>
            <li className="current">Project 1</li>
          </ul>
          <div className="py-4">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="top-heading">Creative Project with the Ultimate AI-Powered Pattern.</div>
                </div>
                <div className="col-12 col-md-5">
                    <div>
                        <ul className="top-works">
                            <li>UI Redesign</li>
                            <li className="pt-4">Minimalistic Design</li>
                        </ul>
                    </div>
                </div>
                <div className="py-4">
                    <ul className="top-topics">
                        <li><a>Artificial Inteligance</a></li>
                        <li className="px-4"><a>Application Development</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <img src={demo1} alt="" className="w-100 my-4" />
        {/* section 1 */}
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-6 px-5">
                    <div className="proj-heading">
                        Scope
                        <hr className="w-50"/>
                    </div>
                    <div className="proj-content pb-4">
                        A single platform allowing users to send money and utilities payment via an online mobile application to enhance day to day transactions and better track bill payments and finances. 
                    </div>
                    <div className="proj-images">
                        <img src={demo2} alt="" className="w-100 pt-5" />
                        <img src={demo3} alt="" className="w-100 pt-5" />
                    </div>
                </div>
                <div className="col-12 col-md-6 px-5">
                    <div className="proj-heading">
                        Solution
                        <hr className="w-50"/>
                    </div>
                    <div className="proj-content pb-4">
                        Development of a cutting edge mobile based platform allowing user to semmlessly transfer money and effortlessly manage their finances ehancing the overall user experience and satisfaction.
                    </div>
                    <div className="proj-images">
                        <img src={demo4} alt="" className="w-100 pt-5" />
                        <img src={demo5} alt="" className="w-100 pt-5" />
                    </div>
                </div>
            </div>
        </section>
      </section>
    </section>
  );
}

export default Project1;
