import Main3Cards from "./components/Main3Cards";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Router>
      <ProductList />
      <Footer />
    </Router>
  );
};

export default App;
