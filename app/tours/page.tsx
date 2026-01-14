import TourCard from "@/components/tour/tour-card";
import { getTours } from "@/lib/tours";
import { Tour } from "@/types/tour";

export default async function ProductsPage() {
  const tours: Tour[] = await getTours();
  return (
    <div className='my-10'>
      <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
        Our Tours
      </h1>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8'>
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
}
