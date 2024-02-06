import { useState, useEffect } from 'react';
import Button from './Button';
import Loader from './Loader';
import ArrowIcon from './ArrowIcon';
import { useNavigate } from 'react-router-dom';
import { colors } from '../data/colors';

const backendBaseUrl = 'https://raw.githubusercontent.com/BncPntk/ShoeBox/main/backend';

function ShoeItem({ shoeData }) {
  const { brand, name, price, imageCover, color, sizesEU } = shoeData;
  const [loading, setLoading] = useState(true);
  const [colorHex, setColorHex] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const image = new Image();
    image.src = `${backendBaseUrl}${imageCover}`;
    image.onload = () => setLoading(false);

    const foundColor = colors.find((c) => c.name.toLowerCase() === color?.toLowerCase());
    setColorHex(foundColor ? foundColor.hexCode : '');

    return () => {
      image.onload = null;
    };
  }, [color, imageCover]);

  return (
    <div className='py-4'>
      <div
        className='flex flex-row items-center gap-2 mt-8 mb-2 opacity-90 hover:cursor-pointer'
        onClick={() => navigate(-1)}
      >
        <ArrowIcon backgroundColor='black' rotation={-180} size={20}></ArrowIcon>
        <p className='py-2 text-xl font-bold'>Back</p>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className='grid h-auto grid-cols-3 gap-8'>
          <div className='flex col-start-1 col-end-3'>
            <div className='grid grid-cols-2 gap-1'>
              <div className='max-w-[400px] max-h-[400px] border-2 border-customDarkPurple'>
                <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
              </div>
              <div className='max-w-[400px] max-h-[400px] border-2 border-customDarkPurple'>
                <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
              </div>
              <div className='grid grid-cols-4 col-start-1 col-end-3 gap-1 mx-auto flex-cols'>
                <div className='max-w-[200px] max-h-[200px] border-2 border-customDarkPurple'>
                  <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
                </div>
                <div className='max-w-[200px] max-h-[200px] border-2 border-customDarkPurple'>
                  <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
                </div>
                <div className='max-w-[200px] max-h-[200px] border-2 border-customDarkPurple'>
                  <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
                </div>
                <div className='max-w-[200px] max-h-[200px] border-2 border-customDarkPurple'>
                  <img src={`${backendBaseUrl}${imageCover}`} alt={`${brand} ${name}`} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col col-start-3 px-2 pt-8 pb-2'>
            <h1 className='text-3xl break-words'>
              {brand} {name}
            </h1>
            <div className='flex items-center gap-1 py-2'>
              <div style={{ backgroundColor: colorHex }} className='w-6 h-6 rounded-full'></div>
              <p className='py-2 text-xl'>{color}</p>
            </div>
            <p className='py-4 text-4xl font-semibold'>
              {price} € <span className='text-sm font-semibold text-gray-500'>tax incl.</span>
            </p>
            <ul className='flex flex-wrap justify-center gap-2 pt-2 pb-8 mx-auto'>
              {sizesEU?.map((size, i) => (
                <li key={i} className='w-20 text-center border border-customPurple hover:cursor-pointer'>
                  {size.slice(3)}
                </li>
              ))}
            </ul>
            <div className='mt-auto'>
              <Button rounded={false} className='w-full py-3 text-xl'>
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className='col-span-3 px-2 mt-12 md:px-40 text-start text-zinc-700'>
            <h1 className='pt-8 pb-2 text-2xl font-semibold text-center underline md:text-start underline-offset-4 '>
              {brand} {name}
            </h1>
            <p>
              {`
              Introducing the ${name} - a perfect blend of style and comfort. These sleek athletic shoes
              are crafted with precision, featuring a breathable mesh upper and responsive cushioning for an
              unparalleled running experience. Elevate your stride with the Apex Runner, where performance
              meets fashion seamlessly`}
            </p>
            <h4 className='pt-8 pb-2 text-2xl font-semibold text-center underline md:text-start underline-offset-4 '>
              Materials
            </h4>
            <p className='pt-2 pb-8'>
              <span className='font-semibold text-customPurple'>Upper:</span> The upper is crafted from
              high-quality leather, providing a sleek and stylish appearance. This material not only enhances
              the overall aesthetic but also offers durability for everyday wear.
            </p>
            <p className='pt-2 pb-8'>
              <span className='font-semibold text-customPurple'>Lining:</span> Inside, you&apos;ll find a soft
              BambooBlend that wraps your feet in comfort. This breathable lining ensures that your feet stay
              cool and comfortable throughout the day.
            </p>
            <p className='pt-2 pb-8'>
              <span className='font-semibold text-customPurple'>Sole:</span>The sturdy QuantumRubber sole
              provides excellent traction and support. Whether you&apos;re navigating city streets or hitting
              the gym, these sneakers offer stability and grip.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoeItem;
