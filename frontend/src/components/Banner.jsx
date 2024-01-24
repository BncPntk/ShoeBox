import { NavLink } from 'react-router-dom';
import Button from './Button';

function Banner() {
  return (
    <section className='py-[96px]'>
      <div className='w-full h-[250px] md:h-[228px] relative flex items-center justify-center'>
        <div className='absolute grid items-center grid-cols-2 px-4 md:items-end'>
          <div>
            <h2 className='pb-6 text-4xl font-bold text-white'>This Week&apos;s Best GIFTS</h2>
            <NavLink to='/notfound'>
              <Button rounded={false}>Shop Now</Button>
            </NavLink>
          </div>
          <div className='grid gap-4 md:grid-cols-2 justify-self-end'>
            <img className='w-24 h-auto md:w-36' src='/shoes/placeholder.png ' alt='' />
            <img className='w-24 h-auto md:w-36' src='/shoes/placeholder.png ' alt='' />
          </div>
        </div>
        <img src='/banner_1.jpg' alt='Banner' className='object-cover w-full h-full' />
      </div>
    </section>
  );
}

export default Banner;
