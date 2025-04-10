import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteConfig from "./routes/RouteConfig";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-24 bg-gradient-to-r from-light via-slate-100 to-light text-slate-600 min-h-screen font-Jost selection:bg-primary selection:text-light ">
        <RouteConfig />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
