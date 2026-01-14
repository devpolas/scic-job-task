import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "logout successfully" },
    { status: 200 }
  );

  // Remove cookie by setting it to empty and expired
  response.cookies.set("token", "", {
    path: "/", // match original path
    maxAge: 0, // expires immediately
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}
