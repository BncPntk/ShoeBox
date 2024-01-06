import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CardGroup from '../components/CardGroup';
import Banner from '../components/Banner';

function Home({ data }) {
  const popularCurrently = data
    .slice()
    .sort((a, b) => b.amountSold - a.amountSold)
    .slice(0, 4);

  const news = data
    .slice()
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
    .slice(0, 4);

  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <Carousel />
      <CardGroup title={'Popular Right Now'} type={popularCurrently} />
      <Banner />
      <CardGroup title={'New Releases'} type={news} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
