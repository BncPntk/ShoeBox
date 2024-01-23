import ColorPicker from './ColorPicker';
import PriceRangePicker from './PriceRangePicker';
import SizePicker from './SizePicker';

function PageSidebar({ onSizePick }) {
  return (
    <div className='hidden h-full lg:flex'>
      <div className='px-2 py-28'>
        <SizePicker onSizePick={onSizePick} />
        <PriceRangePicker />
        <ColorPicker />
      </div>
    </div>
  );
}

export default PageSidebar;
