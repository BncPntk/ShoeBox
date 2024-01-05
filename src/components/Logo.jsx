import { Link } from 'react-router-dom';

function Logo({ variant, sizeClass }) {
  const getLogoType = (variant) => (variant === 'white' ? '/logo_white.svg' : '/logo.svg');

  const styles = [sizeClass || 'size-10', 'w-auto'].join(' ');

  return (
    <Link to='/'>
      <img src={getLogoType(variant)} alt='ShoeBox logo' className={styles} />
    </Link>
  );
}

export default Logo;
