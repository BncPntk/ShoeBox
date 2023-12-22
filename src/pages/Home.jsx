import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';

const imageContext = import.meta.glob('/public/slider/*.{png,jpg,jpeg,svg}');

const slides = Object.entries(imageContext).map(([path]) => ({
  id: path,
  path: path,
}));

function Home() {
  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <div className='max-w-[1152px] h-[400px] w-full py-16 px-4 relative'>
        <div
          style={{ backgroundImage: `url(${slides[0].path})` }}
          className='w-full h-full duration-700 bg-center bg-cover rounded-2xl'
        >
          {/* {slides.map((slide) => (
            <img key={slide.id} src={slide.path} alt={`Slide of ${slide.id}`} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
