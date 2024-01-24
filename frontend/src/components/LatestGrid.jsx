function LatestGrid({ data }) {
  return (
    <div className='grid md:grid-cols-3 auto-rows-[350px] gap-3 px-2 sm:px-20 md:px-4 lg:px-0'>
      {data.map((shoe, i) => (
        <div
          key={i}
          className={`${i === 1 || i === 5 || i === 13 ? 'md:col-span-2' : ''}${
            i === 6 ? 'md:row-span-2' : ''
          } flex flex-col items-center justify-center border-2 rounded-md bg-cover bg-center relative transition duration-300 hover:scale-[1.03] hover:cursor-pointer`}
        >
          <img
            src={`/shoes/news/${i + 1}.jpg`}
            loading='lazy'
            className='object-cover w-full h-full min-h-full'
          />
          <div className='absolute left-0 top-3'>
            <h2 className='px-2 py-1 text-2xl text-gray-100 bg-customDarkBrown'>{shoe.name}</h2>
            <p className='px-2 py-1 text-xl bg-gray-200 text-customDarkBrown'>{shoe.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestGrid;
