import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import Home from "../components/Home";
import Playground from "../components/Playground";
import Resume from "../components/Resume";
import Reddit from "../components/Reddit";
import SiteDoc from "../components/SiteDoc";
import routes from "../routes/routes";

const Router = () => {
  const { home, playground, resume, siteDescription, reddit } = routes;
  return (
    <BrowserRouter>
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
        <Route path={reddit.path}>
          <Reddit />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
