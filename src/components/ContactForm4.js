import React from "react";
import { Form } from "react-bootstrap";

function ContactForm4() {
  return (
    <div>
      <div className="contact-heading">
        How to <span className="font-weight-600 text-black"> Proceed!</span>
      </div>

      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black"> Send us more information and let us get back to you</div>
        <Form.Group className="" controlId="formProject">
          <Form.Floating>
            <Form.Control
              type="text"
              name="project"
              placeholder="Type here"
            />
            <Form.Label>Type here</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>

      <Form.Group className="pt-4" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Click here to download a Work Document of our sample NDA. We prefer to keep the NDA in place while conceptulizing details of your project" />
      </Form.Group>
      
    </div>
  );
}

export default ContactForm4;
