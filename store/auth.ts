import { User } from "@/types/user";

// const WEBSITE_URL = "http://localhost:3000";

export async function logout() {
  await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getMe(): Promise<User | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/me`, {
    credentials: "include",
  });
  if (!res.ok) return null;
  const user = await res.json();
  return user || null;
}
