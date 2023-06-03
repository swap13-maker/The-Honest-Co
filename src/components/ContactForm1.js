import React from "react";
import { Form } from "react-bootstrap";

function ContactForm1() {
  return (
    <div>
      <div className="contact-heading">
        <span className="font-weight-600 text-black">Got ideas?</span> We have
        got the skills. <br />
        <span className="font-weight-600 text-black">Let's team up.</span>
      </div>

      <div className="contact-form py-5">
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control type="text" placeholder="Enter your name" />
            <Form.Label>Name</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formOrganization">
          <Form.Floating>
            <Form.Control type="text" placeholder="Enter your organization" />
            <Form.Label>Organization</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Floating>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Label>Email</Form.Label>
          </Form.Floating>
        </Form.Group>

        <Form.Group controlId="formNumber">
          <Form.Floating>
            <Form.Control type="number" placeholder="Enter your number" />
            <Form.Label>Number</Form.Label>
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
