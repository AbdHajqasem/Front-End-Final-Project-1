import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/About";

const App = () => {
  return (
    <Router>
      <About />
      <Footer />
    </Router>
  );
};

export default App;
