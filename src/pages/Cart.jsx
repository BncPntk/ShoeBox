import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';
import PageNav from '../components/PageNav';

function Cart() {
  const pageTitle = 'Your Cart';
  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      Cart
    </div>
  );
}

export default Cart;
