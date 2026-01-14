import { Tour } from "@/types/tour";

export async function getTours(): Promise<Tour[]> {
  const res = await fetch(`${process.env.WEBSITE_URL}/tour.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }

  const tours: Tour[] = await res.json();
  return tours;
}

export async function getTourById(id: string): Promise<Tour | undefined> {
  const res = await fetch(`${process.env.WEBSITE_URL}/tour.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }

  const tours: Tour[] = await res.json();
  return tours.find((tour) => tour.id === id);
}
