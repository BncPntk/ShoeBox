import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';
import PageNav from '../components/PageNav';

function PageNotFound() {
  const pageTitle = 'Page Not Found.';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      404 NOT FOUND
    </div>
  );
}

export default PageNotFound;
