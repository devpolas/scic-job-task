import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getUserById } from "@/lib/users";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Please login" }, { status: 401 });
  }

  const JWT_SECRET = process.env.JWT_SECRET!;
  // Verify token and get payload
  const decoded = jwt.verify(token, JWT_SECRET) as {
    id: string;
    iat: number;
    exp: number;
  };

  const user = getUserById(decoded.id);

  if (!user) {
    return NextResponse.json(
      { message: "please create an account first" },
      { status: 401 }
    );
  }
  return NextResponse.json(
    { message: "successfully fetch me", user: user },
    { status: 200 }
  );
}
