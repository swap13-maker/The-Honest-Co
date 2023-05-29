import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./../App.css";
import "./Service.css";
import arrow from "../images/arrow.png";

function Services() {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <section className="container py-5 d-none">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-7 d-flex">
          <div className="sub-heading d-flex align-items-center">
            <p class="m-0">
              Whether it's developing a new software application, designing a
              product, or crafting compelling marketing content, we are
              committed to delivering exceptional results that exceed
              expectations.{" "}
              <span className="font-weight-300">HONEST EXPERIENCES!</span>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <div className="text-uppercase">
            <h1 class="right-aligned section-heading">Services</h1>
          </div>
        </div>
      </div>

      {/* test */}
      <div className="row">
        <div className="col-12">
          <MDBRow>
            <MDBCol size="5" className="py-5">
              <MDBTabs pills className="flex-column text-center">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab1")}
                    active={verticalActive === "tab1"}
                  >
                    <div className="d-flex align-items-center">
                      <img className="tab-icon" src={arrow} />
                      <span className="px-3">Architecture</span>
                    </div>
                    <div className="sub-heading-tab">
                      Robust and intuitive digital solutions that help you
                      connect with your customers.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab2")}
                    active={verticalActive === "tab2"}
                  >
                    <div className="d-flex align-items-center">
                      <img className="tab-icon" src={arrow} />
                      <span className="px-3">Industry Design</span>
                    </div>
                    <div className="sub-heading-tab">
                      From concept to production, we create beautiful and
                      functional products that resonate with your audience.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab3")}
                    active={verticalActive === "tab3"}
                  >
                    <div className="d-flex align-items-center">
                      <img className="tab-icon" src={arrow} />
                      <span className="px-3">Web & Mobile Development</span>
                    </div>
                    <div className="sub-heading-tab">
                      Our services have been divided into four categories based
                      on the kind of work we have done.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab4")}
                    active={verticalActive === "tab4"}
                  >
                    <div className="d-flex align-items-center">
                      <img className="tab-icon" src={arrow} />
                      <span className="px-3">Content & Adversiting</span>
                    </div>
                    <div className="sub-heading-tab">
                      Our services have been divided into four categories based
                      on the kind of work we have done.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBCol>
            <MDBCol size="7">
              <MDBTabsContent>
                {/*Tab 1*/}
                <MDBTabsPane show={verticalActive === "tab1"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab1-ele1">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">Interior Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab1-ele2">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Building Information Modeling
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele3">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Architectural Design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele4">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Feasibility Studies & Site Analysis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele5">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Renovation & Restoration
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBTabsPane>
                {/*Tab 2*/}
                <MDBTabsPane show={verticalActive === "tab2"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab2-ele1">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">product design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele2">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                concept development & prototyping
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele3">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                branding & identity design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele4">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                manufacturing support
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBTabsPane>
                {/*Tab 3*/}
                <MDBTabsPane show={verticalActive === "tab3"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab3-ele1">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Custom Software Development
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab3-ele2">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Mobile Application Development
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="tab3-ele3">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Ai & ML solutions
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="tab3-ele4">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                Web3 & Blockchain Application Development
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBTabsPane>
                {/*Tab 4*/}
                <MDBTabsPane show={verticalActive === "tab4"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab4-ele1">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">motion graphics</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele2">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                content creation
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele3">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">
                                branding & identity design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele4">
                        <div class="circle">
                          <div class="circle__inner">
                            <div class="circle__wrapper">
                              <div class="circle__content">advertisement</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      {/* test */}

      <div className="row py-5">
        <div className="col-12 col-md-5 col-lg-5">
          <button className="bg-dark text-uppercase text-white font-weight-300 button">
            GET STARTED WITH US !
          </button>
        </div>
        <div className="col-12 col-md-7 col-lg-7"></div>
      </div>
    </section>
  );
}

export default Services;
