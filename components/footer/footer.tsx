"use client";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-8 p-4 border-t rounded-t'>
      <div className='flex flex-row gap-4'>
        <Link className='hover:underline' href='/'>
          Home
        </Link>
        <Link className='hover:underline' href='#'>
          Contact
        </Link>
        <Link className='hover:underline' href='#'>
          About
        </Link>
        <Link className='hover:underline' href='#'>
          Privacy policy
        </Link>
      </div>
      <div className='flex flex-row gap-4'>
        <Linkedin className='hover:cursor-pointer' size={25} />
        <Facebook className='hover:cursor-pointer' size={25} />
        <Youtube className='hover:cursor-pointer' size={25} />
      </div>
      <div>
        <p className='text-sm'>
          Copyright &copy; {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </div>
  );
}
