"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">FYP Portal</h1>
      <p className="text-gray-600 mb-10">Select your role to continue</p>

      <div className="flex gap-6">
        <Link
          href="/studentLogin"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Student
        </Link>
        <Link
          href="/supervisorLogin"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Supervisor
        </Link>
        <Link
          href="/adminLogin"
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
        >
          Admin
        </Link>
      </div>
    </main>
  );
}