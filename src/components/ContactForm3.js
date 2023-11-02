import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ContactForm3({ onTimelineChange, onBudgetChange }) {
  const [selectedTimeline, setSelectedTimeline] = useState(
    localStorage.getItem("selectedTimeline") || ""
  );

  const [selectedBudget, setSelectedBudget] = useState(
    localStorage.getItem("selectedBudget") || ""
  );

  const handleTimelineChange = (event) => {
    const { value } = event.target;
    setSelectedTimeline(value);

    // Update localStorage with the selected value
    localStorage.setItem("selectedTimeline", value);

    // Call the parent component's handler
    onTimelineChange(value);
  };

  const handleBudgetChange = (event) => {
    const { value } = event.target;
    setSelectedBudget(value);

    // Update localStorage with the selected value
    localStorage.setItem("selectedBudget", value);

    onBudgetChange(value);
  };

  return (
    <section className="py-4">
      <div className="contact-heading">
        <span className="font-weight-600 text-black"> Project Details</span>
      </div>

      <section className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black">
          Estimated date of delivery or timeline in months
        </div>

        <div className="pt-3 height-70px">
          <div className="cat action">
            <label>
              <input
                type="radio"
                name="timeline"
                value="< 1 month"
                checked={selectedTimeline === "< 1 month"}
                onChange={handleTimelineChange}
              />{" "}
              <span>&lt; 1 month</span>
            </label>
          </div>

          <div className="cat action">
            <label>
              <input
                type="radio"
                name="timeline"
                value="1 - 6 months"
                checked={selectedTimeline === "1 - 6 months"}
                onChange={handleTimelineChange}
              />{" "}
              <span>1 - 6 months</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="timeline"
                value="6 - 12 months"
                checked={selectedTimeline === "6 - 12 months"}
                onChange={handleTimelineChange}
              />{" "}
              <span>6 - 12 months</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="timeline"
                value="< 12 months"
                checked={selectedTimeline === "< 12 months"}
                onChange={handleTimelineChange}
              />{" "}
              <span>&lt; 12 months</span>
            </label>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black">
          Tentative budget for the project
        </div>

        <div className="pt-3 height-70px">
          <div className="cat action">
            <label>
              <input
                type="radio"
                name="budget"
                value="< $50k"
                checked={selectedBudget === "< $50k"}
                onChange={handleBudgetChange}
              />{" "}
              <span>&lt; $50k</span>
            </label>
          </div>

          <div className="cat action">
            <label>
              <input
                type="radio"
                name="budget"
                value="$ 50k - 100k"
                checked={selectedBudget === "$ 50k - 100k"}
                onChange={handleBudgetChange}
              />{" "}
              <span>$ 50k - 100k</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="budget"
                value="$ 100k - 200k"
                checked={selectedBudget === "$ 100k - 200k"}
                onChange={handleBudgetChange}
              />{" "}
              <span>$ 100k - 200k</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="budget"
                value="< $200k +"
                checked={selectedBudget === "< $200k +"}
                onChange={handleBudgetChange}
              />{" "}
              <span>&lt; $200k +</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm3;
