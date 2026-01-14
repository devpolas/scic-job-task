"use client";

import { useRouter } from "next/navigation";
import { useId } from "react";

export default function SignupForm() {
  const router = useRouter();
  const id = useId();
  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries()) as {
      name: string;
      email: string;
      password: string;
      passwordConfirm: string;
    };

    if (formData.password !== formData.passwordConfirm) {
      alert("Password Doesn't Match!");
      return;
    }

    const res = await fetch("/api/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formData, id }),
    });
    if (res.status === 201) {
      router.push("/");
    }
  }
  return (
    <form onSubmit={handleSignup} className='space-y-5'>
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
        <label htmlFor='password' className='block mb-1 font-medium text-sm'>
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
  );
}
