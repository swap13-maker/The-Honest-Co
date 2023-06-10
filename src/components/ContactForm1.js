import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ContactForm1({ onNameChange, onOrganizationChange, onEmailChange }) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedOrganization = localStorage.getItem("organization");
    const storedEmail = localStorage.getItem("email");

    if (storedName) setName(storedName);
    if (storedOrganization) setOrganization(storedOrganization);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
    localStorage.setItem("name", newName);
  };

  const handleOrganizationChange = (event) => {
    const newOrganization = event.target.value;
    setOrganization(newOrganization);
    onOrganizationChange(newOrganization);
    localStorage.setItem("organization", newOrganization);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
    localStorage.setItem("email", newEmail);
  };

  return (
    <div className="py-4">
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

        <Form.Group controlId="formOrganization">
          <Form.Floating>
            <Form.Control className="w-75" type="text" placeholder="Enter your organization" value={organization} onChange={handleOrganizationChange} />
            <Form.Label>Organization</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control className="w-75" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="pt-4" controlId="formCheckbox">
            <Form.Check type="checkbox" label="You will be contacted via the entered number" />
        </Form.Group>

      </div>
    </div>
  );
}

export default ContactForm1;
