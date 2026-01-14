import { User } from "@/types/user";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const data = await fs.readFile(filePath, "utf-8");
  const users: User[] = await JSON.parse(data);

  return users.find((user) => user.email === email);
}

export async function getUserById(id: string): Promise<User | undefined> {
  const data = await fs.readFile(filePath, "utf-8");
  const users: User[] = await JSON.parse(data);

  return users.find((user) => user.id === id);
}

export async function postUser(user: User): Promise<boolean> {
  const data = await fs.readFile(filePath, "utf-8");
  const users: User[] = JSON.parse(data);

  const exists = users.some((u) => u.email === user.email);
  if (exists) return false;

  users.push(user);

  await fs.writeFile(filePath, JSON.stringify(users, null, 2));

  return true;
}
