import React, { useState } from 'react';

import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import NavLinks from './NavLinks';
import './MainNav.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>

      <div>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        {/* <h1 className='main-navigation__title'>
          <Link to='/'>Home</Link>
        </h1> */}
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MainNavigation;
