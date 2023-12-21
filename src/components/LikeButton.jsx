import { useState } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons';

function LikeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? (
        <HeartFill className='text-red-600' size={30} />
      ) : (
        <Heart className='text-red-600' size={30} />
      )}
    </div>
  );
}

export default LikeButton;
