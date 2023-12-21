import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <PageNav />
      <h1 className='text-4xl text-center'>ShoeBox</h1>
    </div>
  );
}

export default Home;
