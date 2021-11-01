import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono role='navigation'">
      <Link to="/" className="pl-4">
        EGG
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">Home</Link>
          <Link className="p-4" to="/menu">Menu</Link>
          <Link className="p-4" to="/abouts">Abouts</Link>
          <Link className="p-4" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};