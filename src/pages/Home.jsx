import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <Carousel />
    </div>
  );
}

export default Home;
