import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContactForm4({ onMoreChange,handleCheckboxDownload }) {
  const [more, setMore] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    handleCheckboxDownload(checked);
  };

  return (
    <div className="py-4 flex-direction-column">
      <div className="contact-heading">
        How to <span className="font-weight-600 text-black"> Proceed!</span>
      </div>
      <div className="contact-main-heading font-weight-600 text-black text-decoration-underline text-uppercase pt-4">
        <Link
          target="_blank"
          to="https://calendly.com/the-honest-co"
          className="text-black text-decoration-underline text-uppercase"
        >
          SET UP cALL WITH US{" "}
        </Link>
        <svg
          width="20"
          height="14"
          viewBox="-10 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black">
          {" "}
          Send us more information and let us get back to you
        </div>
        <Form.Group controlId="formName">
          <Form.Floating>
            <Form.Control
              as="textarea"
              className="w-100 label-with-underline"
              placeholder="Type here"
              value={more}
              onChange={handleMoreChange}
            />
            <Form.Label>Type here</Form.Label>
          </Form.Floating>
        </Form.Group>
      </div>

      <Form.Group className="pt-4" controlId="formCheckbox">
        <Form.Check
          className="w-100 d-flex media-checkbox"
          type="checkbox"
          label="Click here to download a of our sample NDA. We prefer to keep the NDA in place while conceptualising details of your project"
          onChange={handleCheckboxChange}
        />
      </Form.Group>
    </div>
  );
}

export default ContactForm4;
