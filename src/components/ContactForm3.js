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

      <section className="media-pt-6">
        <div className="contact-sub-heading font-weight-600 text-black">
          Tentative budget for the project
        </div>

        <div className="pt-3 height-70px">
          <div className="cat action">
            <label>
              <input
                type="radio"
                name="budget"
                value="< $ 5000"
                checked={selectedBudget === "< $ 5000"}
                onChange={handleBudgetChange}
              />{" "}
              <span>{"< $ 5000"}</span>
            </label>
          </div>

          <div className="cat action">
            <label>
              <input
                type="radio"
                name="budget"
                value="$ 5K - 10K"
                checked={selectedBudget === "$ 5K - 10K"}
                onChange={handleBudgetChange}
              />{" "}
              <span>{"$ 5K - 10K"}</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="budget"
                value="$ 10K - 25K"
                checked={selectedBudget === "$ 10K - 25K"}
                onChange={handleBudgetChange}
              />{" "}
              <span>{"$ 10K - 25K"}</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="budget"
                value="> $ 25K"
                checked={selectedBudget === "> $ 25K"}
                onChange={handleBudgetChange}
              />{" "}
              <span>{"> $ 25K"}</span>
            </label>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactForm3;
