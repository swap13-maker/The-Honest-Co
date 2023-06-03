import React, { useState } from "react";
import ContactForm1 from "../components/ContactForm1";
import ContactForm2 from "../components/ContactForm2";
import ContactForm3 from "../components/ContactForm3";
import ContactForm4 from "../components/ContactForm4";
import "../components/Contact.css";
import { Container } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import Prev from "../images/form-prev.png";

function CustomerContact() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-3 col-12">
          <div className="bg-success">
            <div className="progress">
              <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
                1
              </div>
              <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
                2
              </div>
              <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
                3
              </div>
              <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
                4
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="border py-3 px-4">
            <Container>
              <div className="form-content">
                <Form>
                  {step === 1 && <ContactForm1 />}
                  {step === 2 && <ContactForm2 />}
                  {step === 3 && <ContactForm3 />}
                  {step === 4 && <ContactForm4 />}
                </Form>
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {step > 1 && (
                    <button
                      className="previous-button form-btn-prev"
                      onClick={handlePrevious}
                    >
                      <img className="w-50" src={Prev}/>
                    </button>
                  )}

                  {step < 4 && (
                    <button className="next-button form-btn" onClick={handleNext}>
                      Continue
                    </button>
                  )}

                  {step === 4 && (
                    <button className="submit-button form-btn">
                      Submit
                    </button>
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
