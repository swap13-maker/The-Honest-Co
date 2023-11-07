import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CreatorForm4({ onPositionChange }) {
  const [selectedPosition, setSelectedPosition] = useState(
    localStorage.getItem("selectedPosition") || ""
  );

  const handlePositionChange = (event) => {
    const { value } = event.target;
    setSelectedPosition(value);

    // Update localStorage with the selected value
    localStorage.setItem("selectedPosition", value);

    // Call the parent component's handler
    onPositionChange(value);
  };
  
  return (
    <div className="py-4 flex-direction-column">
      <div className="contact-heading">
        How to <span className="font-weight-600 text-black"> Proceed!</span>
      </div>
      <div className="pt-4">
        <div className="contact-main-heading font-weight-600 text-black text-decoration-underline text-uppercase pt-4">
          SET UP cALL WITH US
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
        <div className="creator-sub-heading text-black pt-4">
          Become a part of our community
        </div>
        {/* test */}
        <div className="pt-4">
          <div className="cat action">
            <label>
              <input
                type="radio"
                name="position"
                value="Open Position"
                checked={selectedPosition === "Open Position"}
                onChange={handlePositionChange}
              />{" "}
              <span>Open Position</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="position"
                value="Internship"
                checked={selectedPosition === "Internship"}
                onChange={handlePositionChange}
              />{" "}
              <span>Internship</span>
            </label>
          </div>
        </div>
        {/* test end */}
      </div>
    </div>
  );
}

export default CreatorForm4;
