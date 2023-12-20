import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import './Contact.css'

function ContactForm1({
  onNameChange,
  onOrganizationChange,
  onEmailChange,
  onContactChange,
}) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedOrganization = localStorage.getItem("organization");
    const storedEmail = localStorage.getItem("email");
    const storedContact = localStorage.getItem("contact");
    const isContactChecked = localStorage.getItem("isContactChecked");

    if (storedName) setName(storedName);
    if (storedOrganization) setOrganization(storedOrganization);
    if (storedEmail) setEmail(storedEmail);
    if (storedContact) setContact(storedContact);
    if (isContactChecked === "true") {
      setShowContactForm(true);
    }
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

  const handleContactChange = (event) => {
    const newContact = event.target.value;
    setContact(newContact);
    onContactChange(newContact);
    localStorage.setItem("contact", newContact);
  };

  const handleCheckboxChange = (event) => {
    setShowContactForm(event.target.checked);
    if (!event.target.checked) {
      setContact("");
      localStorage.removeItem("contact");
    }
    localStorage.setItem("isContactChecked", event.target.checked);
  };

  return (
    <div className="py-4 pr-40px">
      <div className="contact-heading">
        <span className="font-weight-600 text-black">Got ideas?</span> We have 
        got the team. <br />
        <span className="font-weight-600 text-black">Share your requirements with us.</span>
      </div>

      <div className="contact-form py-5">
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control
              className="w-md-75 label-with-underline"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              maxLength={20}
            />
            <Form.Label>Name</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formOrganization">
          <Form.Floating>
            <Form.Control
              className="w-md-75 label-with-underline"
              type="text"
              placeholder="Enter your organization"
              value={organization}
              onChange={handleOrganizationChange}
              maxLength={40}
            />
            <Form.Label>Organization</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control
              className="w-md-75 label-with-underline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              maxLength={40}
            />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        {showContactForm && (
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
        )}

        <Form.Group className="pt-4" controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="You will be contacted via the entered number"
            checked={showContactForm}
            onChange={handleCheckboxChange}
            id="custom-checkbox"
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default ContactForm1;
