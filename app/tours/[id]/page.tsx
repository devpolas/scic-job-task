import BookedButton from "@/components/book/book-button";
import { getTourById } from "@/lib/tours";
import { Tour } from "@/types/tour";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour: Tour | undefined = await getTourById(id);

  if (!tour) return notFound();

  return (
    <section className='mt-4 w-full'>
      {/* Hero Image */}
      <div className='relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]'>
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className='rounded-t object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='bottom-8 left-6 md:left-12 absolute text-white'>
          <h1 className='font-bold text-3xl md:text-5xl'>{tour.title}</h1>
          <p className='mt-2 md:mt-4 text-sm md:text-base'>{tour.location}</p>
          <p className='mt-1 md:mt-2 text-sm md:text-base'>
            ⭐ {tour.rating} ({tour.reviews} reviews)
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='gap-10 grid grid-cols-1 lg:grid-cols-3 mx-auto px-6 py-10 max-w-7xl'>
        {/* Left Column */}
        <div className='space-y-10 lg:col-span-2'>
          {/* Description */}
          <div>
            <h2 className='mb-4 font-semibold text-2xl md:text-3xl'>
              About this Tour
            </h2>
            <p className='text-gray-600 leading-relaxed'>{tour.description}</p>
          </div>

          {/* Info Items */}
          <div className='gap-6 grid grid-cols-2 md:grid-cols-3 mt-6'>
            <InfoItem label='Duration' value={tour.duration} />
            <InfoItem label='Category' value={tour.category} />
            <InfoItem label='Location' value={tour.location} />
          </div>

          {/* Highlights */}
          <div>
            <h3 className='mb-4 font-semibold text-xl md:text-2xl'>
              Highlights
            </h3>
            <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2'>
              {tour.highlights.map((item) => (
                <li
                  key={item}
                  className='px-4 py-2 border rounded-lg text-sm transition'
                >
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className='lg:top-24 lg:sticky flex flex-col justify-center items-center shadow-lg p-6 border rounded-xl'>
          <p className='text-gray-500 text-sm'>Starting from</p>
          <p className='mb-4 font-bold text-3xl md:text-4xl'>${tour.price}</p>
          <BookedButton />
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className='p-4 border rounded-lg'>
      <p className='text-gray-500 text-xs'>{label}</p>
      <p className='font-semibold'>{value}</p>
    </div>
  );
}
