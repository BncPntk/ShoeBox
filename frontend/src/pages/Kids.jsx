import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';
import CardGroup from '../components/CardGroup';
import fetchData from '../apiUtils';
import CONFIG from '../config';
import { useFilterContext } from '../contexts/FilterContext';
import PageSidebar from '../components/PageSidebar';
import MobileSidebar from '../components/MobileSidebar';
import FilterNotFound from '../components/FilterNotFound';

function Kids() {
  const { urlWithFilters, onSetType } = useFilterContext();
  const [kidsShoes, setKidsShoes] = useState([]);
  const [isLoadingKids, setIsLoadingKids] = useState(false);
  const [errorKids, setErrorKids] = useState();
  const pageTitle = 'Kids';

  useEffect(() => {
    const kidsUrl = urlWithFilters || `${CONFIG.BASE_URL}/shoes?gender=kids`;
    onSetType('kids');

    fetchData(kidsUrl, setKidsShoes, setIsLoadingKids, setErrorKids);
  }, [urlWithFilters, onSetType]);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      <div className='max-w-[1152px] pt-[48px] pb-[8px] mx-auto h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-[20%_80%] w-full gap-4'>
          {/* SIDEBAR */}
          <PageSidebar />
          <MobileSidebar />
          {/* SHOES GRID */}
          <div>
            {isLoadingKids && <Loader />}
            {errorKids && <ErrorRow />}
            {!isLoadingKids && kidsShoes.length === 0 && <FilterNotFound title={'KIDS'} />}
            {!isLoadingKids && kidsShoes.length !== 0 && <CardGroup title={'KIDS'} type={kidsShoes} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
