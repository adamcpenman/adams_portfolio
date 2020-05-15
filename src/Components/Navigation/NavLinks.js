import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink to='/about'>About Me</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  );
};

export default NavLinks;
