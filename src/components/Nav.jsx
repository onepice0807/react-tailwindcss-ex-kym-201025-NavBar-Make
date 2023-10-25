import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className='flex items-center justify-between w-full h-full px-10'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>deerBooks</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Feature</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'>
          <button className='mr-4 text-black bg-transparent border-none'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='mr-4 md:hidden' onClick={() => setNav(!nav)}>
          {!nav ? (
            <FaAlignJustify className='w-5' />
          ) : (
            <FaTimes className='w-5' />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
