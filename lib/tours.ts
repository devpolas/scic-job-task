import fs from "fs/promises";
import path from "path";
import { Tour } from "@/types/tour";

export async function getTours(): Promise<Tour[]> {
  const filePath = path.join(process.cwd(), "data/tours.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getTourById(id: string): Promise<Tour | undefined> {
  const filePath = path.join(process.cwd(), "data/tours.json");
  const data = await fs.readFile(filePath, "utf-8");
  const tours: Tour[] = JSON.parse(data);
  return tours.find((tour) => tour.id === id);
}
