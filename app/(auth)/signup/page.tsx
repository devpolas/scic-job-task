import Link from "next/link";

export default function SignupPage() {
  return (
    <div className='flex flex-1 justify-center items-center px-4 border rounded sm:max-w-sm md:max-w-md'>
      <div className='shadow-lg p-8 rounded-2xl w-full max-w-md'>
        <div className='mb-6 text-center'>
          <h1 className='font-bold text-2xl'>Welcome</h1>
          <p className='mt-1 text-sm'>Create an account</p>
        </div>

        <form className='space-y-5'>
          <div>
            <label htmlFor='name' className='block mb-1 font-medium text-sm'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Enter Your Name'
              required
              className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
            />
          </div>
          <div>
            <label htmlFor='email' className='block mb-1 font-medium text-sm'>
              Email
            </label>
            <input
              required
              id='email'
              type='email'
              name='email'
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
              type='password'
              name='password'
              placeholder='********'
              className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
            />
          </div>
          <div>
            <label
              htmlFor='passwordConfirm'
              className='block mb-1 font-medium text-sm'
            >
              Password Confirm
            </label>
            <input
              required
              id='passwordConfirm'
              type='password'
              name='passwordConfirm'
              placeholder='********'
              className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
            />
          </div>

          <button
            type='submit'
            className='py-2.5 border rounded-lg w-full font-medium transition hover:cursor-pointer'
          >
            Signup
          </button>
        </form>

        <div className='flex items-center gap-3 my-6'>
          <div className='flex-1 h-px' />
          <span className='text-xs'>OR</span>
          <div className='flex-1 h-px' />
        </div>

        <button className='py-2.5 border rounded-lg w-full font-medium text-sm transition hover:cursor-pointer'>
          Continue with Google
        </button>

        <p className='mt-6 text-sm text-center'>
          Already have an account?{" "}
          <Link href='/login' className='hover:underline'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
