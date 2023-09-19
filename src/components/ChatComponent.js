import React, { useState } from "react";
import chatImg from "../images/chat.png";
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
          {/* Remove 'id' since we're not using it */}
          <form action="" className="form-container">
            <h1>Chat</h1>

            <label htmlFor="msg">
              <b>Message</b>
            </label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" className="btn btn-success">
              Send
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeForm}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
