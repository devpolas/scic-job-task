"use client";
import useAuth from "@/store/useAuth";
import { useRouter } from "next/navigation";

export default function BookedButton() {
  const { isAuth } = useAuth();
  const router = useRouter();
  function handleBook() {
    if (!isAuth) {
      router.push("/login");
      return;
    }
    alert("Successfully Booked!");
  }
  return (
    <button
      className='p-2 border hover:border-none rounded hover:underline underline-offset-4 transition-all hover:-translate-y-0.5 active:translate-y-0 duration-150 hover:cursor-pointer'
      type='button'
      onClick={handleBook}
    >
      Book Now
    </button>
  );
}
