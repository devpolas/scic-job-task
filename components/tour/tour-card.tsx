import Image from "next/image";
import Link from "next/link";
import BookedButton from "../book/book-button";

type Tour = {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
};

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className='border rounded'>
      <Link href={`/tours/${tour.id}`} className='block'>
        <div className='hover:shadow-lg overflow-hidden transition'>
          <div className='relative w-full h-48'>
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className='object-cover'
            />
          </div>

          <div className='p-4'>
            <h3 className='font-bold text-lg'>{tour.title}</h3>
            <p className='text-gray-500 text-sm'>{tour.location}</p>

            <div className='flex justify-between items-center mt-3 text-sm'>
              <span>
                ⭐ {tour.rating} ({tour.reviews})
              </span>
              <span className='font-semibold'>${tour.price}</span>
            </div>
          </div>
        </div>
      </Link>
      <hr />
      <div className='flex flex-row justify-around p-2'>
        <Link href={`/tours/${tour.id}`} className='block'>
          <button
            className='p-2 border hover:border-none rounded hover:underline underline-offset-4 transition-all hover:-translate-y-0.5 active:translate-y-0 duration-150 hover:cursor-pointer'
            type='button'
          >
            View Details
          </button>
        </Link>
        <BookedButton />
      </div>
    </div>
  );
}
