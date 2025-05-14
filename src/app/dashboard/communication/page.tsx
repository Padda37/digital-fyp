"use client";

import React from "react";

export default function CommunicationPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat Room</h2>
      <p>Select a user (Supervisor/Admin) to start chatting.</p>

      <div style={{ marginTop: "30px" }}>
        <select style={{ padding: "10px", width: "300px" }}>
          <option>-- Select Supervisor/Admin --</option>
          <option>Dr. Naveed</option>
          <option>Admin</option>
        </select>

        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            height: "300px",
            padding: "10px",
            overflowY: "scroll",
            background: "#f9f9f9",
          }}
        >
          <p style={{ fontStyle: "italic" }}>No messages yet...</p>
        </div>

        <div style={{ display: "flex", marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Type your message"
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}