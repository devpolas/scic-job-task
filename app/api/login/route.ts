import { getUserByEmail } from "@/lib/users";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "email and password are required!" },
      { status: 400 }
    );
  }

  const user = await getUserByEmail(email);

  if (!user) {
    return NextResponse.json(
      { message: "invalid credentials!" },
      { status: 400 }
    );
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    return NextResponse.json(
      { message: "invalid credentials!" },
      { status: 401 }
    );
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

  const jwtOptions: SignOptions = { expiresIn: 60 * 60 * 24 * 30 };

  const token = jwt.sign({ id: user.id }, JWT_SECRET, jwtOptions);

  const response = NextResponse.json(
    { message: "login successfully" },
    { status: 200 }
  );
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
