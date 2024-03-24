import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import ContactForm1 from "../components/ContactForm1";
import ContactForm2 from "../components/ContactForm2";
import ContactForm3 from "../components/ContactForm3";
import ContactForm4 from "../components/ContactForm4";
import "../components/Contact.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Prev from "../images/form-prev.png";
import { Link } from "react-router-dom";
import "../components/InnerHeader.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import NDA from "../images/NDA.pdf";
import GoogleTagManager from "../GoogleTagManager";

function CustomerContact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [more, setMore] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [downloadNDA, setDownloadNDA] = useState(false);

  const handleCheckboxDownload = () => {
    setDownloadNDA(!downloadNDA);
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleOrganizationChange = (newOrganization) => {
    setOrganization(newOrganization);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleContactChange = (newContact) => {
    setContact(newContact);
  };

  const handleProjectChange = (newProject) => {
    setProject(newProject);
  };

  const handleRadioChange = (newOption) => {
    setSelectedOption(newOption);
  };

  const handleMoreChange = (newMore) => {
    setMore(newMore);
  };

  const handleTimelineChange = (newTimeline) => {
    setSelectedTimeline(newTimeline);
  };

  const handleBudgetChange = (newBudget) => {
    setSelectedBudget(newBudget);
  };

  const handleCheckboxChange = (updatedCheckboxes) => {
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step === 1 && (!name || !email)) {
      alert("Name and Email are required.");
      return;
    }

    if (step === 2 && selectedCheckboxes.length === 0) {
      alert("Select at least one area of interest.");
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
    $("#toggle").toggleClass("active");
    $("#overlay").toggleClass("open");
  };

  useEffect(() => {
    // Load project data from local storage if needed
    const storedProject = localStorage.getItem("project");
    if (storedProject) {
      setProject(storedProject);
    }

    // Fetch selectedCheckboxes data from local storage
    const storedCheckboxes = localStorage.getItem("selectedCheckboxes");
    if (storedCheckboxes) {
      setSelectedCheckboxes(JSON.parse(storedCheckboxes));
    }
  }, []);

  const handleSubmission = () => {
    // Collect the data from localStorage
    const formData = {
      name,
      organization,
      email,
      contact,
      project,
      selectedCheckboxes,
      selectedOption,
      more,
      selectedTimeline,
      selectedBudget,
    };

    setTimeout(() => {
      navigate("/thankyou");
    }, 1000);

    // Send the data to the specified URL
    fetch("https://thehonestco.in/mailCustomer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        console.log(data);
        // Remove all local storage data (if needed)
        localStorage.clear();
        // redirect to home
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  console.log(downloadNDA, "downloadNDA");
  return (
    <Container>
      <Helmet>
        <title>Customer Inquiry | Honest Digital Services </title>
        <GoogleTagManager />
        <meta name="description" content="" />
        <meta name="keywords" content=""></meta>
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      <div className="row height-100vh">
        <div className="col-md-3 col-12 d-none d-md-block">
          <Link to="/" className="contact-logo">
            <span className="font-weight-800">the</span>
            <span className="font-weight-600"> honest</span>
            <span className="font-weight-400"> company</span>
          </Link>
          <div className="progress1 mt-5">
            <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
              1. General Information
              <ul className="sub-progress-step">
                <li id="name">{name}</li>
                <li id="organization">{organization}</li>
                <li id="email">{email}</li>
                <li id="contact">{contact}</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
              2. Area of interest
              <ul className="sub-progress-step">
                {selectedCheckboxes.map((checkbox) => (
                  <li key={checkbox}>{checkbox}</li>
                ))}
                <li id="project">
                  {project && project.length > 130
                    ? project.substring(0, 130) + "..."
                    : project}
                </li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              3. Project Details
              <ul className="sub-progress-step">
                <li>Timeline: {selectedTimeline}</li>
                <li>Budget: {selectedBudget}</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
              4. Additional Info
              <ul className="sub-progress-step">
                <li>
                  {more && more.length > 130
                    ? more.substring(0, 130) + "..."
                    : more}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mobile-header */}
        <Navbar className="pb-4 mobile-navbar-container">
          <Link to="/">
            <Navbar.Brand>
              <span className="font-weight-800 text-dark">the</span>
              <span className="font-weight-600 text-dark"> honest</span>
              <span className="font-weight-400 text-dark"> company</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />

          <div
            id="navbar-nav toggle"
            className={`justify-content-end button_container button_container_contact ${
              isMenuOpen ? "active" : ""
            }`}
            onClick={handleToggle}
          >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>

          <div id="overlay" className={`overlay ${isMenuOpen ? "open" : ""}`}>
            <nav className="overlay-menu">
              <div className="pl-6">Menu</div>
              <ul>
                <li>
                  <Link to="/?scrollTo=Ourstory">About</Link>
                </li>
                <li>
                  <Link to="/?scrollTo=ServicesMob">Services</Link>
                </li>
                <li>
                  <Link to="/get-in-touch/creator-inquiry">Team</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/get-in-touch/customer-inquiry">
                    <button className="nav-button">get in touch</button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Navbar>
        {/* mobile */}
        <div className="d-block d-md-none">
          <div className="row align-items-center">
            <div className="col-3 mobile-contact-headings">
              <div>
                {step === 1 ? (
                  <>
                    General <br /> Information
                  </>
                ) : (
                  "1"
                )}
              </div>
            </div>
            <div className="col-3 mobile-contact-headings">
              <div>
                {step === 2 ? (
                  <>
                    Area of <br />
                    interest
                  </>
                ) : (
                  "2"
                )}
              </div>
            </div>
            <div className="col-3 mobile-contact-headings">
              {step === 3 ? (
                <>
                  Project <br />
                  Details
                </>
              ) : (
                "3"
              )}
            </div>
            <div className="col-3 mobile-contact-headings">
              {step === 4 ? (
                <>
                  Additional <br />
                  Info
                </>
              ) : (
                "4"
              )}
            </div>
          </div>
        </div>

        <Container
          className="col-md-9 col-12 border-element form-content"
          style={{ border: "none" }}
        >
          <div className="top_Side mobile-none"></div>
          <div className="Left_Side mobile-none"></div>

          <div className="d-flex align-items-start flex-column height-85pec">
            <Form className="px-md-4 w-100 mobile-h-65vh">
              {step === 1 && (
                <ContactForm1
                  onNameChange={handleNameChange}
                  onOrganizationChange={handleOrganizationChange}
                  onEmailChange={handleEmailChange}
                  onContactChange={handleContactChange}
                />
              )}
              {step === 2 && (
                <ContactForm2
                  onProjectChange={handleProjectChange}
                  onRadioChange={handleRadioChange}
                  onCheckboxesChange={handleCheckboxChange}
                />
              )}
              {step === 3 && (
                <ContactForm3
                  onTimelineChange={handleTimelineChange}
                  onBudgetChange={handleBudgetChange}
                />
              )}
              {step === 4 && (
                <ContactForm4
                  handleCheckboxDownload={handleCheckboxDownload}
                  onMoreChange={handleMoreChange}
                />
              )}
            </Form>
          </div>

          <div
            className="d-flex align-items-end custom-padding form-margins"
            style={{ height: "10%", justifyContent: "space-between" }}
          >
            {step > 1 && (
              <Link
                className="previous-button form-btn-prev"
                onClick={handlePrevious}
              >
                <img className="w-50" src={Prev} alt="Previous" />
              </Link>
            )}

            {step < 4 && (
              <Link
                className={`next-button form-btn ${
                  (step === 1 && (!name || !email)) ||
                  (step === 2 && selectedCheckboxes.length === 0)
                    ? "disabled"
                    : ""
                }`}
                disabled={
                  (step === 1 && (!name || !email)) ||
                  (step === 2 && selectedCheckboxes.length === 0)
                }
                onClick={handleNext}
              >
                Continue
              </Link>
            )}

            {step === 4 && (
              <>
                {downloadNDA ? (
                  <a href={NDA} download="NDA">
                    <button
                      className="submit-button form-btn"
                      onClick={handleSubmission}
                      disabled={!name || !email}
                    >
                      Submit
                    </button>
                  </a>
                ) : (
                  <button
                    className="submit-button form-btn"
                    onClick={handleSubmission}
                    disabled={!name || !email}
                  >
                    Submit
                  </button>
                )}
              </>
            )}
          </div>
        </Container>
      </div>

      <div className="bottom_Side mobile-none"></div>
      <div className="right_Side mobile-none"></div>
    </Container>
  );
}

export default CustomerContact;
