import React, { useState } from "react";
import CreatorForm1 from "../components/CreatorForm1";
import CreatorForm2 from "../components/CreatorForm2";
import ContactForm3 from "../components/ContactForm3";
import CreatorForm4 from "../components/CreatorForm4";
import "../components/Contact.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Prev from "../images/form-prev.png";
import { Link } from "react-router-dom";

function CreatorContact() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [more, setMore] = useState("");

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

  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
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
                <li id="project">{project}</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              3. Persona Creation
              <ul className="sub-progress-step">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
              4. Area of interest
              <ul className="sub-progress-step">
                <li id="name">{more}</li>
              </ul>
            </div>
          </div>
        </div>
        <Container className="col-md-9 col-12 border-element form-content">
            <div class="d-flex align-items-start flex-column" style={{height: "85%"}}>
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
                    />
                    )}
                    {step === 3 && <ContactForm3 />}
                    {step === 4 && (
                    <CreatorForm4 />
                    )}
                </Form>
            </div>

            <div className="d-flex align-items-end custom-padding" style={{height: "10%", justifyContent: "space-between"}}>
                {step > 1 && (
                <a
                    className="previous-button form-btn-prev"
                    onClick={handlePrevious}
                >
                    <img className="w-50" src={Prev} />
                </a>
                )}

                {step < 4 && (
                <a
                    className="next-button form-btn"
                    onClick={handleNext}
                >
                    Continue
                </a>
                )}

                {step === 4 && (
                <a className="submit-button form-btn">Submit</a>
                )}
            </div>

        </Container>
      </div>
    </Container>
  );
}

export default CreatorContact;
