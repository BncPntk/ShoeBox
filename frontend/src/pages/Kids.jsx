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

function Kids() {
  const [kidsShoes, setKidsShoes] = useState([]);
  const [isLoadingKids, setIsLoadingKids] = useState(false);
  const [errorKids, setErrorKids] = useState();
  const pageTitle = 'Kids';

  useEffect(() => {
    const kidsUrl = `${CONFIG.BASE_URL}/shoes?gender=kids`;

    fetchData(kidsUrl, setKidsShoes, setIsLoadingKids, setErrorKids);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      {isLoadingKids && <Loader />}
      {errorKids && <ErrorRow />}
      {!isLoadingKids && <CardGroup title={'Kids'} type={kidsShoes} />}
      <Footer />
    </div>
  );
}

export default Kids;
