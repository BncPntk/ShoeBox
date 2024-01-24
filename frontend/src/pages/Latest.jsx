import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import fetchData from '../apiUtils';
import CONFIG from '../config';
import LatestGrid from './LatestGrid';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';

function Latest() {
  const [newAndFeatured, setnewAndFeatured] = useState([]);
  const [isLoadingnewAndFeatured, setIsLoadingnewAndFeatured] = useState(false);
  const [errornewAndFeatured, setErrornewAndFeatured] = useState();

  useEffect(() => {
    const newAndFeaturedUrl = `${CONFIG.BASE_URL}/shoes/new-featured`;

    fetchData(newAndFeaturedUrl, setnewAndFeatured, setIsLoadingnewAndFeatured, setErrornewAndFeatured);
  }, []);

  const pageTitle = 'New & Featured';

  return (
    <section>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      <div className='h-full max-w-6xl mx-auto my-28'>
        <h2 className='px-4 mb-12 text-4xl font-bold text-center text-zinc-900 lg:text-start'>{`New and Featured`}</h2>
        <div className='min-h-screen px-4'>
          {isLoadingnewAndFeatured && <Loader />}
          {errornewAndFeatured && (
            <ErrorRow text={`Oops! Something went wrong while fetching data from the server.`} />
          )}
          <LatestGrid data={newAndFeatured} />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Latest;
