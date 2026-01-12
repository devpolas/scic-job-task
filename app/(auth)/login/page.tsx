import Link from "next/link";

export default function LoginPage() {
  return (
    <div className='flex flex-1 justify-center items-center px-4 border rounded sm:max-w-sm md:max-w-md'>
      <div className='shadow-lg p-8 rounded-2xl w-full max-w-md'>
        <div className='mb-6 text-center'>
          <h1 className='font-bold text-2xl'>Welcome back</h1>
          <p className='mt-1 text-sm'>Sign in to your account</p>
        </div>

        <form className='space-y-5'>
          <div>
            <label htmlFor='email' className='block mb-1 font-medium text-sm'>
              Email
            </label>
            <input
              required
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block mb-1 font-medium text-sm'
            >
              Password
            </label>
            <input
              required
              id='password'
              name='password'
              type='password'
              placeholder='********'
              className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
            />
          </div>

          <div className='flex justify-between items-center text-sm'>
            <label className='flex items-center gap-2 text-gray-600'>
              <input type='checkbox' className='rounded' />
              Remember me
            </label>
            <Link href='#' className='hover:underline'>
              Forgot password?
            </Link>
          </div>

          <button
            type='submit'
            className='py-2.5 border rounded-lg w-full font-medium transition hover:cursor-pointer'
          >
            Sign In
          </button>
        </form>

        <div className='flex items-center gap-3 my-6'>
          <div className='flex-1 h-px' />
          <span className='text-xs'>OR</span>
          <div className='flex-1 h-px' />
        </div>

        <button
          type='button'
          className='py-2.5 border rounded-lg w-full font-medium text-sm transition hover:cursor-pointer'
        >
          Continue with Google
        </button>

        <p className='mt-6 text-sm text-center'>
          Don&apos;t have an account?{" "}
          <Link type='button' href='/signup' className='hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
