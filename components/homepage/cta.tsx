import Link from "next/link";

export default function CallToAction() {
  return (
    <section className='py-16'>
      <div className='mx-auto px-6 max-w-5xl'>
        <div className='p-10 border rounded-2xl text-center'>
          <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
            Ready for Your Next Adventure?
          </h1>
          <p className='mt-4'>
            Discover amazing destinations and book unforgettable experiences.
          </p>

          <div className='flex sm:flex-row flex-col justify-center gap-4 mt-8'>
            <Link
              href='/tours'
              className='px-6 py-3 border rounded-lg font-medium transition'
            >
              Explore Tours
            </Link>
            <Link
              href='/signup'
              className='px-6 py-3 border rounded-lg font-medium transition'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
