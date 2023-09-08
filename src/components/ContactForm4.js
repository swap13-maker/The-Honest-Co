import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ContactForm4({onMoreChange}) {
  const [more, setMore] = useState("");

  useEffect(() => {
    const storedMore = localStorage.getItem("more");

    if (storedMore) setMore(storedMore);
  }, []);

  const handleMoreChange = (event) => {
    const newMore = event.target.value;
    setMore(newMore);
    onMoreChange(newMore);
    localStorage.setItem("more", newMore);
  };

  return (
    <div className="py-4 flex-direction-column">
      <div className="contact-heading">
        How to <span className="font-weight-600 text-black"> Proceed!</span>
      </div>
      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black"> Send us more information and let us get back to you</div>
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control className="w-75" type="text" placeholder="Type here" value={more} onChange={handleMoreChange} />
            <Form.Label>Type here</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>

      <Form.Group className="pt-4" controlId="formCheckbox">
          <Form.Check className="w-75" type="checkbox" label="Click here to download a Work Document of our sample NDA. We prefer to keep the NDA in place while conceptulizing details of your project" />
      </Form.Group>
    </div>
  );
}

export default ContactForm4;
