import React from 'react';
import logo from '../../images/logo.png';
import Bulb from '../Icons/Bulb';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
const Header = ({ onOpen }) => {
  return (
    <header className='p-2  bg-white px-4 py-2 shadow-sm fixed  w-screen top-0 z-40'>
      <div className='flex items-center  justify-between'>
        <div className='flex items-center gap-3 pl-5'>
          <img src={logo} alt='logo' className='w-[35px] h-[35px]' />
          <p className='hidden sm:inline-block text-l md:text-xl'>
            Bulkky Business
          </p>
        </div>
        <div className='hidden  md:flex grow justify-center items-center gap-8'>
          <Link
            activeClass='active'
            className='header-menu-item'
            to='section-1'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Home
          </Link>
          <Link
            activeClass='active'
            className='header-menu-item'
            to='section-2'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            About
          </Link>
          <Link
            activeClass='active'
            className='header-menu-item'
            to='section-3'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Service
          </Link>

          <Link
            activeClass='active'
            className='header-menu-item'
            to='section-5'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Contact
          </Link>
        </div>
        <div>
          <button
            onClick={() => onOpen()}
            className='bg-red-400  p-[.5px] text-[.9em] min-w-[100px] rounded hover:bg-red-500 transition duration-300 hover:shadow-lg'
          >
            <div className='flex items-center justify-center gap-2 text-white'>
              <p>Login</p>
              <i class='fa-solid fa-arrow-right-to-bracket'></i>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
