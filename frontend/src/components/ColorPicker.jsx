import { useFilterContext } from '../contexts/FilterContext';
import { colors } from '../data/colors';

function ColorPicker() {
  const { pickedColor, onSetPickedColor } = useFilterContext();

  return (
    <div className='px-4 mb-12 divide-y-2 divide-gray-300 divide-solid lg:px-0'>
      <h4 className='mb-1.5 text-2xl font-medium '>Color</h4>
      <ul className='grid grid-cols-4 gap-2 px-2 py-4 sm:grid-cols-8 lg:grid-cols-3'>
        {colors.map((color, i) => (
          <li
            key={i}
            className={`${
              pickedColor === color.name ? 'bg-gray-300' : ''
            } flex flex-col transition duration-200 rounded`}
          >
            <span
              className='border-[1.4px] border-gray-400 border-solid transition duration-200 rounded-full lg:h-9 lg:w-9 h-12 w-12 hover:cursor-pointer hover:scale-105'
              style={{ backgroundColor: color.hexCode }}
              onClick={() => onSetPickedColor(color.name)}
            ></span>
            <p className='text-sm opacity-70'>{color.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
