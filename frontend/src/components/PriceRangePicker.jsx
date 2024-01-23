function PriceRangePicker() {
  return (
    <div className='px-4 mb-12 divide-y-2 divide-gray-300 lg:px-0 divide-solid'>
      <h4 className='mb-1.5 text-2xl font-medium '>Price</h4>
      <div className='grid grid-cols-1 py-4 text-start sm:grid-cols-2 justify-items-center lg:gap-2'>
        <div className='flex flex-col'>
          <label htmlFor='priceMin' className='order-1 hover:cursor-pointer lg:text-end'>
            Minimum
          </label>
          <input
            id='priceMin'
            type='number'
            min='0'
            inputMode='numeric'
            className='w-80 sm:w-60 lg:w-24 px-1 py-1 text-end border-[1.4px] border-solid rounded border-customBrown hover:cursor-pointer order-2 mb-4 lg:mb-4'
            placeholder='0 €'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='priceMax' className='order-3 hover:cursor-pointer lg:text-end'>
            Maximum
          </label>
          <input
            id='priceMax'
            type='number'
            min='0'
            className='w-80 sm:w-60 lg:w-24  px-2 py-1 border-[1.4px] border-solid rounded border-customBrown text-end hover:cursor-pointer order-4'
            placeholder='2,000 €'
          />
        </div>
      </div>
    </div>
  );
}

export default PriceRangePicker;
