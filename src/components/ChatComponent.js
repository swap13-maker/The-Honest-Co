import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import chatImg from "../images/chat.png";
import logo from "../images/logo.png";
import "./Chat.css";

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openForm = () => {
    setIsChatOpen(true);
  };

  const closeForm = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      <button className="open-button" onClick={openForm}>
        <img src={chatImg} />
      </button>

      {isChatOpen && (
        <div
          className="chat-popup"
          style={{ display: isChatOpen ? "block" : "none" }}
        >
          {" "}
          <form action="mail.php" method="POST" className="form-container">
            <div className="flex-box">
              <img src={logo} width={100} />
              <div class="text">
                <div className="chat-heading">Unlock Answers</div>
                <div className="chat-sub-heading">
                  Complete the inquiry form:
                </div>
              </div>
            </div>

            <Form.Group controlId="formName">
              <Form.Floating>
                <Form.Control type="text" placeholder="Enter your name" name="name" />
                <Form.Label>Name</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Floating>
                <Form.Control type="email" placeholder="Enter your email" name="email" />
                <Form.Label>Email</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Floating>
                <Form.Control
                  type="number"
                  placeholder="Enter your contact"
                  maxLength={10}
                  name="mobile"
                />
                <Form.Label>Contact Number</Form.Label>
              </Form.Floating>
            </Form.Group>

            <Form.Group controlId="formQuery">
              <Form.Floating>
                <Form.Control type="text" placeholder="Enter your query" name="query" />
                <Form.Label>Query</Form.Label>
              </Form.Floating>
            </Form.Group>

            <div className="row py-4">
              <div className="col-md-12 col-12">Area of Interest</div>
              <div className="col-md-4 col-12">
                <Form.Group className="pt-1" controlId="architectural">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Architectural"
                    label="Architectural"
                  />
                </Form.Group>

                <Form.Group className="pt-1" controlId="industrial">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Industrial"
                    label="Industrial"
                  />
                </Form.Group>
              </div>
              <div className="col-md-8 col-12">
                <Form.Group className="pt-1" controlId="applicationDevelopment">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Application Development"
                    label="Application Development"
                  />
                </Form.Group>

                <Form.Group className="pt-1" controlId="contentCreation">
                  <Form.Check
                    className="chat-label"
                    type="checkbox"
                    value="Content Creation"
                    label="Content Creation"
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
            {/* <button
              type="button"
              className="btn btn-danger"
              onClick={closeForm}
            >
              Close
            </button> */}
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
