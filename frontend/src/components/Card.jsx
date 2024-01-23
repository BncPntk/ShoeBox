function Card({ brand, name, price }) {
  return (
    <div className='max-w-[270px] max-h-[350px] bg-customDarkPurple p-2 mb-20 mx-2 transition duration-300 ease-out hover:scale-105 hover:cursor-pointer flex flex-col'>
      <div className='max-w-[254px] max-h-[254px]'>
        <img src='/shoes/placeholder.png' alt='' />
      </div>
      <h3 className='pt-1 font-medium text-white text-md'>{`${brand} ${name}`}</h3>
      <div className='flex-grow'></div>
      <p className='pt-1 text-xl text-white font-base'>
        <span>{price}</span> €
      </p>
    </div>
  );
}

export default Card;
