import PageNav from '../components/PageNav';
import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';
import { useEffect, useState } from 'react';
import CONFIG from '../config';
import fetchData from '../apiUtils';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';
import CardGroup from '../components/CardGroup';
import Footer from '../components/Footer';
import PageSidebar from '../components/PageSidebar';
import MobileSidebar from '../components/MobileSidebar';

function Men() {
  const [menShoes, setMenShoes] = useState([]);
  const [isLoadingMen, setIsLoadingMen] = useState(false);
  const [errorMen, setErrorMen] = useState();
  const pageTitle = 'Men';
  const [pickedSize, setPickedSize] = useState(null);

  useEffect(() => {
    const menUrl = `${CONFIG.BASE_URL}/shoes?gender=men`;

    fetchData(menUrl, setMenShoes, setIsLoadingMen, setErrorMen);
  }, []);

  function handleSizePicker(size) {
    setPickedSize(size);
    console.log(pickedSize);
  }
  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      <div className='max-w-[1152px] pt-[48px] pb-[8px] mx-auto h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-[20%_80%] w-full gap-0'>
          {/* SIDEBAR */}
          <PageSidebar onSizePick={handleSizePicker} />
          <MobileSidebar onSizePick={handleSizePicker} />
          {/* SHOES GRID */}
          <div>
            {isLoadingMen && <Loader />}
            {errorMen && <ErrorRow />}
            {!isLoadingMen && <CardGroup title={'Men'} type={menShoes} />}
            {!isLoadingMen && <CardGroup title={'Men'} type={menShoes} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Men;
