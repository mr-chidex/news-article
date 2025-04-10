import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteConfig from "./routes/RouteConfig";

const App = () => {
  return (
    <Router>
      <Header />
      <RouteConfig />
      <Footer />
    </Router>
  );
};

export default App;
