import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Pages/Home.jsx';
import Category from './Pages/Category.jsx';
import Product from './Pages/Product.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/:category', Component: Category },
  { path: '/:category/:product', Component: Product },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
