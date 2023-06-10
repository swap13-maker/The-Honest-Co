import React, { useState } from "react";
import ContactForm1 from "../components/ContactForm1";
import ContactForm2 from "../components/ContactForm2";
import ContactForm3 from "../components/ContactForm3";
import ContactForm4 from "../components/ContactForm4";
import "../components/Contact.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Prev from "../images/form-prev.png";
import { Link } from "react-router-dom";

function CustomerContact() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleOrganizationChange = (newOrganization) => {
    setOrganization(newOrganization);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
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
                <li id="name">Name: {name}</li>
                <li id="organization">Organization: {organization}</li>
                <li id="email">Email: {email}</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
              2. Area of interest
              <ul className="sub-progress-step">
                <li>test 1234</li>
                <li>test 1234</li>
                <li>test 1234</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              3. General Information
              <ul className="sub-progress-step">
                <li>test 1234</li>
                <li>test 1234</li>
                <li>test 1234</li>
              </ul>
            </div>
            <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
              4. Area of interest
              <ul className="sub-progress-step">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12 border-element">
          <div>
            <Container>
              <div className="form-content">
                <Form>
                  {step === 1 && (
                    <ContactForm1
                      onNameChange={handleNameChange}
                      onOrganizationChange={handleOrganizationChange}
                      onEmailChange={handleEmailChange}
                    />
                  )}
                  {step === 2 && <ContactForm2 />}
                  {step === 3 && <ContactForm3 />}
                  {step === 4 && <ContactForm4 />}
                </Form>
                <div
                  className="buttons"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {step > 1 && (
                    <button
                      className="previous-button form-btn-prev"
                      onClick={handlePrevious}
                    >
                      <img className="w-50" src={Prev} />
                    </button>
                  )}

                  {step < 4 && (
                    <button
                      className="next-button form-btn"
                      onClick={handleNext}
                    >
                      Continue
                    </button>
                  )}

                  {step === 4 && (
                    <button className="submit-button form-btn">Submit</button>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CustomerContact;
