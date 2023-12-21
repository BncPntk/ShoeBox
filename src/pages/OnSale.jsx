import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';
import PageNav from '../components/PageNav';

function OnSale() {
  const pageTitle = 'On Sale';
  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      On Sale
    </div>
  );
}

export default OnSale;
