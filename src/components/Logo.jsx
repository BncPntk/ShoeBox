import { Link } from 'react-router-dom';

function Logo({ variant, size }) {
  const getLogoType = (variant) => (variant === 'white' ? '/logo_white.svg' : '/logo.svg');

  return (
    <Link to='/'>
      <img src={getLogoType(variant)} alt='ShoeBox logo' className={`h-${size} w-auto`} />
    </Link>
  );
}

export default Logo;
