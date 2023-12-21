import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src='/logo.svg' alt='ShoeBox logo' className='size-20' />
    </Link>
  );
}

export default Logo;
