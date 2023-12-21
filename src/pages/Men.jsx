import PageNav from '../components/PageNav';
import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';

function Men() {
  const pageTitle = 'Men';
  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      Men
    </div>
  );
}

export default Men;
