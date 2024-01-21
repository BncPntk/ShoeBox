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

function Men() {
  const [menShoes, setMenShoes] = useState([]);
  const [isLoadingMen, setIsLoadingMen] = useState(false);
  const [errorMen, setErrorMen] = useState();
  const pageTitle = 'Men';

  useEffect(() => {
    const menUrl = `${CONFIG.BASE_URL}/shoes?gender=men`;

    fetchData(menUrl, setMenShoes, setIsLoadingMen, setErrorMen);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      {isLoadingMen && <Loader />}
      {errorMen && <ErrorRow />}
      {!isLoadingMen && <CardGroup title={'Men'} type={menShoes} />}
      <Footer />
    </div>
  );
}

export default Men;
