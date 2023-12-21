import { Helmet } from 'react-helmet';
import PageNav from '../components/PageNav';
import { getPageTitle } from '../App';

function Login() {
  const pageTitle = 'Login';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      Login
    </div>
  );
}

export default Login;
