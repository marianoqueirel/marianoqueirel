import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Playground from "./components/Playground";
import Resume from "./components/Resume";
import SiteDoc from "./components/SiteDoc";

const App = () => {
  const { home, playground, resume, siteDescription } = routes;
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path={resume.path}>
          <Resume />
        </Route>
        <Route path={playground.path}>
          <Playground />
        </Route>
        <Route path={siteDescription.path}>
          <SiteDoc />
        </Route>
        <Route path={home.path}>
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
