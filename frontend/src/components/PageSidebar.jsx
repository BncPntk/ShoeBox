import { useFilterContext } from '../contexts/FilterContext';
import Button from './Button';
import ColorPicker from './ColorPicker';
import PriceRangePicker from './PriceRangePicker';
import SizePicker from './SizePicker';

function PageSidebar() {
  const { onSetClearFilters, onSetFilter } = useFilterContext();

  const handleClearAndFilterClick = () => {
    onSetClearFilters();
  };

  return (
    <div className='hidden h-full lg:flex'>
      <div className='px-2 py-28'>
        <SizePicker />
        <PriceRangePicker />
        <ColorPicker />
        <div className='flex justify-center gap-4'>
          <Button
            rounded={false}
            bgColor={`bg-gray-50`}
            className={
              'w-24 h-12 text-sm font-medium text-gray-900 border-2 border-gray-900 hover:bg-gray-300 active:bg-gray-400'
            }
            onClick={handleClearAndFilterClick}
          >
            Clear Filters
          </Button>
          <Button rounded={false} className={'w-24 h-12 text-sm'} onClick={onSetFilter}>
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageSidebar;
