import NavLink from "../nav-link/navLink";

export default function NavAuthButtons() {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <button
          className='mr-4 hover:underline hover:cursor-pointer'
          type='button'
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
