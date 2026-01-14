import Image from "next/image";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ariana Lopez",
      role: "Traveler",
      comment:
        "This platform made my trip planning effortless. The booking process was smooth and stress-free.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "James Carter",
      role: "Adventure Seeker",
      comment:
        "Amazing destinations and great customer support. I’ll definitely book again!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Sophia Nguyen",
      role: "Solo Explorer",
      comment:
        "Everything was perfectly organized. The tour exceeded my expectations.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
    },
  ];

  return (
    <section className='py-16'>
      <div className='mx-auto px-6 max-w-6xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
            What Our Travelers Say
          </h1>
          <p className='mt-3'>Real experiences from real travelers</p>
        </div>

        {/* Reviews */}
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='shadow-sm hover:shadow-md p-6 border rounded-xl transition'
            >
              {/* User */}
              <div className='flex items-center gap-4'>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className='rounded-full object-cover'
                />
                <div>
                  <h3 className='font-semibold'>{review.name}</h3>
                  <p className='text-xs'>{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className='flex mt-3'>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className='text-yellow-400'>
                    ★
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className='mt-4 text-gray-600 text-sm'>“{review.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
