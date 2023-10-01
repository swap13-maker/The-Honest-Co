import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function ContactForm3({ onRadioChange }) {
  const [selectedTimeline, setSelectedTimeline] = useState(
    localStorage.getItem("selectedTimeline") || ""
  );

  const [selectedBudget, setSelectedBudget] = useState(
    localStorage.getItem("selectedBudget") || ""
  );

  const handleRadioChange = (event, stateUpdater) => {
    const { value } = event.target;

    // Update the state with the selected value
    stateUpdater(value);

    // Update localStorage with the selected value
    localStorage.setItem(
      stateUpdater === setSelectedTimeline
        ? "selectedTimeline"
        : "selectedBudget",
      value
    );
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedTimeline)
                }
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedTimeline)
                }
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedTimeline)
                }
              />{" "}
              <span>6 - 12 months</span>
            </label>
          </div>

          <div className="cat comedy">
            <label>
              <input
                type="radio"
                name="timeline"
                value="< 12 onths"
                checked={selectedTimeline === "< 12 onths"}
                onChange={(event) =>
                  handleRadioChange(event, setSelectedTimeline)
                }
              />{" "}
              <span>&lt; 12 onths</span>
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedBudget)
                }
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedBudget)
                }
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedBudget)
                }
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
                onChange={(event) =>
                  handleRadioChange(event, setSelectedBudget)
                }
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
