import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';

function Women() {
  const pageTitle = 'Women';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      Women
    </div>
  );
}

export default Women;
