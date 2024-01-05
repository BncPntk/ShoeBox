import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <Carousel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
