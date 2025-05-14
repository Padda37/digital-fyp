"use client";

import { useState } from "react";

export default function StudentLogin() {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!cnic || !password) {
      alert("Please enter CNIC and Password.");
      return;
    }

    try {
      const res = await fetch("/api/auth/student-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnic, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ " + data.message);
        window.location.href = "/dashboard";
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      alert("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10">
        <h2 className="text-3xl font-bold mb-4">FYP Portal</h2>
        <p className="text-gray-500 mb-6">Login to your account</p>

        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <label className="block mb-2">CNIC</label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            className="w-full border px-4 py-2 mb-4 rounded"
            placeholder="Enter your CNIC"
          />

          <label className="block mb-2">Password</label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer select-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="text-right text-sm mb-6">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Don’t have an account?{" "}
          <a
            href="/student/signup"
            className="text-blue-600 underline font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
        <h3 className="text-3xl font-semibold mb-6">FYP Portal</h3>
        <p className="text-center text-gray-300 max-w-md">
          Login to manage your final year project easily.
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
