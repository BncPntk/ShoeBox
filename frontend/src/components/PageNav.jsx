import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { List, X } from 'react-bootstrap-icons';
import Button from './Button';
import LikeButton from './LikeButton';
import CartButton from './CartButton';
import '../index.css';

import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { useFilterContext } from '../contexts/FilterContext';

function PageNav() {
  const { onSetClearFilters } = useFilterContext();
  const [navMobile, setnavMobile] = useState(false);

  function handleClick() {
    setnavMobile(() => !navMobile);
  }

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setnavMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='w-full h-[60px] z-20 bg-gray-100 fixed top-0 left-0 block'>
      <div className='max-w-[1152px] px-4 flex justify-between items-center h-full mx-auto'>
        <Logo sizeClass={'size-11'} />

        <ul className='hidden md:flex'>
          <li>
            <NavLink
              to='/latest'
              onClick={onSetClearFilters}
              className='hover:text-customBrown hover:underline underline-offset-8 active:text-customDarkBrown '
            >
              New & Featured
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/men'
              onClick={onSetClearFilters}
              className='hover:text-customBrown hover:underline underline-offset-8 active:text-customDarkBrown '
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/women'
              onClick={onSetClearFilters}
              className='hover:text-customBrown hover:underline underline-offset-8 active:text-customDarkBrown '
            >
              Women
            </NavLink>
          </li>
          <li onClick={onSetClearFilters}>
            <NavLink
              to='/kids'
              onClick={onSetClearFilters}
              className='hover:text-customBrown hover:underline underline-offset-8 active:text-customDarkBrown '
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink to='/sale' onClick={onSetClearFilters}>
              <Button>On Sale</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/liked' onClick={onSetClearFilters}>
              <LikeButton />
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' onClick={onSetClearFilters}>
              <CartButton />
            </NavLink>
          </li>
          <li onClick={onSetClearFilters}>
            <NavLink to='/login' onClick={onSetClearFilters}>
              Login
            </NavLink>
          </li>
        </ul>
        <div className='cursor-pointer md:hidden' onClick={handleClick}>
          {!navMobile ? (
            <List className='flex md:hidden text-customPurple hover:text-customDarkPurple' size={42} />
          ) : (
            <X size={42} className='flex md:hidden text-customPurple hover:text-customDarkPurple' />
          )}
        </div>
      </div>

      <MobileNav navMobile={navMobile} />
    </nav>
  );
}

export default PageNav;
