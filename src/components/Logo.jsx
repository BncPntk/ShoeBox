import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className=''>
      <img src='/logo.svg' alt='ShoeBox logo' className='h-11' />
    </Link>
  );
}

export default Logo;
