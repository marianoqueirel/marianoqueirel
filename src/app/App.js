import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Playground from "./components/Playground";

const App = () => {
  const { home, playground, resume, siteDescription } = routes;
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path={resume.path}>
          <h2>{resume.name}</h2>
        </Route>
        <Route path={playground.path}>
          <Playground />
        </Route>
        <Route path={siteDescription.path}>
          <h2>Site RepO: github/marianoqueirel</h2>
          <h2>Responsive </h2>
          <h2>Client side rendering </h2>
          <h2>
            Libraries used: - redux, redux-saga, material-ui, react-spring
          </h2>
          <h2>create react app </h2>
        </Route>
        <Route path={home.path}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
