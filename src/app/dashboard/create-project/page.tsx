"use client";
import { useState } from "react";

export default function CreateProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [supervisor, setSupervisor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Submitted:", {
      title,
      description,
      teamMembers,
      supervisor,
    });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "30px" }}>
        Create Final Year Project
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Project Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Team Members (comma separated)
          </label>
          <input
            type="text"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Supervisor</label>
          <select
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          >
            <option value="">-- Select Supervisor --</option>
            <option value="Dr. Ahmed">Dr. Ahmed</option>
            <option value="Prof. Khan">Prof. Khan</option>
            <option value="Dr. Nida">Dr. Nida</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}