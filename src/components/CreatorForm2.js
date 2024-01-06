import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm2({ onProjectChange, onRadioChange, onCheckboxesChange }) {
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
          <div className="col-md-4 col-6">
            <Form.Group className="pt-md-4 pt-2" controlId="Creative">
              <Form.Check
                type="checkbox"
                value="Creative"
                label="Creative"
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("Creative")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-6">
            <Form.Group className="pt-md-4 pt-2" controlId="Technology">
              <Form.Check
                type="checkbox"
                value="Technology"
                label="Technology"
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("Technology")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-6">
            <Form.Group className="pt-md-4 pt-2" controlId="Management">
              <Form.Check
                type="checkbox"
                value="Management"
                label="Management"
                className="media-label-font-14"
                checked={selectedCheckboxes.includes("Management")}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="pt-md-4 pt-2" controlId="formProject">
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
          <span className="font-weight-600 text-black"> Become a Partner</span>
        </div>

        <Form.Group className="pt-md-4 pt-2" controlId="radioGroup1">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option1"
            value="Option 1"
            label="Are you a manufacturer?"
            checked={selectedOption === "Option 1"}
            onChange={handleRadioChange}
          />
        </Form.Group>

        <Form.Group className="pt-md-4 pt-2" controlId="radioGroup2">
          <Form.Check
            type="radio"
            name="radioGroup"
            id="option2"
            value="Option 2"
            label="Are you an individual contributor?"
            checked={selectedOption === "Option 2"}
            onChange={handleRadioChange}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default CreatorForm2;
