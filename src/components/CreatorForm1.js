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
    <div className="py-4" style={{paddingRight:'40px'}}>
      <div className="contact-heading">
        <span className="font-weight-600 text-black">Got ideas?</span> We have
        got the skills. <br />
        <span className="font-weight-600 text-black">Let's team up.</span>
      </div>

      <div className="contact-form py-5">
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control className="w-75" type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
            <Form.Label>Name</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control className="w-75" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Floating>
            <Form.Control className="w-75" type="number" placeholder="Enter your contact" maxLength={10} value={contact} onChange={handleContactChange} />
            <Form.Label>Contact Number</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>
    </div>
  );
}

export default CreatorForm1;
