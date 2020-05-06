import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./Router";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Router />
  </Provider>
);

export default App;
