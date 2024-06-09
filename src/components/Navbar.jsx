import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='logo'>SARASWATHI</h2>
      <div className='navlinks'>
        <NavLink exact to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/complaint' activeClassName='active'>
          Complaint
        </NavLink>
        <NavLink to='/calendar' activeClassName='active'>
          Calendar
        </NavLink>
      </div>
      <hr className='navbar-line' />
    </div>
  );
};

export default Navbar;
