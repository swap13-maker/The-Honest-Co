import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ContactForm2({ onProjectChange, onRadioChange, onCheckboxesChange }) {
  const [project, setProject] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  useEffect(() => {
    const storedProject = localStorage.getItem("project");
    const storedOption = localStorage.getItem("selectedOption");
    const storedSelectedCheckboxes = JSON.parse(localStorage.getItem("selectedCheckboxes"));

    if (storedProject) setProject(storedProject);
    if (storedOption) setSelectedOption(storedOption);
    if (storedSelectedCheckboxes) setSelectedCheckboxes(storedSelectedCheckboxes);
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

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedCheckboxes = [...selectedCheckboxes];

    if (event.target.checked) {
      updatedCheckboxes.push(value);
    } else {
      const index = updatedCheckboxes.indexOf(value);
      if (index !== -1) {
        updatedCheckboxes.splice(index, 1);
      }
    }

    setSelectedCheckboxes(updatedCheckboxes);
    onCheckboxesChange(updatedCheckboxes); // Trigger the parent component
    localStorage.setItem("selectedCheckboxes", JSON.stringify(updatedCheckboxes));
  };

  // Use this effect to trigger CustomerContact when checkboxes change
  useEffect(() => {
    onCheckboxesChange(selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <div className="py-4">
      <div className="contact-heading">
        Let us know your
        <span className="font-weight-600 text-black"> Areas of interest!</span>
      </div>

      <div className="contact-form py-md-4">
        <div className="row">
          <div className="col-md-4 col-7">
            <Form.Group className="pt-4" controlId="applicationDevelopment">
              <Form.Check
                type="checkbox"
                value="Custom Software Development"
                label="Custom Software Development"
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("Custom Software Development")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Form.Group className="pt-4" controlId="contentCreation">
              <Form.Check
                type="checkbox"
                value="Mobile Application Development"
                label="Mobile Application Development"
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("Mobile Application Development")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-5">
            <Form.Group className="pt-4" controlId="industrial">
              <Form.Check
                type="checkbox"
                value="AI and ML Solutions  "
                label="AI and ML Solutions  "
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("AI and ML Solutions  ")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="pt-4" controlId="formProject">
          <Form.Floating>
            <Form.Control
              as="textarea"
              name="project"
              placeholder="Tell us about your project"
              value={project}
              className="w-100 label-with-underline"
              onChange={handleProjectChange}
            />
            <Form.Label>Tell us about your project</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>

      <div className="contact-form py-md-4">
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
