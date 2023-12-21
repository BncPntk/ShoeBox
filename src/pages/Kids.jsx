import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';

function Kids() {
  const pageTitle = 'Kids';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      Kids
    </div>
  );
}

export default Kids;
