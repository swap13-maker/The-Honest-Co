import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm3({
  onStudentNameChange,
  onStudentOrganizationChange,
  onStudentEmailChange,
  onStudentContactChange,
}) {
  const [studentName, setStudentName] = useState("");
  const [studentOrganization, setStudentOrganization] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentContact, setStudentContact] = useState("");
  const [showStudentContactForm, setShowStudentContactForm] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const storedStudentName = localStorage.getItem("StudentName");
    const storedStudentOrganization = localStorage.getItem(
      "studentOrganization"
    );
    const storedStudentEmail = localStorage.getItem("studentEmail");
    const storedStudentContact = localStorage.getItem("studentContact");
    const isStudentContactChecked = localStorage.getItem(
      "isStudentContactChecked"
    );
    const storedType = localStorage.getItem("selectedType");

    if (storedStudentName) setStudentName(storedStudentName);
    if (storedStudentOrganization)
      setStudentOrganization(storedStudentOrganization);
    if (storedStudentEmail) setStudentEmail(storedStudentEmail);
    if (storedStudentContact) setStudentContact(storedStudentContact);
    if (isStudentContactChecked === "true") {
      setShowStudentContactForm(true);
    }
    if (storedType) setSelectedType(storedType);
  }, []);

  const handleStudentNameChange = (event) => {
    const newStudentName = event.target.value;
    setStudentName(newStudentName);
    onStudentNameChange(newStudentName);
    localStorage.setItem("studentName", newStudentName);
  };

  const handleStudentOrganizationChange = (event) => {
    const newStudentOrganization = event.target.value;
    setStudentOrganization(newStudentOrganization);
    onStudentOrganizationChange(newStudentOrganization);
    localStorage.setItem("studentOrganization", newStudentOrganization);
  };

  const handleStudentEmailChange = (event) => {
    const newStudentEmail = event.target.value;
    setStudentEmail(newStudentEmail);
    onStudentEmailChange(newStudentEmail);
    localStorage.setItem("studentEmail", newStudentEmail);
  };

  const handleStudentContactChange = (event) => {
    const newStudentContact = event.target.value;
    setStudentContact(newStudentContact);
    onStudentContactChange(newStudentContact);
    localStorage.setItem("studentContact", newStudentContact);
  };

  const handleStudentCheckboxChange = (event) => {
    setShowStudentContactForm(event.target.checked);
    if (!event.target.checked) {
      setStudentContact("");
      localStorage.removeItem("studentContact");
    }
    localStorage.setItem("isStudentContactChecked", event.target.checked);
  };

  const handleRadioTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    // onRadioChange(newType);
    localStorage.setItem("selectedType", newType);
  };

  return (
    <div className="py-4">
      <div className="contact-heading">
        <span className="font-weight-600 text-black">Persona Creation</span>
      </div>
      <div className="creator-sub-heading text-black pt-4">
        Tell us about yourself
      </div>
      <div className="d-flex">
        <Form.Group className="pt-4 w-50" controlId="radioGroup1">
          <Form.Check
            type="radio"
            name="radioTypeGroup"
            id="Student"
            value="Student"
            label="Are you a student?"
            checked={selectedType === "Student"}
            onChange={handleRadioTypeChange}
          />
        </Form.Group>
        <Form.Group className="pt-4 w-50" controlId="radioGroup2">
          <Form.Check
            type="radio"
            name="radioTypeGroup"
            id="Professional"
            value="Professional"
            label="Are you a working professional?"
            checked={selectedType === "Professional"}
            onChange={handleRadioTypeChange}
          />
        </Form.Group>
      </div>
      <div id="forStudent" style={{ display: selectedType === "Student" ? "block" : "none" }}>
        <div className="contact-heading">
          <span className="font-weight-600 text-black">Are you a student?</span>
        </div>
        <div className="py-4">
          <Form.Group controlId="formOrganization">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Enter your organization"
                value={studentOrganization}
                onChange={handleStudentOrganizationChange}
              />
              <Form.Label>Institution name</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Enter your name"
                value={studentName}
                onChange={handleStudentNameChange}
              />
              <Form.Label>Name</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="email"
                placeholder="Enter your email"
                value={studentEmail}
                onChange={handleStudentEmailChange}
              />
              <Form.Label>Email</Form.Label>
            </Form.Floating>
          </Form.Group>

          {showStudentContactForm && (
            <Form.Group controlId="formContact">
              <Form.Floating>
                <Form.Control
                  className="w-75"
                  type="number"
                  placeholder="Enter your contact"
                  maxLength={10}
                  value={studentContact}
                  onChange={handleStudentContactChange}
                />
                <Form.Label>Contact Number</Form.Label>
              </Form.Floating>
            </Form.Group>
          )}

          <Form.Group className="pt-4" controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Check if you want to communicate via Whatsapp"
              checked={showStudentContactForm}
              onChange={handleStudentCheckboxChange}
            />
          </Form.Group>
        </div>
      </div>
      <div id="forProfessional" style={{ display: selectedType === "Professional" ? "block" : "none" }}>
        <div className="contact-heading">
          <span className="font-weight-600 text-black">
            Are you a Working Professional?
          </span>
        </div>
        <div className="py-4">
          <Form.Group controlId="formOrganization">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Personal Details"
                value={studentOrganization}
                onChange={handleStudentOrganizationChange}
              />
              <Form.Label>Personal Details</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Enter your name"
                value={studentName}
                onChange={handleStudentNameChange}
              />
              <Form.Label>Name</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Floating>
              <Form.Control
                className="w-75"
                type="email"
                placeholder="Enter your email"
                value={studentEmail}
                onChange={handleStudentEmailChange}
              />
              <Form.Label>Email</Form.Label>
            </Form.Floating>
          </Form.Group>

          {showStudentContactForm && (
            <Form.Group controlId="formContact">
              <Form.Floating>
                <Form.Control
                  className="w-75"
                  type="number"
                  placeholder="Enter your contact"
                  maxLength={10}
                  value={studentContact}
                  onChange={handleStudentContactChange}
                />
                <Form.Label>Contact Number</Form.Label>
              </Form.Floating>
            </Form.Group>
          )}

          <Form.Group className="pt-4" controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Check if you want to communicate via Whatsapp"
              checked={showStudentContactForm}
              onChange={handleStudentCheckboxChange}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default CreatorForm3;
