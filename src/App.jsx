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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='latest' element={<Latest />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='kids' element={<Kids />} />
        <Route path='sale' element={<OnSale />} />
        <Route path='product' element={<Product />} />
        <Route path='liked' element={<Liked />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
