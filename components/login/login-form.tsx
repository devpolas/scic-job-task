"use client";

import Link from "next/link";

export default function LoginForm() {
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const formValues = Object.fromEntries(data.entries()) as {
      email: string;
      password: string;
      remember?: string;
    };
    console.log(formValues);
  }
  return (
    <form onSubmit={handleLogin} className='space-y-5'>
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
        <label htmlFor='password' className='block mb-1 font-medium text-sm'>
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
  );
}
