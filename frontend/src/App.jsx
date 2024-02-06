import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Latest from './pages/Latest';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import OnSale from './pages/OnSale';
import Product from './pages/Product';
import Liked from './pages/Liked';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import FilterContextProvider from './contexts/FilterContext.jsx';
import ShoesLayout from './pages/ShoesLayout.jsx';

function App() {
  return (
    <FilterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='latest' element={<Latest />} />
          <Route path='shoes' element={<ShoesLayout />}>
            <Route index element={<Home />} />
            <Route path='men' element={<Men />} />
            <Route path='men/:id' element={<Product />} />
            <Route path='women' element={<Women />} />
            <Route path='women/:id' element={<Product />} />
            <Route path='kids' element={<Kids />} />
            <Route path='kids/:id' element={<Product />} />
            <Route path='sale' element={<OnSale />} />
            <Route path='sale/:id' element={<Product />} />
          </Route>
          <Route path='liked' element={<Liked />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </FilterContextProvider>
  );
}

export function getPageTitle(pageTitle) {
  const baseTitle = 'ShoeBox';
  return `${pageTitle ? `${pageTitle} - ` : ''}${baseTitle}`;
}

export default App;
