import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm1({
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

    if (storedName) setName(storedName);
    if (storedOrganization) setOrganization(storedOrganization);
    if (storedEmail) setEmail(storedEmail);
    if (storedContact) setContact(storedContact);
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
      localStorage.removeItem("email");
    }
  };

  return (
    <div className="py-4">
      <div className="contact-heading">
        <span className="font-weight-600 text-black">General Information</span>
      </div>

      <div className="contact-form py-5">
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control
              className="w-75"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <Form.Label>Name</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formOrganization">
          <Form.Floating>
            <Form.Control
              className="w-75"
              type="text"
              placeholder="Enter your organization"
              value={organization}
              onChange={handleOrganizationChange}
            />
            <Form.Label>Organization</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control
              className="w-75"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        {showContactForm && (
          <Form.Group controlId="formContact">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="number"
                placeholder="Enter your contact"
                maxLength={10}
                value={contact}
                onChange={handleContactChange}
              />
              <Form.Label>Contact Info</Form.Label>
            </Form.Floating>
          </Form.Group>
        )}

        <Form.Group className="pt-4" controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="Check if you want to communicate via Whatsapp"
            onChange={handleCheckboxChange}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default CreatorForm1;
