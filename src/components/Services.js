import React, { useState, useEffect } from "react";
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
  let currentTabIndex = 0; // Variable to track the current tab index

  // Define an array of tabs you want to cycle through.
  const tabs = ["tab1", "tab2", "tab3"];

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the active tab based on the current index
      setVerticalActive(tabs[currentTabIndex]);
      currentTabIndex = (currentTabIndex + 1) % tabs.length; // Cycle through tabs
    }, 4000); // 3 seconds interval

    // Clear the timer when the component unmounts to prevent memory leaks.
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <section className="container py-5 d-none d-md-block">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-7 d-flex">
          <div className="sub-heading d-flex align-items-center">
            <p className="m-0">
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
            <h1 className="right-aligned section-heading">Services</h1>
          </div>
        </div>
      </div>

      {/* test */}
      <div className="row">
        <div className="col-12">
          <MDBRow>
            <MDBCol size="5" className="py-5">
              <MDBTabs pills className="flex-column text-center">
                <MDBTabsItem className="pb-3">
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab1")}
                    active={verticalActive === "tab1"}
                  >
                    <div className="d-flex align-items-center">
                      {verticalActive === "tab1" ? (
                        <div className="loading"></div>
                      ) : (
                        <img className="tab-icon" src={arrow} />
                      )}
                      <span className="px-3">Web & Mobile Development</span>
                    </div>
                    <div className="sub-heading-tab">
                      Our services have been divided into four categories based on the kind of work we have done
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem className="pb-3">
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab2")}
                    active={verticalActive === "tab2"}
                  >
                    <div className="d-flex align-items-center">
                      {verticalActive === "tab2" ? (
                        <div className="loading"></div>
                      ) : (
                        <img className="tab-icon" src={arrow} />
                      )}
                      <span className="px-3">Content & Adversiting</span>
                    </div>
                    <div className="sub-heading-tab">
                      Our services have been divided into four categories based
                      on the kind of work we have done.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem className="pb-3">
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab3")}
                    active={verticalActive === "tab3"}
                  >
                    <div className="d-flex align-items-center">
                      {verticalActive === "tab3" ? (
                        <div className="loading"></div>
                      ) : (
                        <img className="tab-icon" src={arrow} />
                      )}
                      <span className="px-3">Industry Design</span>
                    </div>
                    <div className="sub-heading-tab">
                      From concept to production, we create beautiful and
                      functional products that resonate with your audience.
                    </div>
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
              <div className="pt-5">
                <button className="bg-dark text-uppercase text-white font-weight-300 button">
                  GET STARTED WITH US !
                </button>
              </div>
            </MDBCol>
            <MDBCol size="7">
              <MDBTabsContent>
                {/*Tab 1*/}
                <MDBTabsPane show={verticalActive === "tab4"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab1-ele1">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">Interior Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab1-ele2">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Building Information Modeling
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele3">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Architectural Design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele4">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Feasibility Studies & Site Analysis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="tab1-ele5">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
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
                <MDBTabsPane show={verticalActive === "tab3"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab2-ele1">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">concept & prototyping</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele2">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                              product design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele3">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                branding & identity design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab2-ele4">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
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
                <MDBTabsPane show={verticalActive === "tab1"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab3-ele1">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Custom Software Development
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab3-ele2">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Mobile Application Development
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="tab3-ele3">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Ai & ML solutions
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="tab3-ele4">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                Web 3 & Blockchain 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBTabsPane>
                {/*Tab 4*/}
                <MDBTabsPane show={verticalActive === "tab2"}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tab4-ele1">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">motion graphics</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele2">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                content creation
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele3">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">
                                branding & identity design
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab4-ele4">
                        <div className="circle">
                          <div className="circle__inner">
                            <div className="circle__wrapper">
                              <div className="circle__content">advertisement</div>
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
    </section>
  );
}

export default Services;
