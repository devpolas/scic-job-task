import SignupForm from "@/components/auth/signup-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className='flex flex-1 justify-center items-center px-4 border rounded sm:max-w-sm md:max-w-md'>
      <div className='shadow-lg p-8 rounded-2xl w-full max-w-md'>
        <div className='mb-6 text-center'>
          <h1 className='font-bold text-2xl'>Welcome</h1>
          <p className='mt-1 text-sm'>Create an account</p>
        </div>

        <SignupForm />

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
