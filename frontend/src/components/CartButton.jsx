import { useState } from 'react';
import { Bag, BagFill } from 'react-bootstrap-icons';

function CartButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? (
        <BagFill className='text-customDarkPurple' size={30} />
      ) : (
        <Bag className='text-customPurple' size={30} />
      )}
    </div>
  );
}

export default CartButton;
