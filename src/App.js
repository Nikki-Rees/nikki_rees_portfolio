import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>

        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;