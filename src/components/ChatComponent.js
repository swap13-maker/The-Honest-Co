import React, { useState } from "react";
import { Form } from "react-bootstrap";
import chatImg from "../images/chat.png";
import logo from "../images/logo.svg";
import succLogo from "../images/succLogo.png";
import cross from "../images/cross.png";
import "./Chat.css";

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    interests: [],
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openForm = () => {
    setIsChatOpen(true);
    setFormSubmitted(false);
  };

  const closeForm = () => {
    setIsChatOpen(false);
    setFormSubmitted(false);
    setFormData({
      // Clear the form data
      name: "",
      email: "",
      mobile: "",
      query: "",
      interests: [],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "interests") {
      // Handle interests checkboxes
      const isChecked = e.target.checked;
      const interest = e.target.value;

      if (isChecked) {
        setFormData({
          ...formData,
          interests: [...formData.interests, interest],
        });
      } else {
        setFormData({
          ...formData,
          interests: formData.interests.filter((item) => item !== interest),
        });
      }
    } else {
      // Handle other form fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.query
    ) {
      alert("Name, Email, Mobile, and Query are required fields.");
      return;
    }

    // Show the formSubmitted message
    setIsChatOpen(false);
    setFormSubmitted(true);

    // Send data to the API
    fetch("https://thehonestco.in/test.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        setFormData({
          // Clear the form data
          name: "",
          email: "",
          mobile: "",
          query: "",
          interests: [],
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <button className="open-button" onClick={openForm}>
        <img src={chatImg} width={35} alt="Chat" />
      </button>

      {isChatOpen && (
        <div className="chat-popup">
          <form
            method="POST"
            className="form-container"
            onSubmit={handleSubmit}
          >
            <div className="flex-box">
              <img src={logo} width={100} alt="Logo" />
              <div className="text">
                <div className="chat-heading">Send us your inquiry! </div>
                <div className="chat-sub-heading">
                  Someone from our team would reach out to you:
                </div>
              </div>
            </div>

            <Form.Group controlId="formName">
              <Form.Floating>
                <Form.Control
                  type="text"
                  className="label-with-underline"
                  placeholder="Enter your name"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
                <Form.Label>Name</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Floating>
                <Form.Control
                  type="email"
                  className="label-with-underline"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                />
                <Form.Label>Email</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Floating>
                <Form.Control
                  type="number"
                  className="label-with-underline"
                  placeholder="Enter your contact"
                  maxLength={10}
                  name="mobile"
                  onChange={handleInputChange}
                  value={formData.mobile}
                  required
                />
                <Form.Label>Contact Number</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formQuery">
              <Form.Floating>
                <Form.Control
                  type="text"
                  className="label-with-underline"
                  placeholder="Enter your query"
                  name="query"
                  onChange={handleInputChange}
                  value={formData.query}
                  required
                />
                <Form.Label>Query</Form.Label>
              </Form.Floating>
            </Form.Group>

            <div className="row py-4">
              <div className="col-md-12 col-12 pb-3">Area of Interest</div>
              <div className="col-md-8 col-12">
              <Form.Group className="pt-2" controlId="applicationDevelopment">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Custom Software Development"
                    label="Custom Software Development"
                    name="interests"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="pt-1" controlId="contentCreation">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Mobile Application Development"
                    label="Mobile Application Development"
                    name="interests"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="pt-2" controlId="industrial">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="AI and ML Solutions"
                    label="AI and ML Solutions"
                    name="interests"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                
              </div>
            </div>

            <button
              type="submit"
              className="d-flex mx-auto w-100 justify-content-center form-btn"
            >
              Get started with us!
            </button>
            <a type="button" className="close-btn" onClick={closeForm}>
              <img src={cross} alt="Close" />
            </a>
          </form>
        </div>
      )}

      {formSubmitted && (
        <div className="chat-popup">
          <div className="form-container">
            <div className="row pb-4">
              <div className="col-12 resp-succ-img py-3">
                <img src={succLogo} width={80} alt="logo" />
              </div>
              <div className="col-12 resp-succ-head pb-3">
                Your inquiry has been
                <br />
                received!
              </div>
              <div className="col-12 resp-succ-bottom">
                and we're ready to bring your idea to life!
              </div>
            </div>

            <button
              onClick={closeForm}
              className="d-flex mx-auto w-100 justify-content-center form-btn"
            >
              Have another query?
            </button>
            <a type="button" className="close-btn" onClick={closeForm}>
              <img src={cross} alt="Close" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
