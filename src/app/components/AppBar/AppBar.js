import React from "react";
import MaterialAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "./Drawer";
import Topbar from "./Topbar";
import { useLocation } from "react-router-dom";
import routes from "../../routes/routes";

const AppBar = () => {
  const { pathname } = useLocation();
  const showAppBar = pathname !== routes.reddit.path;

  return (
    showAppBar && (
      <MaterialAppBar position="static">
        <Toolbar>
          <Topbar />
          <Drawer />
        </Toolbar>
      </MaterialAppBar>
    )
  );
};

export default AppBar;
