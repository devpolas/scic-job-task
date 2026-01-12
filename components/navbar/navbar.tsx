import NavLink from "../nav-link/navLink";

export default function Navbar() {
  return (
    <nav className='mx-8 py-4 border-b rounded-b'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/products'>Products</NavLink>
        </div>
        <div className='flex flex-row gap-4'>
          <NavLink href='/login'>login</NavLink>
          <NavLink href='/signup'>signup</NavLink>
        </div>
      </div>
    </nav>
  );
}
