import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
     <div className='bg-white h-auto w-full flex justify-between items-center'>
      <NavLink to="/" className='p-6 text-3xl font-bold font-serif pl-2'>
        Resume Builder
      </NavLink>

      <div className='flex justify-around space-x-8 p-6 text-xl'>
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : ''
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to="/template"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : ''
          }
        >
          Resume Templates
        </NavLink>

        <NavLink
          to="/example"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : ''
          }
        >
          Resume Example
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? 'border-2 border-blue-600 px-5 py-1 bg-blue-400 text-white'
              : 'border-2 border-blue-600 px-5 py-1 hover:bg-blue-400'
          }
        >
          My Account
        </NavLink>
        
      </div>
    </div>
  );
}

export default Nav;
