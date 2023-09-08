import React from "react";
import { Form } from "react-bootstrap";

function ContactForm3() {
  return (
    <div className="py-4">
      <div className="contact-heading">
        <span className="font-weight-600 text-black"> Project Details</span>
      </div>

      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black"> Estimated date of delivery or timeline in months</div>

        <Form.Select aria-label="Select Box">
          <option value="">Select an option</option>
          <option value="option1">Option 1 - Text 1</option>
          <option value="option2">Option 2 - Text 2</option>
          <option value="option3">Option 3 - Text 3</option>
        </Form.Select>

      </div>

      <div className="pt-4">
        <div className="contact-sub-heading font-weight-600 text-black"> Tentative budget for the project</div>

        <Form.Select aria-label="Select Box">
          <option value="">Select an option</option>
          <option value="option1">Option 1 - Text 1</option>
          <option value="option2">Option 2 - Text 2</option>
          <option value="option3">Option 3 - Text 3</option>
        </Form.Select>

      </div>


      <div>
          <div class="cat action">
            <label>
                <input type="radio" name="category" value="action" /> <span>Action</span>
            </label>
        </div>

        <div class="cat comedy">
            <label>
                <input type="radio" name="category" value="comedy" /> <span>Comedy</span>
            </label>
        </div>
      </div>

      
    </div>
  );
}

export default ContactForm3;
