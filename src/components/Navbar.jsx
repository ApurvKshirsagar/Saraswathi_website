import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='logo'>SARASWATHI</h2>
      <div className='navlinks'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          Home
        </NavLink>
        <NavLink
          to='/complaint'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Complaint
        </NavLink>
        <NavLink
          to='/calendar'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Calendar
        </NavLink>
      </div>
      <hr className='navbar-line' />
    </div>
  );
};

export default Navbar;
