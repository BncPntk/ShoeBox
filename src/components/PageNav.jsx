import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function PageNav() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <NavLink to='/latest'>New & Featured</NavLink>
        </li>
        <li>
          <NavLink to='/men'>Men</NavLink>
        </li>
        <li>
          <NavLink to='/women'>Women</NavLink>
        </li>
        <li>
          <NavLink to='/kids'>Kids</NavLink>
        </li>
        <li>
          <NavLink to='/sale'>On Sale</NavLink>
        </li>
        <li>
          <NavLink to='/liked'>Liked</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
