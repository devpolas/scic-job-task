import { getTours } from "@/lib/tours";
import { Tour } from "@/types/tour";
import TourCard from "../tour/tour-card";

export default async function TopTour() {
  const tours: Tour[] = await getTours();
  const topTours = tours.slice(0, 4);
  return (
    <div className='my-16'>
      <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
        Top Tours
      </h1>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8'>
        {topTours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
}
