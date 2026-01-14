import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const authPath = ["/login", "/signup"];
const protectedPath = [];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathName = request.nextUrl.pathname;
  const isAuthPath = authPath.some((path) => path === pathName);
  if (token && isAuthPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${pathName}`, request.url)
    );
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ["/login", "/signup"],
};
