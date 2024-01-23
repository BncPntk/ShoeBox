import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CardGroup from '../components/CardGroup';
import Banner from '../components/Banner';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';

import fetchData from '../apiUtils';
import CONFIG from '../config';

import { useEffect, useState } from 'react';

function Home() {
  const [popularCurr, setPopularCurr] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [isLoadingPopular, setIsLoadingPopular] = useState(false);
  const [isLoadingNewReleases, setIsLoadingNewReleases] = useState(false);
  const [errorPopular, setErrorPopular] = useState();
  const [errorNewReleases, setErrorNewReleases] = useState();

  useEffect(() => {
    const popularUrl = `${CONFIG.BASE_URL}/shoes/popular-now`;
    const newReleasesUrl = `${CONFIG.BASE_URL}/shoes/new-releases`;

    fetchData(popularUrl, setPopularCurr, setIsLoadingPopular, setErrorPopular);
    fetchData(newReleasesUrl, setNewReleases, setIsLoadingNewReleases, setErrorNewReleases);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <Carousel />

      {isLoadingPopular && <Loader />}
      {errorPopular && <ErrorRow text={`Oops! Something went wrong while fetching data from the server.`} />}
      {!isLoadingPopular && <CardGroup title={'Popular Right Now'} type={popularCurr} />}

      <Banner />

      {isLoadingNewReleases && <Loader />}
      {errorNewReleases && (
        <ErrorRow text={`Oops! Something went wrong while fetching data from the server.`} />
      )}
      {!isLoadingNewReleases && <CardGroup title={'New Releases'} type={newReleases} />}

      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
