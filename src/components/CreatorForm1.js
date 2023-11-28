import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm1({ onNameChange, onEmailChange, onContactChange }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedContact = localStorage.getItem("contact");
    const isContactChecked = localStorage.getItem("isContactChecked");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedContact) setContact(storedContact);
  }, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
    localStorage.setItem("name", newName);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
    localStorage.setItem("email", newEmail);
  };

  const handleContactChange = (event) => {
    const newContact = event.target.value;
    setContact(newContact);
    onContactChange(newContact);
    localStorage.setItem("contact", newContact);
  };

  return (
    <div className="py-4 pr-40px">
      <div className="contact-heading">
        <span className="font-weight-600 text-black">Got ideas?</span> We have
        got the skills. <br />
        <span className="font-weight-600 text-black">Let's team up.</span>
      </div>

      <div className="contact-form py-5">
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control className="w-md-75 label-with-underline" type="text" placeholder="Enter your name" maxLength={30} value={name} onChange={handleNameChange} />
            <Form.Label>Name</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control className="w-md-75 label-with-underline" type="email" placeholder="Enter your email" maxLength={40} value={email} onChange={handleEmailChange} />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formContact">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter your contact"
                maxLength={10}
                value={contact}
                onChange={handleContactChange}
                onKeyPress={(e) => {
                  // Allow only numeric input
                  const isNumeric = /^[0-9]*$/;
                  if (!isNumeric.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <Form.Label>Contact Number</Form.Label>
            </Form.Floating>
          </Form.Group>
      </div>
    </div>
  );
}

export default CreatorForm1;
