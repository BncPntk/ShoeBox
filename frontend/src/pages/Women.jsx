import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';
import CardGroup from '../components/CardGroup';
import fetchData from '../apiUtils';
import CONFIG from '../config';
import Footer from '../components/Footer';
import PageSidebar from '../components/PageSidebar';
import MobileSidebar from '../components/MobileSidebar';
import { useFilterContext } from '../contexts/FilterContext';
import FilterNotFound from '../components/FilterNotFound';

function Women() {
  const { urlWithFilters, onSetType } = useFilterContext();
  const [womenShoes, setWomenShoes] = useState([]);
  const [isLoadingWomen, setIsLoadingWomen] = useState(false);
  const [errorWomen, setErrorWomen] = useState();
  const pageTitle = 'Women';

  useEffect(() => {
    const womenUrl = urlWithFilters || `${CONFIG.BASE_URL}/shoes?gender=women`;
    onSetType('women');

    fetchData(womenUrl, setWomenShoes, setIsLoadingWomen, setErrorWomen);
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
            {isLoadingWomen && <Loader />}
            {errorWomen && <ErrorRow />}
            {!isLoadingWomen && womenShoes.length === 0 && <FilterNotFound title={'Women'} />}
            {!isLoadingWomen && womenShoes.length !== 0 && <CardGroup title={'Women'} type={womenShoes} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Women;
