"use client";
import useAuth from "@/store/useAuth";
import NavLink from "../nav-link/navLink";

export default function NavAuthButtons() {
  const { isAuth, handleLogout } = useAuth();
  return (
    <>
      {isAuth ? (
        <button
          className='mr-4 hover:underline hover:cursor-pointer'
          type='button'
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <>
          <NavLink href='/login'>login</NavLink>
          <NavLink href='/signup'>signup</NavLink>
        </>
      )}
    </>
  );
}
