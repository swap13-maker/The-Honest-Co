import React from "react";
import { Form } from "react-bootstrap";

function ContactForm2() {
  return (
    <div>
      <div className="contact-heading">
        Let us know your
        <span className="font-weight-600 text-black"> Areas of interest!</span>
      </div>

      <div className="contact-form py-4">
        <Form.Group className="pt-4" controlId="architectural">
          <Form.Check type="checkbox" label="Architectural" />
        </Form.Group>

        <Form.Group className="pt-4" controlId="industruial">
          <Form.Check type="checkbox" label="Industruial" />
        </Form.Group>

        <Form.Group className="pt-4" controlId="applicationDevelopment">
          <Form.Check type="checkbox" label="Application Development" />
        </Form.Group>

        <Form.Group className="pt-4" controlId="contentCreation">
          <Form.Check type="checkbox" label="Content Creation" />
        </Form.Group>

        <Form.Group className="pt-4" controlId="formProject">
          <Form.Floating>
            <Form.Control
              type="text"
              name="project"
              placeholder="Tell us about your project"
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
          <Form.Check type="radio" name="radioGroup" id="option1" value="Option 1" label="Need assistance with getting started?" />
        </Form.Group>

        <Form.Group className="pt-4" controlId="radioGroup2">
          <Form.Check type="radio" name="radioGroup" id="option2" value="Option 2" label="Have a plan, need a team to exicute?" />
        </Form.Group>
      </div>
    </div>
  );
}

export default ContactForm2;
