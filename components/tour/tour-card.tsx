export default function TourCard() {
  return (
    <div className='border rounded max-w-sm text-center transition-all hover:-translate-y-0.5 duration-150 hover:cursor-pointer'>
      <div className='mx-auto p-8 border rounded-t w-full'>
        <h1>Paris</h1>
      </div>
      <div className='p-4'>
        <h1 className='mt-2 text-2xl'>Paris City Tour</h1>
        <p className='text-sm'>
          <span className='underline underline-offset-4'>3 days</span> · Eiffel
          Tower · Louvre Museum
        </p>
        <p className='text-sm underline underline-offset-4'>Family Tour</p>
        <p className='text-lg'>$499</p>
      </div>
      <div className='p-4 text-center'>
        <button
          type='button'
          role='button'
          className='shadow-md mt-4 p-2 border hover:border-dashed rounded hover:underline transition-all hover:-translate-y-0.5 active:translate-y-0 duration-150 hover:cursor-pointer'
        >
          Details
        </button>
      </div>
    </div>
  );
}
