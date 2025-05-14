import { NextResponse } from "next/server";

// Dummy user
const users = [
  {
    cnic: "34501-6333743-5",
    password: "12345678",
    name: "Aamir",
    email: "aamirpadda@gmail.com",
  },
];

export async function POST(req: Request) {
  try {
    const { cnic, password } = await req.json();

    const user = users.find(
      (u) => u.cnic === cnic && u.password === password
    );

    if (user) {
      return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
