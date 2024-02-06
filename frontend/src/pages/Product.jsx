import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Loader from '../components/Loader';
import ErrorRow from '../components/ErrorRow';
import Footer from '../components/Footer';
import ShoeItem from '../components/ShoeItem';
import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';

const BASE_URL = 'https://shoebox-bcxy.onrender.com/api/v1/shoes';

function Product() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shoe, setShoe] = useState([]);
  const abortControllerRef = useRef(null);
  let pageTitle = ``;

  useEffect(() => {
    const fetchShoe = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setError(false);
      setIsLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/${id}`, { signal: abortControllerRef.current?.signal });
        const shoe = await res.json();
        setShoe(shoe.data.shoe);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShoe();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = `${shoe.brand} - ${shoe.name}`;
    }
  }, [isLoading, shoe]);

  return (
    <div className=''>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      <div className='px-4 py-16 '>
        <div className='max-w-[1152px] mx-auto mb-28'>
          {isLoading && <Loader />}
          {!isLoading && error && <ErrorRow text={'Something went wrong! Please try again.'} />}
          {!isLoading && !error && !shoe && <p>No data available.</p>}
          {!isLoading && !error && shoe && (
            <div>
              <ShoeItem shoeData={shoe} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
