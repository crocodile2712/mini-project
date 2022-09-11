import React from "react";
import "./Componentcss.css";
import SendIcon from "@mui/icons-material/Send";
function Newsletter() {
  return (
    <div className="newsletter">
      <h1 className="newsletter-title">Newsletter</h1>
      <div className="newsletter-des">
        Get timely updates from your favorite products
      </div>
      <div className="newsletter-form">
        <input
          className="newsletter-input"
          placeholder="Your Email"
          type="email"
          required
        ></input>
        <button className="newsletter-button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
