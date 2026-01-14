import { postUser } from "@/lib/users";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const hasPassword = await bcrypt.hash(password, 12);

  const isSuccess = await postUser({ id, name, email, password: hasPassword });

  if (!isSuccess) {
    const response = NextResponse.json(
      { message: "fail to signup" },
      { status: 400 }
    );
    return response;
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

  const jwtOptions: SignOptions = { expiresIn: 60 * 60 * 24 * 30 };

  const token = jwt.sign({ id }, JWT_SECRET, jwtOptions);

  const response = NextResponse.json(
    { message: "signup successfully" },
    { status: 201 }
  );
  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
