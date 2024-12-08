import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './components/homepage/HomePage';
import Cart from './components/cart/Cart';
import ProductList from './components/productlist/ProductList';
import Product from './components/product/product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthGuard from './components/AuthGurad';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/:category',
        element: <ProductList />,
      },
      {
        path: '/:category/:product',
        element: <Product />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
