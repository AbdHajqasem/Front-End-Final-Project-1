import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./components/homepage/HomePage";
import Cart from "./components/cart/Cart";
import ProductList from "./components/productlist/ProductList";
import Product from "./components/product/product";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/:category",
        element: <ProductList />,
      },
      {
        path: "/:category/:product",
        element: <Product />,
      },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
