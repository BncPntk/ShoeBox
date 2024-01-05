import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';
import Footer from '../components/Footer';

function Kids() {
  const pageTitle = 'Kids';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
    </div>
  );
}

export default Kids;
