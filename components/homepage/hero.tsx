import Link from "next/link";

export default function HeroSection() {
  return (
    <div className='flex justify-center items-center mt-2 border rounded w-full min-h-[40vh]'>
      <div>
        <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-3xl'>
          Welcome to Next World!
        </h1>
        <p className='mt-3 text-sm text-center underline underline-offset-8'>
          We providing world class services for tourism
        </p>
        <div className='text-center'>
          <Link href='/login'>
            <button
              type='button'
              role='button'
              className='shadow-md mt-4 p-2 border hover:border-dashed rounded hover:underline transition-all hover:-translate-y-0.5 active:translate-y-0 duration-150 hover:cursor-pointer'
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
