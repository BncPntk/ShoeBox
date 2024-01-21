import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <section className='px-4 py-16 '>
      <div className='max-w-[1152px] mx-auto'>
        <div className='flex flex-col px-4 mx-auto w-[160px]'>
          <div className='mx-auto'>
            <ThreeDots
              visible={true}
              height='60'
              width='120'
              color='#322821'
              radius='9'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClass=''
            />
          </div>
          <p className='text-lg font-medium text-center opacity-65'>Loading...</p>
        </div>
      </div>
    </section>
  );
}

export default Loader;
