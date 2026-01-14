import { getTours } from "@/lib/tours";
import TourCard from "./tour-card";
import { Tour } from "@/types/tour";

export default async function TopTour() {
  const tours: Tour[] = await getTours();
  const topTours = tours.slice(0, 4);
  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4'>
      {topTours.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
  );
}
