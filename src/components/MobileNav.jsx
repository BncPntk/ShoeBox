import { NavLink } from 'react-router-dom';
import Button from './Button';
import LikeButton from './LikeButton';
import CartButton from './CartButton';

function MobileNav({ navMobile }) {
  return (
    <ul
      className={
        !navMobile ? 'hidden' : 'absolute bg-gray-100 w-full h-screen px-4 py-16 text-2xl overflow-auto'
      }
    >
      <li className='py-8'>
        <NavLink to='/latest'>New & Featured</NavLink>
      </li>
      <li className='py-8'>
        <NavLink to='/men'>Men</NavLink>
      </li>
      <li className='py-8'>
        <NavLink to='/women'>Women</NavLink>
      </li>
      <li className='py-8'>
        <NavLink to='/kids'>Kids</NavLink>
      </li>
      <li className='py-8'>
        <NavLink to='/sale'>
          <Button>On Sale</Button>
        </NavLink>
      </li>
      <div className='flex my-16 justify-around'>
        <li>
          <NavLink to='/liked'>
            <LikeButton />
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            <CartButton />
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </div>
    </ul>
  );
}

export default MobileNav;
