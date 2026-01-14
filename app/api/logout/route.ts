import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  req.cookies.delete("token");
  return NextResponse.json({ message: "logout successfully" }, { status: 200 });
}
