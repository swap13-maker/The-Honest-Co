import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ContactForm2({ onProjectChange, onRadioChange }) {
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
            <Form.Group className="pt-4" controlId="architectural">
              <Form.Check type="checkbox" value="Architectural" label="Architectural" />
            </Form.Group>

            <Form.Group className="pt-4" controlId="industrial">
              <Form.Check type="checkbox" value="Industrial" label="Industrial" />
            </Form.Group>
          </div>
          <div className="col-md-4 col-12">
            <Form.Group className="pt-4" controlId="applicationDevelopment">
              <Form.Check type="checkbox" value="Application Development" label="Application Development" />
            </Form.Group>

            <Form.Group className="pt-4" controlId="contentCreation">
              <Form.Check type="checkbox" value="Content Creation" label="Content Creation" />
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
          How can we
          <span className="font-weight-600 text-black"> help you!</span>
        </div>

        <Form.Group className="pt-4" controlId="radioGroup1">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option1"
            value="Option 1"
            label="Need assistance with getting started?"
            checked={selectedOption === "Option 1"}
            onChange={handleRadioChange}
          />
        </Form.Group>

        <Form.Group className="pt-4" controlId="radioGroup2">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option2"
            value="Option 2"
            label="Have a plan, need a team to execute?"
            checked={selectedOption === "Option 2"}
            onChange={handleRadioChange}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default ContactForm2;
