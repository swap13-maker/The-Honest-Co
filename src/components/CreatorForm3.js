import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm3({
  onCourseTypeChange,
  onCourseNameChange,
  onStudentInstitutionChange,
  onStudentLocationChange,
  onCompanyNameChange,
  onDesignationChange,
  onExperienceChange,
  onRadioTypeChange
}) {
  const [courseType, setCourseType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [studentInstitution, setStudentInstitution] = useState("");
  const [studentLocation, setStudentLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const storedCourseType = localStorage.getItem("courseType");
    const storedCourseName = localStorage.getItem("courseName");
    const storedCompanyName = localStorage.getItem("companyName");
    const storedDesignation = localStorage.getItem("designation");
    const storedExperience = localStorage.getItem("experience");
    const storedStudentInstitution = localStorage.getItem(
      "studentInstitution"
    );
    const storedStudentLocation = localStorage.getItem("studentLocation");
    const storedType = localStorage.getItem("selectedType");

    if (storedCourseType) setCourseType(storedCourseType);
    if (storedCourseName) setCourseName(storedCourseName);
    if (storedCompanyName) setCompanyName(storedCompanyName);
    if (storedDesignation) setDesignation(storedDesignation);
    if (storedExperience) setExperience(storedExperience);
    if (storedStudentInstitution) setStudentInstitution(storedStudentInstitution);
    if (storedStudentLocation) setStudentLocation(storedStudentLocation);
    if (storedType) setSelectedType(storedType);
  }, []);

  const handleCourseTypeChange = (event) => {
    const newCourseType = event.target.value;
    setCourseType(newCourseType);
    onCourseTypeChange(newCourseType);
    localStorage.setItem("courseType", newCourseType);
  };

  const handleCourseNameChange = (event) => {
    const newCourseName = event.target.value;
    setCourseName(newCourseName);
    onCourseNameChange(newCourseName);
    localStorage.setItem("courseName", newCourseName);
  };

  const handleCompanyNameChange = (event) => {
    const newCompanyName = event.target.value;
    setCompanyName(newCompanyName);
    onCompanyNameChange(newCompanyName);
    localStorage.setItem("companyName", newCompanyName);
  };

  const handleDesignationChange = (event) => {
    const newDesignation = event.target.value;
    setDesignation(newDesignation);
    onDesignationChange(newDesignation);
    localStorage.setItem("designation", newDesignation);
  };

  const handleExperienceChange = (event) => {
    const newExperience = event.target.value;
    setExperience(newExperience);
    onExperienceChange(newExperience);
    localStorage.setItem("experience", newExperience);
  };

  const handleStudentInstitutionChange = (event) => {
    const newStudentInstitution = event.target.value;
    setStudentInstitution(newStudentInstitution);
    onStudentInstitutionChange(newStudentInstitution);
    localStorage.setItem("studentInstitution", newStudentInstitution);
  };

  const handleStudentLocationChange = (event) => {
    const newStudentLocation = event.target.value;
    setStudentLocation(newStudentLocation);
    onStudentLocationChange(newStudentLocation);
    localStorage.setItem("studentLocation", newStudentLocation);
  };

  const handleRadioTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    onRadioTypeChange(newType);
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
      <div className="d-flex pb-md-4 pb-0">
        <Form.Group className="py-3 w-50" controlId="radioGroup1">
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
        <Form.Group className="py-3 w-50" controlId="radioGroup2">
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
          Are you a
          <span className="font-weight-600 text-black"> Student?</span>
        </div>
        <div className="pt-md-2 pt-0">
          <Form.Group controlId="formInstitution">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter your institution name"
                value={studentInstitution}
                onChange={handleStudentInstitutionChange}
                maxLength={40}
              />
              <Form.Label>Institution name</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formCourseType">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter course type"
                value={courseType}
                onChange={handleCourseTypeChange}
                maxLength={40}
              />
              <Form.Label>Course Type</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formCourseName">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter Course name"                
                value={courseName}
                onChange={handleCourseNameChange}
                maxLength={40}
              />
              <Form.Label>Course Name</Form.Label>
            </Form.Floating>
          </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Floating>
                <Form.Control
                  className="w-md-75 label-with-underline"
                  type="text"
                  placeholder="Enter your location"
                  value={studentLocation}
                  onChange={handleStudentLocationChange}
                  maxLength={40}
                />
                <Form.Label>Location</Form.Label>
              </Form.Floating>
            </Form.Group>
        </div>
      </div>

      <div id="forProfessional" style={{ display: selectedType === "Professional" ? "block" : "none" }}>
        <div className="contact-heading">
          Are you a
          <span className="font-weight-600 text-black"> Working Professional?</span>
        </div>
        <div className="pt-md-2 pt-0">
          <Form.Group controlId="formCompanyName">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter your Company name"
                value={companyName}
                onChange={handleCompanyNameChange}
                maxLength={40}
              />
              <Form.Label>Company Name</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter your location"
                value={studentLocation}
                onChange={handleStudentLocationChange}
                maxLength={40}
              />
              <Form.Label>Current Location</Form.Label>
            </Form.Floating>
          </Form.Group>

          <Form.Group controlId="formDesignation">
            <Form.Floating>
              <Form.Control
                className="w-md-75 label-with-underline"
                type="text"
                placeholder="Enter your designation"
                value={designation}
                onChange={handleDesignationChange}
                maxLength={40}
              />
              <Form.Label>Designation</Form.Label>
            </Form.Floating>
          </Form.Group>

            <Form.Group controlId="formExperience">
              <Form.Floating>
                <Form.Control
                  className="w-md-75 label-with-underline"
                  type="text"
                  placeholder="Enter your experience"
                  value={experience}
                  onChange={handleExperienceChange}
                  maxLength={40}
                />
                <Form.Label>Total Experience</Form.Label>
              </Form.Floating>
            </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default CreatorForm3;
