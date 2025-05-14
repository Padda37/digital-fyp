// src/app/api/auth/student-signup/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, cnic, email, password } = body;

    // Dummy validation
    if (!name || !cnic || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔒 Ye jagah database logic aayega (for now just simulate)
    console.log("User registered:", { name, cnic, email });

    return NextResponse.json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
