import { Link } from 'react-router-dom';

function Card({ id, brand, name, price, img, gender }) {
  const backendBaseUrl = 'https://raw.githubusercontent.com/BncPntk/ShoeBox/main/backend';

  return (
      <Link
          to={`/shoes/${gender}/${id}`}
          className='max-w-[270px] max-h-[350px] bg-customDarkPurple p-2 mb-20 mx-2 transition duration-300 ease-out hover:scale-105 hover:cursor-pointer flex flex-col'
      >
        <div className='max-w-[254px] max-h-[254px]'>
          <img src={`${backendBaseUrl}${img}`} alt={`${brand} ${name}`} />
        </div>
        <h3 className='pt-1 font-medium text-white text-md'>{`${brand} ${name}`}</h3>
        <div className='flex-grow'></div>
        <p className='pt-1 text-xl text-white font-base'>
          <span>{price}</span> €
        </p>
      </Link>
  );
}

export default Card;
