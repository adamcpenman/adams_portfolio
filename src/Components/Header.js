import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className='headerText'>
      <div className='headerBox' id='ScrollToHeader'>
        <Link
          activeClass='active'
          to='ScrollToAbout'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={20}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
        ></Link>
      </div>
    </div>
  );
}

export default Header;
