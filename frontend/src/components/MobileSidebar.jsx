import { useEffect, useState } from 'react';
import { Sliders, X } from 'react-bootstrap-icons';
import ColorPicker from './ColorPicker';
import PriceRangePicker from './PriceRangePicker';
import Button from './Button';
import SizePicker from './SizePicker';

function MobileSidebar({ onSizePick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <div className='flex lg:hidden max-w-[1152px] mt-24 px-6 relative'>
        <div
          className='w-full transition duration-500 h-14 bg-customDarkBrown hover:bg-customBrown hover:cursor-pointer'
          onClick={handleToggleMenu}
        >
          <div className='flex items-center justify-between h-full px-6 text-3xl font-medium text-white'>
            <p>Filter</p>
            <Sliders />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 z-50 min-w-full min-h-full overflow-auto bg-slate-50'>
          {/* FILTER MENU */}
          <div className='absolute top-0 left-0 w-full h-full'>
            <div className='flex justify-between p-4 text-2xl font-medium text-gray-700 bg-gray-100'>
              <p className='mx-auto text-center w-fit'>Filtering Shoes</p>
              <X
                className='text-4xl transition duration-300 hover:cursor-pointer hover:text-gray-400'
                onClick={handleToggleMenu}
              />
            </div>
            <div className='px-2'>
              <SizePicker onSizePick={onSizePick} />
              <PriceRangePicker />
              <ColorPicker />
            </div>
            <div className='flex justify-between gap-6 px-4 pb-12'>
              <Button rounded={false} className={'w-60 h-12 text-lg'}>
                Clear Filters
              </Button>
              <Button rounded={false} className={'w-60 h-12 text-lg'}>
                Filter
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileSidebar;
