import ArrowIcon from '../components/ArrowIcon';
import { useEffect, useState } from 'react';
import { CircleFill } from 'react-bootstrap-icons';
import sliderData from '../data/sliderData';
import Button from '../components/Button';

function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);
  const slides = sliderData;

  function prevSlide() {
    const isFirst = currIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
    setCurrIndex(() => newIndex);
  }

  function nextSlide() {
    const isLast = currIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currIndex + 1;
    setCurrIndex(() => newIndex);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currIndex]);

  return (
    <section className=''>
      <div className='flex max-w-[1152px] h-[550px] w-full px-4 relative mx-auto mt-28'>
        <div className='w-full h-full duration-700'>
          <img
            src={`${slides[currIndex].path}`}
            alt={`${slides[currIndex].title} slide`}
            loading='eager'
            className='object-cover w-full h-full'
          />
          <div
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 bg-zinc-900 p-2 cursor-pointer z-10'
            onClick={prevSlide}
          >
            <ArrowIcon rotation={-180} size={18} />
          </div>
          <div
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 bg-zinc-900 p-2 cursor-pointer z-10'
            onClick={nextSlide}
          >
            <ArrowIcon size={18} />
          </div>

          <div className='absolute left-0 right-0 z-10 flex items-center justify-center bottom-20'>
            {slides.map((slide, i) => (
              <div key={i} className='px-1.5 cursor-pointer' onClick={() => setCurrIndex(i)}>
                <CircleFill
                  size={10}
                  color={`rgba(248, 250, 252, ${currIndex === i ? 0.8 : 0.4})`}
                  style={{ zIndex: i === currIndex ? 1 : 0 }}
                />
              </div>
            ))}
          </div>

          {slides.map((slide, i) => (
            <div
              key={i}
              className={`pb-4 px-10 md:px-4 lg:px-0 absolute w-full h-full md:w-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                i === currIndex
                  ? 'opacity-100 transition-opacity duration-1200 ease-in-out'
                  : 'opacity-0 transition-opacity duration-1200 ease-in-out'
              } flex flex-col items-center lg:items-start justify-center`}
              style={{ zIndex: i === currIndex ? 1 : 0 }}
            >
              <h1 className='mb-12 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl lg:text-left'>
                {slide.title}
              </h1>
              <p className='mb-6 text-white max-w-[302px] text-center md:text-left'>{slide.text}</p>
              <Button rounded={false} className='z-10'>
                Discover
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
