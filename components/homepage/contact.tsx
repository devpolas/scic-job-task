import { Mail, PhoneCall, HeartPlus, MapPin } from "lucide-react";
import ContactWithIcon from "../contact/contact-with-icon";

export default function Contact() {
  return (
    <div className='my-16'>
      <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
        Get in Touch
      </h1>

      <div className='flex justify-center items-center my-8'>
        <div className='flex flex-row gap-16 p-4 border rounded min-w-4xl'>
          <div className='flex-1'>
            <h1 className='mb-2 text-2xl text-center'>Contact Us</h1>
            <hr className='text-gray-400' />
            <ContactWithIcon
              icon={Mail}
              label='Email'
              contact='contact@nextour.com'
            />
            <ContactWithIcon
              icon={HeartPlus}
              label='Support'
              contact='support@nextour.com'
            />
            <ContactWithIcon
              icon={PhoneCall}
              label='Hello'
              contact='+880 1XXXXXXXXX'
            />
            <ContactWithIcon
              icon={MapPin}
              label='Location'
              contact='Airport Road, Dhaka - 1200'
            />
          </div>

          <div className='bg-gray-400 w-px h-110 rotate-6' />

          <div className='flex-1'>
            <h1 className='mb-2 text-2xl text-center'>Contact Form</h1>
            <hr className='text-gray-400' />
            <form>
              <div className='mt-4'>
                <label
                  htmlFor='name'
                  className='block mb-1 font-medium text-sm'
                >
                  Full Name
                </label>
                <input
                  required
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your name'
                  className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
                />
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='email'
                  className='block mb-1 font-medium text-sm'
                >
                  Your Email
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

              <div className='mt-4'>
                <label
                  htmlFor='message'
                  className='block mb-1 font-medium text-sm'
                >
                  Your Message
                </label>
                <textarea
                  required
                  id='message'
                  rows={5}
                  name='message'
                  placeholder='Enter Your Message'
                  className='px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 w-full text-sm'
                />
              </div>
              <div className='mt-4 text-center'>
                <button
                  className='p-2 border hover:border-dashed rounded w-full transition-all hover:-translate-y-0.5 active:translate-y-0 duration-150 hover:cursor-pointer'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
