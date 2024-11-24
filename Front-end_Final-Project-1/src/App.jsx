import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductList2 from "./components/ProductList2";

const App = () => {
  return (
    <Router>
      <ProductList2 />
      <Footer />
    </Router>
  );
};

export default App;
