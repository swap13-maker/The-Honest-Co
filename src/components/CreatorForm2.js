import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm2({ onProjectChange, onRadioChange }) {
  const [project, setProject] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const storedProject = localStorage.getItem("project");
    const storedOption = localStorage.getItem("selectedOption");
    if (storedProject) setProject(storedProject);
    if (storedOption) setSelectedOption(storedOption);
  }, []);

  const handleProjectChange = (event) => {
    const newProject = event.target.value;
    setProject(newProject);
    onProjectChange(newProject);
    localStorage.setItem("project", newProject);
  };

  const handleRadioChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onRadioChange(newOption);
    localStorage.setItem("selectedOption", newOption);
  };

  return (
    <div className="py-4">
      <div className="contact-heading">
        Let us know your
        <span className="font-weight-600 text-black"> Areas of interest!</span>
      </div>

      <div className="contact-form py-4">
        <div className="row">
          <div className="col-md-4 col-12">
            <Form.Group className="pt-4" controlId="creative">
              <Form.Check type="checkbox" value="Creative" label="Creative" />
            </Form.Group>
          </div>
          <div className="col-md-4 col-12">
            <Form.Group className="pt-4" controlId="technology">
              <Form.Check type="checkbox" value="Technology" label="Technology" />
            </Form.Group>
          </div>
          <div className="col-md-4 col-12">
            <Form.Group className="pt-4" controlId="management">
              <Form.Check type="checkbox" value="Management" label="Management" />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="pt-4" controlId="formProject">
          <Form.Floating>
            <Form.Control
              type="text"
              name="project"
              placeholder="Tell us about your project"
              value={project}
              onChange={handleProjectChange}
            />
            <Form.Label>Tell us about your project</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>

      <div className="contact-form py-4">
        <div className="contact-heading">
          <span className="font-weight-600 text-black"> Become a Partner</span>
        </div>

        <Form.Group className="pt-4" controlId="radioGroup1">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option1"
            value="Lorem Ipsum 1"
            label="Lorem Ipsum 1"
            checked={selectedOption === "Option 1"}
            onChange={handleRadioChange}
          />
        </Form.Group>

        <Form.Group className="pt-4" controlId="radioGroup2">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option2"
            value="Lorem Ipsum 2"
            label="Lorem Ipsum 2"
            checked={selectedOption === "Option 2"}
            onChange={handleRadioChange}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default CreatorForm2;
