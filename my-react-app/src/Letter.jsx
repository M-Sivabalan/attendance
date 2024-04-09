import React, { useState } from "react";

function Letter() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fromEmail, setFromEmail] = useState("");

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleToEmailChange = (event) => {
    setToEmail(event.target.value);
  };

  const handleFromEmailChange = (event) => {
    setFromEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendLetter = () => {
    // Code to send the letter
    console.log(`Letter from ${from} (${fromEmail}) to ${to} (${toEmail}):\n${message}`);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-xs shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Letter</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              type="text"
              value={from}
              onChange={handleFromChange}
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">From email</span>
            </label>
            <input
              type="email"
              value={fromEmail}
              onChange={handleFromEmailChange}
              placeholder="Enter your email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <input
              type="text"
              value={to}
              onChange={handleToChange}
              placeholder="Enter recipient's name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipient's email</span>
            </label>
            <input
              type="email"
              value={toEmail}
              onChange={handleToEmailChange}
              placeholder="Enter recipient's email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary"
              onClick={handleSendLetter}
              disabled={!from || !fromEmail || !to || !toEmail || !message}
            >
              Send Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;