"use client";

import { useState } from "react";

export default function StudentSignup() {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !cnic || !email || !password || !confirm) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/auth/student-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, cnic, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        window.location.href = "/studentLogin";
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      alert("Server error, please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10">
        <h2 className="text-3xl font-bold mb-4">FYP Portal</h2>
        <p className="text-gray-500 mb-6">Student Sign Up</p>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 mb-4 rounded"
            placeholder="Enter your full name"
          />

          <label className="block mb-2">CNIC (13 digits, auto formatted)</label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "").slice(0, 13);
              let formatted = raw;
              if (raw.length > 5 && raw.length <= 12) {
                formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
              }
              if (raw.length === 13) {
                formatted = `${raw.slice(0, 5)}-${raw.slice(5, 12)}-${raw.slice(12)}`;
              }
              setCnic(formatted);
            }}
            className="w-full border px-4 py-2 mb-4 rounded"
            placeholder="e.g. 12345-1234567-1"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 mb-4 rounded"
            placeholder="Enter your email"
          />

          <label className="block mb-2">Create Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer select-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label className="block mb-2">Confirm Password</label>
          <div className="relative mb-6">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              placeholder="Confirm password"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2 cursor-pointer select-none"
            >
              {showConfirm ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Already registered?{" "}
          <a href="/studentLogin" className="text-blue-600 underline font-medium hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to</h2>
        <h3 className="text-3xl font-semibold mb-6">FYP Portal</h3>
        <p className="text-center text-gray-300 max-w-md">
          Manage your Final Year Project Seamlessly.
        </p>
        <img
          src="/illustration.png"
          alt="Illustration"
          className="mt-10 w-2/3"
        />
      </div>
    </div>
  );
}
