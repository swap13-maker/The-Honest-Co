import React, { useState, useEffect } from "react";
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

function CreatorContact() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [more, setMore] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

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

  const handlePositionChange = (newPosition) => {
    setSelectedPosition(newPosition);
  };

  const handleCheckboxChange = (updatedCheckboxes) => {
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
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
      selectedPosition,
    };

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
        window.location.href = '/';
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <Container>
      <div className="row height-100vh">
        <div className="col-md-3 col-12">
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
                <li id="project">{project}</li>
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

        <Container className="col-md-9 col-12 border-element form-content" style={{border:'none'}}>
          <div className="top_Side">
          </div>
          <div className="Left_Side">
          </div>
         
          <div
            className="d-flex align-items-start flex-column"
            style={{ height: "85%" }}
          >
            <Form className="px-4 w-100">
              {step === 1 && (
                <CreatorForm1
                  onNameChange={handleNameChange}
                  onOrganizationChange={handleOrganizationChange}
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
                />
              )}
              {step === 4 && <CreatorForm4 onPositionChange={handlePositionChange} />}
            </Form>
          </div>

          <div
            className="d-flex align-items-end custom-padding"
            style={{ height: "10%", justifyContent: "space-between", marginLeft:'30px',marginRight:'40px'}}
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
              <a className="next-button form-btn" onClick={handleNext}>
                Continue
              </a>
            )}

            {step === 4 && (
              <button className="submit-button form-btn" onClick={handleSubmission}>Submit</button>
            )}
          </div>
        </Container>
      </div>
      
      <div className="bottom_Side"></div>
      <div className="right_Side"></div>
    </Container>
  );
}

export default CreatorContact;
