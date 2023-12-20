import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src='/logo.svg' alt='ShoeBox logo' />
    </Link>
  );
}

export default Logo;
