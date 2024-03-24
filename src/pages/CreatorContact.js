import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import CreatorForm1 from "../components/CreatorForm1";
import CreatorForm2 from "../components/CreatorForm2";
import CreatorForm3 from "../components/CreatorForm3";
import CreatorForm4 from "../components/CreatorForm4";
import "../components/Contact.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Prev from "../images/form-prev.png";
import { Link } from "react-router-dom";
import "./CreatorContact.css";
import "../components/InnerHeader.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import GoogleTagManager from "../GoogleTagManager";


function CreatorContact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [studentInstitution, setStudentInstitution] = useState("");
  const [courseType, setCourseType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [studentLocation, setStudentLocation] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleNameChange = (newName) => {
    setName(newName);
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

  const handleRadioTypeChange = (newType) => {
    setSelectedType(newType);
  };

  const handlePositionChange = (newPosition) => {
    setSelectedPosition(newPosition);
  };

  const handleCheckboxChange = (updatedCheckboxes) => {
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const handleStudentInstitutionChange = (newStudentInstitution) => {
    setStudentInstitution(newStudentInstitution);
  };

  const handleCourseTypeChange = (newCourseType) => {
    setCourseType(newCourseType);
  };

  const handleCourseNameChange = (newCourseName) => {
    setCourseName(newCourseName);
  };

  const handleCompanyNameChange = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };

  const handleDesignationChange = (newDesignation) => {
    setDesignation(newDesignation);
  };

  const handleExperienceChange = (newExperience) => {
    setExperience(newExperience);
  };

  const handleStudentLocationChange = (newStudentLocation) => {
    setStudentLocation(newStudentLocation);
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
      email,
      contact,
      project,
      selectedCheckboxes,
      selectedOption,
      selectedType,
      selectedPosition,
      studentInstitution,
      courseType,
      courseName,
      companyName,
      designation,
      experience,
      studentLocation,
    };

    setTimeout(() => {
      navigate('/thankyou');
    }, 1000);

    // Send the data to the specified URL
    fetch("https://thehonestco.in/mailCreator.php", {
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
        window.location.href = '/';
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <Container>
    <Helmet>
        <title>Creator Inquiry | Honest Digital Services</title>
        <GoogleTagManager />
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        ></meta>
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
                <li id="project">{project && project.length > 130 ? project.substring(0, 130) + '...' : project}</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              3. Persona Creation
              <ul className="sub-progress-step">
                <li></li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
              4. Additional Info
              <ul className="sub-progress-step">
                <li>Position: {selectedPosition}</li>
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
            className={`justify-content-end button_container button_container_contact ${isMenuOpen ? "active" : ""}`}
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
            <div className="col-3 mobile-contact-headings"><div>{step === 1 ? ( <>General <br /> Information</> ) : '1'}</div></div>
            <div className="col-3 mobile-contact-headings"><div>{step === 2 ? ( <>Area of <br/>interest</> ) : '2'}</div></div>
            <div className="col-3 mobile-contact-headings">{step === 3 ? ( <>Persona <br/>Creation</> ) : '3'}</div>
            <div className="col-3 mobile-contact-headings">{step === 4 ? ( <>Additional <br/>Info</> ) : '4'}</div>
          </div>
        </div>

        <Container className="col-md-9 col-12 border-element form-content" style={{border:'none'}}>
          <div className="top_Side mobile-none">
          </div>
          <div className="Left_Side mobile-none">
          </div>
         
          <div
            className="d-flex align-items-start flex-column height-85pec">
            <Form className="px-md-4 w-100 mobile-h-65vh">
              {step === 1 && (
                <CreatorForm1
                  onNameChange={handleNameChange}
                  onEmailChange={handleEmailChange}
                  onContactChange={handleContactChange}
                />
              )}
              {step === 2 && (
                <CreatorForm2
                  onProjectChange={handleProjectChange}
                  onRadioChange={handleRadioChange}
                  onCheckboxesChange={handleCheckboxChange}
                />
              )}
              {step === 3 && (
                <CreatorForm3
                  onCourseTypeChange={handleCourseTypeChange}
                  onCourseNameChange={handleCourseNameChange}
                  onStudentInstitutionChange={handleStudentInstitutionChange}
                  onStudentLocationChange={handleStudentLocationChange}
                  onCompanyNameChange={handleCompanyNameChange}
                  onDesignationChange={handleDesignationChange}
                  onExperienceChange={handleExperienceChange}
                  onRadioTypeChange={handleRadioTypeChange}
                />
              )}
              {step === 4 && <CreatorForm4 onPositionChange={handlePositionChange} />}
            </Form>
          </div>

          <div
            className="d-flex align-items-end custom-padding form-margins"
            style={{ height: "10%", justifyContent: "space-between"}}
          >
            {step > 1 && (
              <a
                className="previous-button form-btn-prev"
                onClick={handlePrevious}
              >
                <img className="w-50" src={Prev} alt="Previous" />
              </a>
            )}

            {step < 4 && (
              <a
                className={`next-button form-btn ${
                  (step === 1 && (!name || !email)) ||
                  (step === 2 && selectedCheckboxes.length === 0) ? "disabled" : ""
                }`}
                disabled={
                  (step === 1 && (!name || !email)) ||
                  (step === 2 && selectedCheckboxes.length === 0)
                }
                onClick={handleNext}
              >
                Continue
              </a>
            )}

            {step === 4 && (
              <button className="submit-button form-btn" onClick={handleSubmission}>Submit</button>
            )}
          </div>
        </Container>
      </div>
      
      <div className="bottom_Side mobile-none"></div>
      <div className="right_Side mobile-none"></div>
    </Container>
  );
}

export default CreatorContact;
