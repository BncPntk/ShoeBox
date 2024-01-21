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

function Women() {
  const [womenShoes, setWomenShoes] = useState([]);
  const [isLoadingWomen, setIsLoadingWomen] = useState(false);
  const [errorWomen, setErrorWomen] = useState();
  const pageTitle = 'Women';

  useEffect(() => {
    const womenUrl = `${CONFIG.BASE_URL}/shoes?gender=women`;

    fetchData(womenUrl, setWomenShoes, setIsLoadingWomen, setErrorWomen);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      {isLoadingWomen && <Loader />}
      {errorWomen && <ErrorRow />}
      {!isLoadingWomen && <CardGroup title={'Women'} type={womenShoes} />}
      <Footer />
    </div>
  );
}

export default Women;
