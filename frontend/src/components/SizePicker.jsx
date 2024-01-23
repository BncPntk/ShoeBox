import { useFilterContext } from '../contexts/FilterContext';

let sizeArr = [];
for (let i = 27; i <= 49; i += 0.5) {
  sizeArr.push(i);
}

function SizePicker() {
  const { pickedSize, onSetPickedSize } = useFilterContext();

  return (
    <div className='px-4 mt-8 mb-12 divide-y-2 divide-gray-300 lg:px-0 lg:mt-0 divide-solid'>
      <h4 className='mb-1.5 text-2xl font-medium'>Size</h4>
      <ul className='grid grid-cols-5 gap-4 px-4 py-4 sm:grid-cols-9 lg:grid-cols-3 justify-items-center '>
        {sizeArr.map((size, i) => (
          <li
            className={`${
              pickedSize === size ? 'bg-customBrown text-white' : ''
            } flex items-center justify-center w-14 h-10 lg:w-10 lg:h-8 text-center border-[1.4px] border-solid rounded border-customBrown transition duration-150 hover:scale-110 hover:cursor-pointer`}
            key={i}
            onClick={() => onSetPickedSize(size)}
          >
            <p className='text-lg font-semibold'>{size}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SizePicker;
